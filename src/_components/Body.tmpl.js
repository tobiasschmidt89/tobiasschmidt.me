export default ({content, site, author, comp}) => {

    const SiteHeader = comp.siteHeader
    const SiteNavigation = comp.siteNavigation
    const SiteFooter = comp.siteFooter

    return `
<body>
    ${SiteHeader()}
    <main id="main">
        ${content}
    </main>
    ${SiteNavigation({author})}
    ${SiteFooter({site, author})}
</body>
`}

export const css = `
body {
    min-height: 100vh;
    padding: var(--frame);

    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter);
}

body > :not([aria-hidden="false"]) + * {
    padding-top: var(--gutter);
    border-top: var(--border);
}

main {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter);
}

main > * + * {
    padding-top: var(--gutter);
    border-top: var(--border);
}

`
