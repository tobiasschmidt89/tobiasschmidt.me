export const layout = 'layouts/base.njk'

export default ({title, description, date, url, image, tags, site, time, author, content, search, comp}) => {

    const Tech = comp.tech
    const Meta = comp.meta
    const OpenGraph = comp.openGraph
    const Twitter = comp.twitter
    const BlogPostingSchema = comp.blogPostingSchema

    const Body = comp.body
    const Article = comp.article
    const PostHeader = comp.postHeader
    const Prose = comp.prose
    const PostFooter = comp.postFooter

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
