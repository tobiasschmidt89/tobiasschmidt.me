import lume from "https://deno.land/x/lume@v1.2.1/mod.ts"
import date from 'https://deno.land/x/lume@v1.2.1/plugins/date.ts'
import svgo from 'https://deno.land/x/lume@v1.2.1/plugins/svgo.ts'
import inline from 'https://deno.land/x/lume@v1.2.1/plugins/inline.ts'
import postcss from 'https://deno.land/x/lume@v1.2.1/plugins/postcss.ts'
import slugifyUrls from 'https://deno.land/x/lume@v1.2.1/plugins/slugify_urls.ts'
import codeHighlight from 'https://deno.land/x/lume@v1.2.1/plugins/code_highlight.ts'

import markdown from './_markdown.js'
import preprocess from './_preprocess.js'
import process from './_process.js'
import helper from './_helper.js'
import components from './_components.js'

const site = JSON.parse(Deno.readTextFileSync('./src/_data/site.json'));

const generator = lume(
    {
        location: new URL('/', site.url),
        src: './src',
    },
    { markdown }
)

generator
    .use(date())
    .use(svgo())
    .use(inline())
    .use(postcss())
    .use(slugifyUrls())
    .use(codeHighlight())

generator
    .copy('assets/fonts')
    .copy('assets/img')
    .copy('assets/js')
    .copy('tobiasschmidt.pgp')

for (let p of preprocess) {
    generator.preprocess(p[0], p[1])
}

for (let p of process) {
    generator.process(p[0], p[1])
}

for (let h of helper) {
    generator.helper(h[0], h[1], h[2])
}

for (let c of components) {
    generator.helper(c[0], c[1], c[2])
}

export default generator
