export default ({content}) => `
<div class="prose">
${content}
</div>
`

export const css = `
.prose {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gap);
}

.prose :is(section, aside, footer) {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gap);
}

.prose :is(h1, h2, h3, h4, h5, h6) {
    font-weight: var(--bold);
}

.prose h3 {
    font-style: italic;
}

.prose :is(* + h2, * + section, * + footer) {
    margin-top: var(--gap);
}

.prose :is(b, strong) {
    font-weight: var(--bold);
}

.prose :is(i, em) {
    font-style: italic;
}

.prose s {
    text-decoration: line-through;
}

.prose time {
}

.prose sub {
    font-feature-settings: 'subs' 1;
}

.prose sup {
    font-feature-settings: 'sups' 1;
}

.prose a {
    color: var(--link-on-canvas);
    text-decoration: underline;
    text-decoration-color: var(--decoration-on-canvas);
}

.prose a:hover {
    color: unset;
    text-decoration-color: unset;
}

.prose :is(h1, h2, h3) > a {
    color: unset;
    text-decoration: none;
}

.prose blockquote {
    border-left: var(--border);
    border-width: 0.3em;
    padding-left: calc(var(--gap) * 0.4);
    margin-left: calc(var(--gap) * -0.4 - 0.3em);
    font-style: italic;
}

.prose address * {
    margin: 0;
}

.prose dl {
}

.prose dl dt {
    font-weight: var(--bold);
    font-style: italic;
}

.prose dl dd + dt {
    margin-top: var(--gap);
}

.prose dl dd::before {
    content: '↳ ';
}

.prose ul {
    list-style: disc;
}

.prose ul ::marker {
    content: '• ';
    color: var(--decoration-on-canvas);
    padding-left: calc(var(--gap) / 2);
    margin-left: calc(var(--gap) * -0.5);
}

.prose ol {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--gap);
    list-style-position: inside;
    counter-reset: ordered-list;
}

.prose ol li {
    counter-increment: ordered-list;
}

.prose ol ::marker {
    content: counter(ordered-list) '\u20dd  ';
}

.prose ul li,
.prose dl dd {
    margin-top: 0;
}

.prose hr {
    border: none;
    border-top: var(--border);
    width: 100%;
}

.prose * + hr,
.prose hr + * {
    margin-top: var(--gap);
}

.prose figure[style*='overflow-x'] {
    margin-left: calc(-1 * var(--gap));
    margin-right: calc(-1 * var(--gap));
}

.prose figure[style*='overflow-x'] > figure {
    padding: 0 var(--gap) var(--gap);
}

.prose figcaption {
    margin-top: calc(var(--gap) / 3);
}

.prose figcaption * {
    display: inline;
}

.prose figcaption::before {
    content: '↳ ';
}

.prose table {
    border: var(--border);
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;

    font-feature-settings: "tnum" 1;
}

.prose table th {
    font-weight: var(--bold);
    text-align: left;
}

.prose table th,
.prose table td {
    padding: var(--gap);
    border-bottom: var(--border);
}

.prose details {
    padding-top: var(--gap);
    padding-bottom: var(--gap);
    border-top: var(--border);
    border-bottom: var(--border);

}

.prose details ::marker {
    content: '▷ ';
    color: var(--decoration-on-canvas);
    padding-left: calc(var(--gap) / 2);
    margin-left: calc(var(--gap) * -0.5);
    font-size: 90%;
}

.prose details[open] ::marker {
    content: '▽ ';
}

.prose details + details {
    margin-top: 0;
    border-top: none;
}

.prose details summary {
    cursor: pointer;
    list-style-position: outside;
}

@media not screen and (hover: hover) {

    .prose abbr[title] {
        text-decoration: none;
    }

    .prose abbr[title]:after {
        content: ' (' attr(title) ')';
    }

}

@media screen and (hover: hover) {

    .prose abbr[title] {
        text-decoration: underline dotted;
        text-decoration-color: var(--decoration-on-canvas);
        cursor: help;
    }

}
`
