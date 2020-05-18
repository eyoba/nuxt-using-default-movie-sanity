<template>
<div>

  <Breadcrumb :crumbs="getCrumbs()"></Breadcrumb>

  <SanityImage
    :v-if="image.asset"
    :image="image"
    :height="1200"
    :width="1200"
    class="image"
  />

</div>
</template>

<script>

    import groq from 'groq'
    import sanityClient from '~/sanityClient'
    import SanityImage from '~/components/SanityImage'
    import Breadcrumb from '~/components/Breadcrumb'

    const query = groq`
  *[_type == "person" && slug.current == $slug][0] {..., "id": _id}
`

    export default {
        name: "_slug",
        components: {
            SanityImage,
            Breadcrumb
        },
        async asyncData({ params }) {
            return await sanityClient.fetch(query, params)
        },
        methods:{
            getCrumbs() {
                return [
                    {
                        title: "people",
                        url: "/people",
                        active: false
                    },
                    {
                        title: "Person",
                        url: "",
                        active: true
                    }
                ];
            }
        }

    }
</script>

<style scoped>

</style>
