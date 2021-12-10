export default ({title, description, url, author, site}) => {

    const aboutPage = {
        '@context': "http://schema.org",
        '@type': "AboutPage",
        '@id': `${new URL(`${url}#aboutpage`, site.url)}`,
        url: url,
        name: title,
        description: description,
        author: {
            '@type': "Person",
            '@id': author['@id'],
            name: author.name,
            url: author['@id']
        }
    }

    return `
    <!-- AboutPage Schema -->
    <script type="application/ld+json" id="aboutpage">
        ${JSON.stringify(aboutPage)}
    </script>
    `
}
