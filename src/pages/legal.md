---
url: /legal/
title: Legal Notice
subtitle: Imprint
description: Legal Notice of the website.
date: 2021-09-16
tags: legal
---

<header>

# [{{title}}](/)

{{subtitle}}

</header>

<section>

tobiasschmidt.me is the personal website of {{ author.name }}. Following you will find information pursuant to &sect; 5 TMG.

</section><section>

## Contact

<address>

{{ author.name }}
{{ author.address.streetAddress }}
{{ author.address.postalCode }} {{ author.address.addressLocality }}<br>
[{{ author.telephone }}][Phone]
[{{ author.email }}][Email] ([PGP])

</address>

Sales tax identification number (VAT ID) according to &sect; 27 a of the Sales Tax Law:
{{ author.x.vatID }}

</section><section>

## Disclaimer

### Liability for Contents

As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.

Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.

### Liability for Links

Our offer includes links to external third party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.

The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.

### Copyright

Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only. The commercial use of our contents without permission of the originator is prohibited.

Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.

Code examples on this page are published under [MIT] license.

</section><section>

<footer>

_Updated {{ comp.dateTime({date: date}) | safe }}_

</footer>

{% include "links.njk" %}
