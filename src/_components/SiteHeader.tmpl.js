export default () => `
<header id="site-header" class="site-header" aria-hidden="false">
    <a href="#nav" id="skiplink">Go to navigation.</a>
</header>
`

export const css = `
.site-header {
    position: absolute;
    margin: -1px;
    padding: 0;

    height: 1px;
    width: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    overflow: hidden;
}

.site-header:focus-within {
    all: unset;
}
`
