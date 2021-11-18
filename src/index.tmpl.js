import Tech from './_components/head/Tech.tmpl.js'
import Meta from './_components/head/Meta.tmpl.js'
import WebsiteSchema from './_components/head/WebsiteSchema.tmpl.js'

import Body from './_components/Body.tmpl.js'
import Article from './_components/Article.tmpl.js'
import PostHeader from './_components/PostHeader.tmpl.js'
import Prose from './_components/Prose.tmpl.js'
import PostList from './_components/PostList.tmpl.js'

export const layout = 'layouts/base.njk'
export const url = '/'
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

    return `
    <head>
    ${Tech({site})}
    ${Meta({title, description, url, tags, author})}
    ${WebsiteSchema({site})}
    </head>

    ${Body({site, author, content: `
        ${Article({ content: `
            ${PostHeader({title: lastPostTitle, date: lastPostDate})}
            ${Prose({content: lastPostHtml})}
        `})}
        ${PostList({posts})}
    `})}
`}
