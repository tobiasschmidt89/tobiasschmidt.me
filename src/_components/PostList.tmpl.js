export default ({posts}) => {

    return `
    <nav class="post-list" id="post-list">
        <h2>Writing</h2>
        ${posts.map((post) =>`
            <a href="${post.data.url}">
            ${post.data.title}
            <p>${post.data.description}</p>
            </a>
        `).join('')}
    </nav>
    `
}

export const css = `
.post-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter)
}

.post-list ol {
    list-style: none;
}

.post-list > ol > li {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gap)
}

.post-list h2 {
    font-weight: normal;
}

.post-list a {
    text-decoration: none;
    color: var(--link-on-canvas);
}

.post-list a:hover {
    color: unset;
}
`
