// Used to remove custom fields from json ld scripts
const x = [
    'x',
    (data) => {
        const { x, ...rest } = data
        return rest
    },
    'filter'
]

// Used to render <time> html element
const datetime = [
    'datetime',
    (date) => {
        const humanDate = new Intl.DateTimeFormat('de-DE').format(date)
        return `<time datetime="${date}">${humanDate}</time>`
    },
    'tag'
]



export default [
    x,
    datetime
]
