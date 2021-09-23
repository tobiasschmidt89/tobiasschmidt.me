import lume from 'lume/mod.ts'
import date from 'lume/plugins/date.ts'
import svgo from 'lume/plugins/svgo.ts'
import inline from 'lume/plugins/inline.ts'
import postcss from 'lume/plugins/postcss.ts'
import slugifyUrls from 'lume/plugins/slugify_urls.ts'
import codeHighlight from 'lume/plugins/code_highlight.ts'

import markdown from './_markdown.js'
import preprocess from './_preprocess.js'
import process from './_process.js'
import helper from './_helper.js'

const site = lume(
    {
        location: new URL('/', 'https://tobiasschmidt.me/'),
        src: './src',
    },
    { markdown }
)

site.use(date())
    .use(svgo())
    .use(inline())
    .use(postcss())
    .use(slugifyUrls())
    .use(codeHighlight())

site.copy('assets/fonts')
    .copy('assets/img')
    .copy('assets/js')
    .copy('tobiasschmidt.pgp')

for (let p of preprocess) {
    site.preprocess(p[0], p[1])
}

for (let p of process) {
    site.process(p[0], p[1])
}

for (let h of helper) {
    site.helper(h[0], h[1], { type: h[2]})
}

export default site
