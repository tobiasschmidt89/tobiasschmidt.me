---
title: Will it last 10 years?
description: Thoughts on the resilience of my blog.
date: 2021-09-26
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

It is fascinating to stumble on websites that exist for many years, or even decades. Sites like [https://meyerweb.com/](https://meyerweb.com/) have posts from 1999. This was a time before I even started to realise what the internet is and how to access it.

This got me thinking 💭---_Will my blog still exist in 10 years?_

Throughout my career I regularly encountered website requirements like fast development times, or high flexibility. But shouldn't we ask ourselves how we can make websites reliable, resilient and easy to maintain? Recently I found  [some](https://mcfunley.com/choose-boring-technology) [posts](https://macwright.com/2020/05/10/spa-fatigue.html) about this topic that got me hooked. I really enjoy the idea of marrying a minimalist mindset with using boring and straightforward technology.

So for this blog I will try to focus on exactly this---making a site that lasts. Let's have a look at some choices I took:

1. I try to have a minimalist mindset to every aspect of the site: design, code and content. Do I need 5 visual alternatives for bullet point lists or is one design enough? Do I need 4 levels of headings or can I simplify the content to work with two levels? Do I need this fancy new developer tool or can I create a 5 line script to solve it myself.
2. Instead of complex compilation processes I decided to stay close to the DNA of the web. My templating system only automates some copy and paste work to create HTML, CSS and JS files.
3. I use a simple layout based on semantic HTML. I only use interactivity where necessary. Thus my site even works without CSS and JS.
4. My entire website consists of static files---it is pretty much a folder of HTML, CSS, JS and some assets. To deploy this blog I drag and drop this folder onto the file browser of my server via FTP. To my knowledge it can not be any more basic to host a website.
5. I avoid closed source and paid dependencies. Thus I am not dependent on the success of individual companies.
6. I apply small regular updates instead of sporadic large coding sessions. This allows the website to evolve step by step.

=> I don't have superhuman powers 🦸‍♂️ to know if I am taking the right decisions to make this blog last. But I hope that I will be able to look back at this post in 10 years.

</section><footer>

_What do you think about taking a boring and minimalist approach to websites? What are your tactics to make a website that might last 10 or even 30 years? I would be happy to [hear about your thoughts](mailto:{{ author.email }})._

</footer>

{% include "links.njk" %}
