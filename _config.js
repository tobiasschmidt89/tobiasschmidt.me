import lume from 'lume/mod.ts'
import date from 'lume/plugins/date.ts'
import svgo from 'lume/plugins/svgo.ts'
import inline from 'lume/plugins/inline.ts'
import postcss from 'lume/plugins/postcss.ts'
import slugifyUrls from 'lume/plugins/slugify_urls.ts'
import codeHighlight from 'lume/plugins/code_highlight.ts'

import markdown from './_markdown.js'

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

// Make data available for njk groupby filter - will be resolved by Lume in upcoming version
site.preprocess(
    ['.html'],
    (page) => (page._data.year = page.data.date.getFullYear())
)

// Add target blank and noopener to external links
site.process(['.html'], (page) => {
    const links = page.document.getElementsByTagName('a')
    Array.from(links).forEach((link) => {
        if (/https?:\/\//.test(link.getAttribute('href'))) {
            link.setAttribute('target', '_blank')
            link.setAttribute('rel', 'noopener')
        }
    })
}).process(['.html'], (page) => {
    const images = page.document.getElementsByTagName('img')
    Array.from(images).forEach((image) => {
        image.setAttribute('loading', 'lazy')
        // image.setAttribute('width', image.naturalWidth)
        // image.setAttribute('height', image.naturalHeight)
    })
})

// Used to remove custom fields from json ld scripts
site.filter('x', (data) => {
    const { x, ...rest } = data
    return rest
})

site.helper(
    'datetime',
    (date) => {
        const humanDate = new Intl.DateTimeFormat('de-DE').format(date)
        return `<time datetime="${date}">${humanDate}</time>`
    },
    { type: 'tag' }
)

export default site
