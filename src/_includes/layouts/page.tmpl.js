export const layout = 'layouts/base.njk'

export default ({title, description, date, subtitle, url, tags, site, time, author, content, search, comp}) => {

    const Tech = comp.head.tech
    const Meta = comp.head.meta
    const OpenGraph = comp.head.openGraph
    const Twitter = comp.head.twitter
    const WebPageSchema = comp.head.webPageSchema
    const AboutPageSchema = comp.head.aboutPageSchema
    const ProfileSchema = comp.head.profileSchema

    const Body = comp.body

    const isProfile = url.includes('/profile/') || ""
    const isAboutPage = url.includes('/about/') || ""

    return `
    <head>
    ${Tech({url, site})}
    ${Meta({title, description, site, tags, author})}
    ${OpenGraph({title, description, url, site})}
    ${Twitter({title, description, author})}
    ${WebPageSchema({title, description, url, author, site})}
    ${isAboutPage && AboutPageSchema({title, description, url, author, site})}
    ${isProfile && ProfileSchema({author})}
    </head>
    ${Body({site, author, url, content: `
        <article>
            ${content}
        </article>
    `})}
`}
