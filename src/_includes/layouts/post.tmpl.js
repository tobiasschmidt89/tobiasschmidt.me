import TechHead from '../head/TechHead.js'
import MetaHead from '../head/MetaHead.js'
import OGHead from '../head/OGHead.js'
import TwitterHead from '../head/TwitterHead.js'
import SchemaBlogPostingHead from '../head/SchemaBlogPostingHead.js'

import Body from '../components/Body/tmpl.js'
import Article from '../components/Article/tmpl.js'
import PostHeader from '../components/PostHeader/tmpl.js'
import Prose from '../components/Prose/tmpl.js'
import PostFooter from '../components/PostFooter/tmpl.js'

export const layout = 'layouts/base.njk'

export default (
    {title, description, date, url, image, tags, site, time, author, content, search}) => {

    const prevPost = search.previousPage(url, "post", "date=desc")
    const nextPost = search.nextPage(url, "post", "date=desc")

    const absoluteUrl = `${site.url}${url}`
    const dateTime = new Date(date)

    return`
    <head>
    ${TechHead({site})}
    ${MetaHead({title, description, url, tags, author})}
    ${OGHead({title, description, url, site, image})}
    ${TwitterHead({title, description, author, image})}
    ${SchemaBlogPostingHead({title, description, url: absoluteUrl, date: dateTime, author, site})}
    </head>

    ${Body({ site, author, time, content: `
        ${Article({content:`
            ${PostHeader({title, date})}
            ${Prose({content})}
            ${PostFooter({prevPost, nextPost})}
        `})}
    `})}
`}
