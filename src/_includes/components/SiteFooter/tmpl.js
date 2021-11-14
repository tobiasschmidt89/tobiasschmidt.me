export default ({time, author, site}) => `
<footer id="site-footer" class="site-footer">
    <p>&copy;${time.year} <a class="h-card" href="${site.url}" rel="me">${author.name}</a></p>
</footer>
`
