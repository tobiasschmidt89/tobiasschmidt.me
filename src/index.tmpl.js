export const layout = 'layouts/base.njk'
export const url = '/'
export const title = 'Tobias Schmidt'
export const subtitle = 'Digitalisation Expert'
export const description = `Tobias Schmidt's personal website.`
export const tags = ['index', 'list']

export default async (
    {site, time, author, content, search, comp},
    { njk, md, url, date, htmlUrl }) => {

    const Tech = comp.tech
    const Meta = comp.meta
    const WebsiteSchema = comp.websiteSchema

    const Body = comp.body
    const Article = comp.article
    const PostHeader = comp.postHeader
    const Prose = comp.prose
    const PostList = comp.postList

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
