export default ({title, subtitle}) => `
<header class="page-header">
    <h1><a href="/">${title}</a></h1>
    <p class="page-header-subtitle">${subtitle}</p>
</header>
`

export const css = `
.page-header h1 {
    font-weight: var(--bold);
}

.page-header-subtitle {
    color: var(--link-on-canvas);
}

.page-header a {
    text-decoration: none;
}
`
