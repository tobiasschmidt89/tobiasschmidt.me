import Tech from '../../_components/head/Tech.tmpl.js'
import Meta from '../../_components/head/Meta.tmpl.js'
import OpenGraph from '../../_components/head/OpenGraph.tmpl.js'
import Twitter from '../../_components/head/Twitter.tmpl.js'
import WebPageSchema from '../../_components/head/WebPageSchema.tmpl.js'
import AboutPageSchema from '../../_components/head/AboutPageSchema.tmpl.js'
import ProfileSchema from '../../_components/head/ProfileSchema.tmpl.js'

import Body from '../../_components/Body.tmpl.js'
import Article from '../../_components/Article.tmpl.js'
import PageHeader from '../../_components/PageHeader.tmpl.js'
import Prose from '../../_components/Prose.tmpl.js'

export const layout = 'layouts/base.njk'

export default ({title, description, date, subtitle, url, tags, site, time, author, content, search}) => {

    const isProfile = url.includes('/profile/') || ""
    const isAboutPage = url.includes('/about/') || ""

    return `
    <head>
    ${Tech({site})}
    ${Meta({title, description, url, tags, author})}
    ${OpenGraph({title, description, url, site})}
    ${Twitter({title, description, author})}
    ${WebPageSchema({title, description, url, author})}
    ${isAboutPage && AboutPageSchema({title, description, url, author})}
    ${isProfile && ProfileSchema({author})}
    </head>

    ${Body({ site, author, content: `
        ${Article({content: `
            ${PageHeader({title, subtitle})}
            ${Prose({content})}
        `})}
    `})}
`}
