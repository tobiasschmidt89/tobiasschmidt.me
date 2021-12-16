const externalLinkAttributes = [
    ['.html'],
    (page) => {
        const links = page.document.getElementsByTagName('a')
        Array.from(links).forEach((link) => {
            if (/https?:\/\//.test(link.getAttribute('href'))) {
                link.setAttribute('target', '_blank')
                link.setAttribute('rel', 'noopener')
            }
        })
    }
]

const imageLazyLoading = [
    ['.html'],
    (page) => {
        const images = page.document.getElementsByTagName('img')
        Array.from(images).forEach((img) => {
            img.setAttribute('loading', 'lazy')

            // Need to find another way to autogenerate img width and height as this is not supported in Deno :/
            // image.setAttribute('width', image.naturalWidth)
            // image.setAttribute('height', image.naturalHeight)
        })
    }
]

export default [
    externalLinkAttributes,
    imageLazyLoading
]
