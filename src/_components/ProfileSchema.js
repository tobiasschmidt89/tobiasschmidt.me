export default ({author}) => {

    const { x, ...rest } = author

    return `
<!-- Profile Schema -->
<script type="application/ld+json" id="profile">
    ${JSON.stringify(rest)}
</script>
`
}
