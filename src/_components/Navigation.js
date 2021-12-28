export default ({prevPost = "", nextPost = ""}) => `
<footer>
    ${nextPost && `
    <div>
        Older<br>
        <a href="${nextPost.data.url}" rel="prev">${nextPost.data.title}</a>
    </div>
    `}
    ${prevPost && `
        <div>
            Newer<br>
            <a href="${prevPost.data.url}" rel="next">${prevPost.data.title}</a>
        </div>
    `}
    <div>
        <a href="/" rel="home">Back to Index</a>
    </div>
</footer>
`
