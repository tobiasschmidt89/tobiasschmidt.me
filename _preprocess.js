// Workarround to make data available for njk groupby filter - will be resolved by Lume in upcoming version
const addFrontmatterYear = [
    ['.html'],
    (page) => (page._data.year = page.data.date.getFullYear())
]


export default [
    addFrontmatterYear
]
