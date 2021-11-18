export default ({date}) => {
    const humanDate = new Intl.DateTimeFormat('de-DE').format(date)
    return `<time datetime="${date}">${humanDate}</time>`
}
