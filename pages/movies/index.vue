<template>
  <div class="container">
    <div>

      <b-breadcrumb :items="breadcrumbitems"></b-breadcrumb>


      <!-- <logo />-->
      <h1 class="title">
        data from sanity: <!--{{ info.name }}-->
      </h1>
      <h2 class="subtitle">
        my first nuxt project
      </h2>

      <b-list-group>
        <b-list-group-item
          v-for="movie in this.$store.state.data.movies"
          :key="movie._id"
        >
          <SanityImage
            :width="256"
            :height="256"
            :image="movie.poster"
            class="avatar"
          />
          <router-link
            v-if="movie.slug"
            :to="'/movies/' + movie.slug.current"
          >
            {{ movie.title }}
          </router-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
    import SanityImage from '~/components/SanityImage'
    export default {
        name: "index",
        components: {
            SanityImage
        },
        data() {
            return {
                breadcrumbitems: [
                    {
                        text: 'Movielist',
                        href: '/'
                    },
                    {
                        text: 'Searchable Movielist',
                        active: true
                    },

                ]
            }
        }
    }

</script>

<style scoped>

</style>
