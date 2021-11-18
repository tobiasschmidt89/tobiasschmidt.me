import Tech from '../../_components/head/Tech.tmpl.js'
import Meta from '../../_components/head/Meta.tmpl.js'
import OpenGraph from '../../_components/head/OpenGraph.tmpl.js'
import Twitter from '../../_components/head/Twitter.tmpl.js'
import BlogPostingSchema from '../../_components/head/BlogPostingSchema.tmpl.js'

import Body from '../../_components/Body.tmpl.js'
import Article from '../../_components/Article.tmpl.js'
import PostHeader from '../../_components/PostHeader.tmpl.js'
import Prose from '../../_components/Prose.tmpl.js'
import PostFooter from '../../_components/PostFooter.tmpl.js'

export const layout = 'layouts/base.njk'

export default ({title, description, date, url, image, tags, site, time, author, content, search}) => {

    const prevPost = search.previousPage(url, "post", "date=desc")
    const nextPost = search.nextPage(url, "post", "date=desc")

    const absoluteUrl = `${site.url}${url}`
    const dateTime = new Date(date)

    return `
    <head>
    ${Tech({site})}
    ${Meta({title, description, url, tags, author})}
    ${OpenGraph({title, description, url, site, image})}
    ${Twitter({title, description, author, image})}
    ${BlogPostingSchema({title, description, url: absoluteUrl, date: dateTime, author, site})}
    </head>

    ${Body({site, author, content: `
        ${Article({content: `
            ${PostHeader({title, date})}
            ${Prose({content})}
            ${PostFooter({prevPost, nextPost})}
        `})}
    `})}
`}
