export const url = '/feed.json'

export default async function (
    { site, author, time, search },
    { njk, md, url, date, htmlUrl }
) {
    const feed = {
        version: 'https://jsonfeed.org/version/1',
        title: site.name,
        home_page_url: url('', true),
        feed_url: url('feed.json', true),
        description: site.description,
        date_modified: date(time.stamp, 'ATOM'),
        author: {
            name: author.name,
            email: author.email,
            url: url('', true),
        },
        items: [],
    }

    for (const post of search.pages('post', 'date=desc')) {

        const pageMarkdown = await njk(post.data.content, post.data)
        const pageHtml = await md(pageMarkdown)

        feed.items.push({
            id: url(post.data.url, true),
            url: url(post.data.url, true),
            title: post.data.title,
            content_html: htmlUrl(pageHtml, true),
            date_published: date(post.data.date, 'ATOM'),
            date_modified: date(post.data.date, 'ATOM'),
        })
    }

    return JSON.stringify(feed, null, 2)
}
