import markdownItMark from 'https://jspm.dev/markdown-it-mark'
import markdownItDeflist from 'https://jspm.dev/markdown-it-deflist'
import markdownItAbbr from 'https://jspm.dev/markdown-it-abbr'
import markdownItSub from 'https://jspm.dev/markdown-it-sub'
import markdownItSup from 'https://jspm.dev/markdown-it-sup'
import markdownItBlockImage from 'https://jspm.dev/markdown-it-block-image'

export default {
    plugins: [
        markdownItMark,
        markdownItDeflist,
        markdownItAbbr,
        markdownItSub,
        markdownItSup,
        markdownItBlockImage,
    ],
    options: {
        html: true,
        breaks: true,
        linkify: false,
        typographer: true,
    },
}
