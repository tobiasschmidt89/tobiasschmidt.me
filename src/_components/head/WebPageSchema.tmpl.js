export default ({title, description, url, author}) => {

    const webPage = {
        '@context': "http://schema.org",
        '@type': "WebPage",
        '@id': `${url}#blogposting`,
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
    <script type="application/ld+json" id="webpage">
        ${JSON.stringify(webPage)}
    </script>
    `
}
