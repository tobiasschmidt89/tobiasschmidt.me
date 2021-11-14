import TechHead from '../head/TechHead.js'
import MetaHead from '../head/MetaHead.js'

import Body from '../components/Body/tmpl.js'
import Article from '../components/Article/tmpl.js'
import PageHeader from '../components/PageHeader/tmpl.js'
import Prose from '../components/Prose/tmpl.js'

export const layout = 'layouts/base.njk'

export default ({title, description, date, subtitle, url, tags, site, time, author, content, search}) => {

    return`
    <head>
    ${TechHead({site})}
    ${MetaHead({title, description, url, tags, author})}
    </head>

    ${Body({ site, author, time, content: `
        ${Article({content:`
            ${PageHeader({title, subtitle})}
            ${Prose({content})}
        `})}
    `})}
`}
