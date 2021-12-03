export const layout = 'layouts/base.njk'

export default ({title, description, date, url, image, tags, site, time, author, content, search, comp}) => {

    const Tech = comp.tech
    const Meta = comp.meta
    const OpenGraph = comp.openGraph
    const Twitter = comp.twitter
    const BlogPostingSchema = comp.blogPostingSchema

    const Body = comp.body
    const Prose = comp.prose

    const prevPost = search.previousPage(url, "post", "date=desc")
    const nextPost = search.nextPage(url, "post", "date=desc")

    return `
    <head>
    ${Tech({site})}
    ${Meta({title, description, url, site, tags, author})}
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
