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
