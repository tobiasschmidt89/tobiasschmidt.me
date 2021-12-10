// Used to remove custom fields from json ld scripts
const x = [
    'x',
    (data) => {
        console.log('X')
        const { x, ...rest } = data
        return rest
    },
    { type: 'filter' }
]

const setAttribute = [
    'setAttribute',
    (dictionary, key, value) => {
        dictionary[key] = value;
        return dictionary;
    },
    { type: 'filter' }
]

export default [
    x,
    setAttribute,
]
