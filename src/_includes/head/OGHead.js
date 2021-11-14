export default ({title, description, url, site, image = ""}) => `
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="${title}" />
<meta property="og:site_name" content="${site?.name}" />
<meta property="og:url" content="${url}" />
<meta property="og:description" content="${description}" />
<meta property="og:locale" content="${site?.x?.locale}">
${ image && `<meta property="og:image" content="${image?.url}" />`}
`
