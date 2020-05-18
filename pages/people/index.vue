<template>
  <div class="container">
  <div>
  <h1 class="mb-3">Velg person</h1>

    <table v-if="this.$store.state.data.people.length > 0" class="table">
      <tbody>
      <tr v-for="person in this.$store.state.data.people" :key="person._id">
        <td>
          <!--<router-link :to="{name: 'Forside', params: {organization: org.id}}">{{org.name}}</router-link>-->
          <router-link
            v-if="person.slug"
            :to="'/people/' + person.slug.current"
          >
            {{ person.name }}
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>

  <b-list-group>
    <b-list-group-item
      v-for="person in this.$store.state.data.people"
      :key="person._id"
    >
     <SanityImage
       :v-if="person.image"
        :width="256"
        :height="256"
        :image="person.image"
        class="avatar"
      />
      <router-link
        v-if="person.slug"
        :to="'/people/' + person.slug.current"
      >
        {{ person.name }}

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
        }
    }

</script>

<style scoped>

</style>
