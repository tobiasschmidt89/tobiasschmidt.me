export default ({title, subtitle}) => `
<header class="page-header">
    <h1><a href="/">${title}</a></h1>
    <p>${subtitle}</p>
</header>
`

export const css = `
.page-header * {
    font-weight: var(--bold);
}

.page-header a {
    text-decoration: none;
}

@media (min-width: 900px) {

    .page-header {
        position: fixed;
        top: var(--gutter);
    }

}
`
