<template>

  <figure :v-if="info.image">
    <SanityImage
      :image="info.image"
      :width="1800"
      :height="500"
      class="mainImage"
    />
    <figcaption>{{ info.description }}</figcaption>
  </figure>

       <!--
       <ul class="vendors">
       <li
      v-for="frontside in this.$store.state.data.frontsider"
      :key="frontside._id"
      class="vendor"
    >
      <router-link
        v-if="frontside.slug"
        :to="'/vendor/' + frontside.slug.current"
        class="link"
      >
        <SanityImage
          v-if="frontside.image"
          :image="frontside.image"
          class="image"
        />
        <div class="meta">
          <span class="vendorTitle">{{ frontside.title }}</span>&nbsp;
        </div>
      </router-link>
    </li>
  </ul>
-->


</template>

<script >
    //import logo from "~/components/Logo.vue"
    //import groq from 'groq'
    import sanityClient from '~/sanityClient'
    import SanityImage from '~/components/SanityImage'

    const query = `
  {
    "info": *[_type == "frontside"] {
      ..., image { ..., asset->}
    }[0]
  }
`

     export default {
         components: {
             //logo
             SanityImage
         },
         async asyncData() {
             return await sanityClient.fetch(query)
         }
    }
</script>

<style>

  .mainImage {
    width: 100%;
    vertical-align: top;
  }
/*.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}*/
</style>
