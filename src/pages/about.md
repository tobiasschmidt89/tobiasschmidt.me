---
url: /about/
title: Colophon
subtitle: About this website
description: About this website
tags:
    - page
    - about
---

<header>

# [{{ title }}](/)

{{ subtitle }}

</header>

tobiasschmidt.me is my personal website. I use it to share personal thoughts, document what I learned, plant some digital seeds, and host some unique content I want to share for particular reasons. Even so I tend to write about my profession I try to keep the tone personal on this site.

One of the most crucial elements of the success of the web was its open nature. If you want to know how a website is built you can pretty much inspect all source code with a simple `rightclick > view source` in a readable way. Furthermore many web participants share their experience and knowledge of the web to inspire others. Therefore I am happy to be part of this open web with my small blog.

On this page you can find my sources of inspiration, and background informations on my build process and design.

<section>

## Design

The more I work with the web, the more I realise that websites are about their content and offerings---design then helps to make this content accessible and enjoyable. Unfortunately many websites focus on complex design to trigger a "wow" effect.

But this comes at a huge cost in terms of maintenance, development and content creation effort. This is something I am not able to afford for a personal website. Therefore my website is bare-bone, simple, minimalist, brutalist, purist, or whatever you want to call a site that is simple to handle.

My website features a single column blogging layout inspired by [manuelmoreale.com](https://manuelmoreale.com/), [matthewsmith.website](https://matthewsmith.website/), [cmhb.de](https://cmhb.de/), [frankchimero.com](https://frankchimero.com/) and many more. Single column layouts provide a calm reading experience for text-driven websites. They resemble classic text documents, emails, letters, etc. and are therefore straightforward to understand and navigate. They also fit into [the webs grain](https://frankchimero.com/blog/2015/the-webs-grain/) and follow the vertical scrolling behaviour we learned to love.

On most websites I often play around with the top menu before I read the first line of the actual content. Then I might be lost mindlessly clicking through the pages of the site instead of reading the content I was initially interested in. Therefore my website does not feature a top navigation (often called burger navigation in web jargon). I did also avoid any sidebars, teasers or other elements that could introduce distractions throughout the reading experience. Visitors should be able to enjoy content _as is_ instead of being overloaded with other content.

Instead my website features an old-school footer navigation with a sitemap. Most posts are quite short so it should be fast to reach the navigation. For screenreader users I provide a hidden link to the navigation. Additionally it is possible to go to the index page that lists all posts by clicking the page title. I am still undecided if I want to feature the newest post directly on the homepage like [manuelmoreale.com](https://manuelmoreale.com/). I like that I can leave Manu's site on one tab, refresh it every now and then to read his updates.

I implemented a monochrome color scheme with a light and dark mode that reacts to system settings of your operation system via CSS media queries. I decided to not provide a manual theme switcher as this would require me to set a cookie or local storage on your browser. This is something I avoid to leave a minimal footprint on your system.

I use the open source font [Inter] that provides a tasteless experience that is similar to the default fonts of most operating systems, but allows me to provide optimised typography across all operating systems. Default system fonts have many advantages, but they have slightly different sizes and characteristics per platform which makes it difficult to find optimal settings for line-height and tracking. Inter allows me to tune those crucial settings once for all platforms. Additionally Inter offers many features like monospace numbers for tables. I only use two font-weights and a single font-size---inspired by the website of [cmhb.de](https://cmhb.de/). The font-size is bound to the width of the browser and therefore scales on larger devices. This helps with readability on TVs, projectors and other large scale devices. The website also respects the font-size and zoom settings of your browser settings.

</section><section>

## Coding

This site is created with the static site generator [Lume]. No frameworks are used to create this site, everything is built in simple templating languages that are compiled to pure HTML, CSS and JS. Assets, CSS and JS are directly processed via Lume so that I am able to have simple DX features like splitting CSS components in multiple files. I implemented additional extensions that allow me to write blog posts with rich typography in Markdown.

The website uses a HTML-first approach that optimises semantics where possible. The sites works just fine with deactivated CSS and/or JavaScript. If things are not available as an HTML element I plan to use web components to create custom elements that resolve the task.

I avoided usage of any CSS classes for styling (except for some special cases that are not in my control). Using semantic selectors (e.g. `a[rel="home"]` vs. `a.home`) is a nice way to stay content first as every design consideration is somehow reflected in the content. I imagine this was the early intention of CSS until we started to build more and more complex layouts. Anyway this restriction forced me to stay very streamlined on the features of the site. And _I guess I am a purist._

The website offers optimised [Schema] metadata for site, page, article and author information. I furthermore included [Open Graph] and [Twitter Card] meta tags that provide optimised previews when links of this site are shared in social networks. I still need to find a way to create automatic images for my blog posts as I do not have a suitable image all the time. _(PS: I am a `<meta>` tag nerd---let me know if I forgot some.)_

Content images are lazy loaded with the native `loading="lazy"` feature of browsers to reduce initial payload of all sites. I do provide width and height of images where possible to avoid layout shifts when the images are loaded. This plus many optimisations allows to reach awesome load performance. I hope Lume will get an image plug-in to further optimise images with multiple image sizes for different screens in the future.

</section><section>

## Hosting

This site is hosted on a [Hetzner] server. The connection is encrypted with a TLS certificate. I created a [custom server configuration](/server/) that optimises sever performance by using [good caching defaults](https://web.dev/love-your-cache/) and file compression. Additionally I configured the server to instruct browsers to send as few personal information as possible.

</section>

<footer>

_Please [let me know][Email] in case you have any questions about how I create this site and I will try to give you more details._

</footer>

{% include "abbr.njk" %}
{% include "links.njk" %}
