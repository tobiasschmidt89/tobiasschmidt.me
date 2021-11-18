export default ({title, description, url, author}) => {

    const aboutPage = {
        '@context': "http://schema.org",
        '@type': "AboutPage",
        '@id': `${url}#aboutpage`,
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
    <!-- WebPage Schema -->
    <script type="application/ld+json" id="aboutpage">
        ${JSON.stringify(aboutPage)}
    </script>
    `
}
