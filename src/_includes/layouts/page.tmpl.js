export const layout = 'layouts/base.njk'

export default ({title, description, date, subtitle, url, tags, site, time, author, content, search, comp}) => {

    const Tech = comp.tech
    const Meta = comp.meta
    const OpenGraph = comp.openGraph
    const Twitter = comp.twitter
    const WebPageSchema = comp.webPageSchema
    const AboutPageSchema = comp.aboutPageSchema
    const ProfileSchema = comp.profileSchema

    const Body = comp.body
    const Article = comp.article
    const Header = comp.header
    const Prose = comp.prose

    const isProfile = url.includes('/profile/') || ""
    const isAboutPage = url.includes('/about/') || ""

    return `
    <head>
    ${Tech({site})}
    ${Meta({title, description, url, site, tags, author})}
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
