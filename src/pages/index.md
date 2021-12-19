---
layout: layouts/index.tmpl.js
url: /
title: Tobias Schmidt
subtitle: Digitalisation Expert
description: Tobias Schmidt's personal website.
tags: index
---

<header>

# [{{title}}](/)

{{subtitle}}

</header>

<section>

*An engineer at heart with a business value-driven mindset.* I currently work at the intersection of online marketing, business intelligence and marketing automation to enable companies to deliver dependable, personalised and profitable digital experiences to their customers. On my blog, I am sharing thoughts on digitalisation and the web.

</section><section>

## Writing

<nav>{%- for post in search.pages("post") | reverse -%}
<a href="{{post.data.url}}">{{ post.data.title }}</a>{%- if loop.index !== loop.length -%}<br />{%- endif -%}
{%- endfor -%}</nav>

</section><section>

## Connect

I am interested in meeting new people, learning new things, and helping with interesting projects. I am happy to connect on [LinkedIn](https://www.linkedin.com/in/{{author.x.social.linkedin}}) and [Github](https://github.com/{{author.x.social.github}}). To stay in touch I am looking forward to receiving an Email. If you like the content I write on my blog you can consider [subscribing](/subscribe/) to my feed. In case you would like to learn more about me you can check out my [profile](/profile/), [now](/now/) and [uses](/uses/) pages.

</section><section>

## Site

My website is open-source published on [GitHub](https://github.com/{{author.x.social.github}}/{{site.x.domain}}). You can find an overview of all modules I use across the website in my [Styleguide](/styleguide/). Check out my [Colophon](/about/) to learn how I created this site. In the [Privacy Policy](/privacy/), you will find information on how this website handles your data. The [Legal Notice](/legal/) includes other important information.

</section>

{% include "links.njk" %}
