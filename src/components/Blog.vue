<template>
  <div class="flex justify-start">
    <div class="box-border h-44 w-44 p-6 border-4 m-6 text-center" v-for="post in $store.getters.posts" :key="post.title">
      <div>
        {{ post.title }}
      </div>
      <div>
        {{ post.description }}
      </div>
      <button class="h-12 px-6 py-1 mt-4 text-md text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        Edit
      </button>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Blog',
  data () {
    return {
      posts: [],
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8001/api/posts')
      .then(response => this.$store.dispatch('getPosts', response.data.data))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
