export default ({author}) => `
<nav id="site-navigation" class="site-navigation">
    <div>
        <strong>${author.givenName}</strong>
        <a href="/profile/">About</a>
        <a href="/now/">Now</a>
    </div>
    <div>
        <strong>Connect</strong>
        <a href="mailto:${author.email}">Email</a>
        <a href="https://github.com/${author.x.social.github}">GitHub</a>
        <a href="https://www.linkedin.com/in/${author.x.social.linkedin}">LinkedIn</a>
    </div>
    <div>
        <strong>Blog</strong>
        <a href="/#post-list">Index</a>
        <a href="/subscribe/">Subscribe</a>
        <a href="/styleguide/">Styleguide</a>
    </div>
    <div>
        <strong>Site</strong>
        <a href="/about/">Colophon</a>
        <a href="/legal/">Imprint</a>
        <a href="/privacy/">Privacy</a>
    </div>
</nav>
`

export const css = `
.site-navigation {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--gutter);
}

@media screen and (min-width: 900px) {
    .site-navigation {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

.site-navigation div * {
    display: block;
}

.site-navigation a {
    text-decoration: none;
    color: var(--link-on-canvas);
}

.site-navigation a:hover {
    color: unset;
}
`
