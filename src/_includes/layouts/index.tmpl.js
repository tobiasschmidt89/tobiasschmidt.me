export const layout = 'layouts/base.njk'

export default async (
    {title, description, tags, url, site, time, author, content, search, comp},
    {njk, md, date, htmlUrl}) => {

    const Tech = comp.tech
    const Meta = comp.meta
    const OpenGraph = comp.openGraph
    const Twitter = comp.twitter
    const WebPageSchema = comp.webPageSchema
    const WebsiteSchema = comp.websiteSchema

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
