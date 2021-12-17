const addFrontmatterYear = [
    ['.html'],
    (page) => (page.data.year = page.data.date.getFullYear())
]

export default [
    addFrontmatterYear
]
