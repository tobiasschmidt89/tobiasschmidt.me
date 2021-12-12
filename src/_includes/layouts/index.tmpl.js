export const layout = 'layouts/base.njk'

export default async (
    {title, description, tags, url, site, time, author, content, search, comp},
    {njk, md, date, htmlUrl}) => {

    const Tech = comp.head.tech
    const Meta = comp.head.meta
    const OpenGraph = comp.head.openGraph
    const Twitter = comp.head.twitter
    const WebPageSchema = comp.head.webPageSchema
    const WebsiteSchema = comp.head.websiteSchema

    const Body = comp.body

    const posts = search.pages("post", "date=desc")

    return `
    <head>
    ${Tech({site, url})}
    ${Meta({title, description, site, tags, author})}
    ${OpenGraph({title, description, url, site})}
    ${Twitter({title, description, author})}
    ${WebsiteSchema({site})}
    </head>
    ${Body({site, author, url, content})}
`}
