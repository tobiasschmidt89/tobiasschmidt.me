export default ({content, author, url, site, nextPost, prevPost, comp}) => {

    const Navigation = comp.navigation

    const notIndex = url !== "/" || ""

    return `
<body>
    <main id="main">
        ${content}
    </main>
    ${notIndex && Navigation({nextPost, prevPost})}
</body>
`}

export const css = `
body {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter);

    min-height: 100vh;
    max-width: var(--text-measure);
    margin: auto;
    padding: var(--frame);
}

body > main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter);
}
`
