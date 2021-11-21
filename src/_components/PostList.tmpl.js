export default ({posts}) => {

    const postsByYear = posts.reduce(function(years, post) {
        const year = post.data.year
        years[year] = [...(years[year] || []), post]
        return years;
    }, {});

    const postByYearEntries = Object.entries(postsByYear)

    return `
    <nav class="post-list" id="post-list">
        <ol reversed>
            ${postByYearEntries.map(([year, posts])=>`
            <li>
                <h2>${year}</h2>
                <ol>
                    ${posts.map((post) =>`
                    <li>
                        <a href="${post.data.url}">${post.data.title}</a>
                    </li>
                    `).join('')}
                </ol>
            </li>
            `).join('')}
        </ol>
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
