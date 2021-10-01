// Used to remove custom fields from json ld scripts
const x = [
    'x',
    (data) => {
        const { x, ...rest } = data
        return rest
    },
    { type: 'filter' }
]

// Used to render <time> html element
const datetime = [
    'datetime',
    (date) => {
        const humanDate = new Intl.DateTimeFormat('de-DE').format(date)
        return `<time datetime="${date}">${humanDate}</time>`
    },
    { type: 'tag' }
]



export default [
    x,
    datetime
]
