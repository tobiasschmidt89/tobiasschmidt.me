export default ({title, description, url, author}) => {

    const profile = {
        "@context": "http://schema.org",
        "@type": "ProfilePage",
        "@id": `${new URL(`${url}#profilepage`, site.url)}`,
        url: url,
        name: title,
        description: description,
        author: {
            "@type": "Person",
            "@id": author['@id'],
            name: author.name,
            url: author['@id']
        },
        mainEntity: {
            "@type": "Person",
            "@id": author['@id'],
            name: author.name,
            url: author['@id']
        }
    }

    return `
    <!-- ProfilePage Schema -->
    <script type="application/ld+json" id="profile">
        ${JSON.stringify(profile)}
    </script>
    `
}
