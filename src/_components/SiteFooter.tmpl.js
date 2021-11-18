const year = new Date().getFullYear()

export default ({author, site}) => `
<footer id="site-footer" class="site-footer">
    <p>&copy;${year} <a class="h-card" href="${site.url}" rel="me">${author.name}</a></p>
</footer>
`
