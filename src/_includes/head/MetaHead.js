export default ({title, description, author, url, tags}) => `
<!-- Meta -->
<title>${title} | ${author.name}</title>
<meta name="title" content="${title} | ${author.name}">
<meta name="description" content="${description}" />
<meta name="keywords" content="${tags}" />
<meta name="copyright" content="${author.name }}<${author.email}>" />
<meta name="author" content="${author.name}<${author.email}>" />
<meta name="robots" content="index,follow" />
<meta name="referrer" content="no-referrer">
<link rel="canonical" href="${url}">
<link type="text/plain" rel="author" href="humans.txt" />
`
