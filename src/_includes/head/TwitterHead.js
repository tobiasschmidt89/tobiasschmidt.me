export default ({title, description, author, image = ""}) => `
<!-- Twitter -->
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="${author.x.social.twitter}" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
${ image && `<meta name="twitter:image" content="${image.url}" />`}
`
