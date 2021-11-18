export default ({prevPost = "", nextPost = ""}) => `
<footer class="post-footer">
    ${prevPost && `
        <div>
            <h2>Newer</h2>
            <a href="${prevPost.data.url}" rel="prev">${prevPost.data.title}</a>
        </div>
    `}
    ${nextPost && `
    <div>
        <h2>Older</h2>
        <a href="${nextPost.data.url}" rel="next">${nextPost.data.title}</a>
    </div>
    `}
</footer>
`
