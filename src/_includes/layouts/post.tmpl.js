export const layout = 'layouts/base.njk'

export default ({title, description, date, url, image, tags, site, time, author, content, search, comp}) => {

    const Tech = comp.head.tech
    const Meta = comp.head.meta
    const OpenGraph = comp.head.openGraph
    const Twitter = comp.head.twitter
    const BlogPostingSchema = comp.head.blogPostingSchema

    const Body = comp.body

    const prevPost = search.previousPage(url, "post", "date=desc")
    const nextPost = search.nextPage(url, "post", "date=desc")

    return `
    <head>
    ${Tech({url, site})}
    ${Meta({title, description, site, tags, author})}
    ${OpenGraph({title, description, url, site, image})}
    ${Twitter({title, description, author, image})}
    ${BlogPostingSchema({title, description, url, date, author, site})}
    </head>
    ${Body({site, author, url, prevPost, nextPost, content: `
        <article>
            ${content}
        </article>
    `})}
`}
