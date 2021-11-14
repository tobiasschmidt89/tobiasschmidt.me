import TechHead from './_includes/head/TechHead.js'
import MetaHead from './_includes/head/MetaHead.js'

import Body from './_includes/components/Body/tmpl.js'
import Article from './_includes/components/Article/tmpl.js'
import PostHeader from './_includes/components/PostHeader/tmpl.js'
import Prose from './_includes/components/Prose/tmpl.js'
import PostList from './_includes/components/PostList/tmpl.js'

export const url = '/'
export const layout = 'layouts/base.njk'
export const title = 'Tobias Schmidt'
export const subtitle = 'Digitalisation Expert'
export const description = `Tobias Schmidt's personal website.`
export const tags = ['index', 'list']

export default async (
    {site, time, author, content, search},
    { njk, md, url, date, htmlUrl }) => {

    const lastPost = search.pages("post", "date=desc").shift()
    const lastPostData = lastPost.data
    const lastPostTitle = lastPost.data.title
    const lastPostDate = lastPost.data.date
    const lastPostContent = lastPost.data.content
    const lastPostMarkdown = await njk(lastPostContent, lastPostData)
    const lastPostHtml = await md(lastPostMarkdown)

    const posts = search.pages("post", "date=desc")

    return`
    <head>
    ${TechHead({site})}
    ${MetaHead({title, description, url, tags, author})}
    </head>

    ${Body({site, author, time, content: `
        ${Article({ content: `
            ${PostHeader({title: lastPostTitle, date: lastPostDate})}
            ${Prose({content: lastPostHtml})}
        `})}
        ${PostList({posts})}
    `})}
`}
