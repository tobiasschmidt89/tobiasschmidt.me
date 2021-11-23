export default ({title, description, url, image, date, author, site}) => {

    const blogPosting = {
        '@context': "http://schema.org",
        '@type': "BlogPosting",
        '@id': `${new URL(`${url}#blogposting`, site.url)}`,
        url: url,
        mainEntityOfPage: "True",
        headline: title,
        description: description,
        dateCreated: date,
        datePublished: date,
        dateModified: date,
        author: {
            '@type': "Person",
            '@id': author['@id'],
            name: author.name,
            url: author['@id']
        },
        publisher: {
            '@type': "Organization",
            name: author.name,
            logo: {
                '@type': "ImageObject",
                url: `${new URL('/assets/img/favicon.png', site.url)}`,
                width: 192,
                height: 192
            }
        }
    }

    if (image) {
        blogPosting.image = {
            '@type': "ImageObject",
            url: `${new URL(image.url, site.url)}`
        }
    }

    return `
    <!-- BlogPosting Schema -->
    <script type="application/ld+json" id="blogposting">
        ${JSON.stringify(blogPosting)}
    </script>
    `
}
