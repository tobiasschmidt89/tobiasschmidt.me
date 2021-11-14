import DateTime from '../DateTime/tmpl.js'

export default ({title, date}) => `
<header class="post-header">
    <h1><a href="/">${title}</a></h1>
    <p>${DateTime({date})}</p>
</header>
`
