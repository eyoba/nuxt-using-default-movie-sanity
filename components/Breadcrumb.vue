<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link :to="`/`">Hjem</router-link>
      </li>
      <li
        class="breadcrumb-item"
        v-for="item in crumbs"
        :key="item.index"
        v-bind:class="{ active: item.active }"
      >
        <span v-if="item.active">{{item.title}}</span>
        <router-link v-if="!item.active" :to="item.url">{{item.title}}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ["crumbs"]
};
</script>

<style scoped>
.breadcrumb {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;
  margin-bottom: 0.3rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  background-color: #fff;
  padding-left: 0;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: ">";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.breadcrumb-item {
  font-size: 14px;
}

.breadcrumb-item a {
  color: #3A5A8A;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: .5rem;
}

</style>
