export default ({prevPost = "", nextPost = ""}) => `
<footer class="post-footer">
    ${nextPost && `
    <div>
        <h2>Older</h2>
        <a href="${nextPost.data.url}" rel="next">${nextPost.data.title}</a>
    </div>
    `}
    ${prevPost && `
        <div>
            <h2>Newer</h2>
            <a href="${prevPost.data.url}" rel="prev">${prevPost.data.title}</a>
        </div>
    `}
    <div class="post-footer-full">
        <a href="/" rel="home">Back to Index</a>
    </div>
</footer>
`

export const css = `
.post-footer {
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: var(--cols);
    gap: var(--gutter);

    border-top: var(--border);
    padding-top: var(--gutter);
}

.post-footer h2 {
    font-weight: normal;
}

.post-footer a {
    color: var(--link-on-canvas);
    text-decoration: none;
}

.post-footer-full {
    grid-column: 1 / -1;
}

`
