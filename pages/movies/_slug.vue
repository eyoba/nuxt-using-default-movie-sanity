<template>
  <SanityImage
    :v-if="poster.asset"
    :image="poster"
    :height="1200"
    :width="1200"
    class="image"
  />
</template>

<script>

    import groq from 'groq'
    import sanityClient from '~/sanityClient'
    import SanityImage from '~/components/SanityImage'

    const query = groq`
  *[_type == "movie" && slug.current == $slug][0] {..., "id": _id}
`

    export default {
        name: "_slug",
        components: {
            SanityImage
        },
        async asyncData({ params }) {
            return await sanityClient.fetch(query, params)
        }
    }
</script>

<style scoped>

</style>
