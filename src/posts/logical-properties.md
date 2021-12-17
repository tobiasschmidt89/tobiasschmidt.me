---
title: Using logical CSS properties
description: My experience with using logical properties.
date: 2021-12-17
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

I have read about logical CSS properties a couple of times, but I never was motivated to use them. Now the time has come for me to try them out on my blog.

Basically logical properties are available for all spacing and alignment properties in CSS---`margin`, `padding`, `border`, `position`, `text-align`, `width`, `height`, and many more.

Historically most of these properties used `top`, `right`, `left` and `bottom` to specify where the property should be applied to an element. A typical example would be `border-left: 1px solid black;` which would add a border to the left of an element. This works great for western cultures where text is often left to right.

But other cultures have different systems to layout text. Some are right to left. Some flow their paragraphs from right to left instead of top to bottom. So `top`, `right`, `left` and `bottom` only makes sense in the context of the western top to bottom, left to right layout systems.

**Logical properties to the rescue.**

Logical properties instead make directions relative. The `block` direction is the direction paragraphs flow (top to bottom in western systems). The `inline` direction is the direction words flow (left to right in western systems). Additionally, each direction has `start` and `end` keywords to specify if a property should be applied to the start or end in relation to the layout direction. So our example above can be expressed as `border-inline-start: 1px solid black;` with logical properties. That is it.

---

The refactoring on my website consisted of replacing spacing, sizing and alignment properties in my stylesheet with their new keywords. So the adjustment was straightforward and could be solved with a couple of search-and-replace operations. I just encountered one challenge---shorthand properties like `margin` and `padding` have no logical alternatives, instead, I needed to split them into two properties, one for block and one for inline spacing.

After that, I used the translate function of Chrome and the `writing-mode`  CSS property to see how my site feels for different settings. And it worked great. I managed to nail it on my first attempt (to be honest I just think I nailed it, I don't know eastern languages enough to validate if the layout is actually correct---at least it looks clean). Here you can see my [styleguide](/styleguide/) translated in simplified Chinese with a `vertical-rl` `writing-mode` setting. How cool is that. The entire adjustment and test took maybe 20 minutes.

![Styleguide in Chinese and vertical writing mode.](/assets/img/styleguide-chinese-vertical-writing-mode.png)

</section><footer>

_Logical properties are a great example where a tiny change on the web platform can make the web more accessible and inclusive. The effort to implement the new properties is pretty much identical to the classic properties they replace. The development community "just" needs to adopt them. Personally, I am now fully committed to them over their historic counterparts. Maybe someone will translate and read my blog in Chinese one day and appreciate the work. Please [let me know](mailto:{{ author.email }}) in case there is something I can do to improve the reading experience for you!_

</footer>

{% include "links.njk" %}
