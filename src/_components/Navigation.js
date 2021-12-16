export default ({prevPost = "", nextPost = ""}) => `
<footer>
    ${nextPost && `
    <div>
        <span>Older</span>
        <a href="${nextPost.data.url}" rel="next">${nextPost.data.title}</a>
    </div>
    `}
    ${prevPost && `
        <div>
            <span>Newer</span>
            <a href="${prevPost.data.url}" rel="prev">${prevPost.data.title}</a>
        </div>
    `}
    <div class=".full">
        <a href="/" rel="home">Back to Index</a>
    </div>
</footer>
`
