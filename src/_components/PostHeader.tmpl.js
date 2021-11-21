export default ({title, date, comp}) => {

    const DateTime = comp.dateTime

    return `
<header class="post-header">
    <h1><a href="/">${title}</a></h1>
    <p>${DateTime({date})}</p>
</header>
`}

export const css = `
.post-header * {
    font-weight: var(--bold);
}

.post-header a {
    text-decoration: none;
}

@media (min-width: 900px) {

    .post-header {
        position: fixed;
        top: var(--gutter);
    }

}

`
