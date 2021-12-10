export default ({date}) => {
    const humanDate = new Intl.DateTimeFormat('de-DE').format(new Date(date))
    const dateTime = (new Date(date)).toISOString()
    return `<time datetime="${dateTime}">${humanDate}</time>`
}
