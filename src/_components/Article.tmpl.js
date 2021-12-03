export default ({content}) => `
<article class="article">
    ${content}
</article>
`

export const css = `
.article {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gutter);
}
`
