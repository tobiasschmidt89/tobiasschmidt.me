const timestamp = Date.now()

export default ({site}) => `
<!-- Tech -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Lume">
<link rel="manifest" href="/manifest.json">
<link rel="alternate" href="/feed.xml" type="application/atom+xml" title="${site.name}">
<link rel="alternate" href="/feed.json" type="application/json" title="${site.name}">

<!-- Assets -->
<link rel="stylesheet" href="/assets/css/main.css?v=${timestamp}" />
<link rel="stylesheet" href="/components.css?v=${timestamp}" />

<!-- Favicon -->
<meta name="theme-color" content="white">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="white">
<meta name="theme-color" media="(prefers-color-scheme: dark)"  content="black">
<link rel="icon" href="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20100%20100%22%3E%3Ctext%20y=%22.9em%22%20font-size=%2290%22%3E👋%3C/text%3E%3C/svg%3E">
`
