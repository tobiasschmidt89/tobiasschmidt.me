export default ({prevPost = "", nextPost = ""}) => `
<footer>
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
    <div class=".full">
        <a href="/" rel="home">Back to Index</a>
    </div>
</footer>
`

export const css = `
body > footer {
    grid-column: 1 / -1;

    display: grid;
    grid-template-columns: var(--cols);
    gap: var(--gutter);

    border-top: var(--border);
    padding-top: var(--gutter);
}

body > footer h2 {
    font-weight: normal;
}

body > footer a {
    text-decoration: none;
}

body > footer .full {
    grid-column: 1 / -1;
}
`
