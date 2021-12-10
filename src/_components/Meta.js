export default ({title, description, site, author, tags}) => `
<!-- Meta -->
<title>${title} | ${author?.name}</title>
<meta name="title" content="${title} | ${author?.name}" />
<meta name="description" content="${description}" />
<meta name="keywords" content="${tags}" />
<meta name="copyright" content="${author?.name}<${author?.email}>" />
<meta name="author" content="${author?.name}<${author?.email}>" />
<link type="text/plain" rel="author" href="${new URL('humans.txt', site?.url)}" />
`
