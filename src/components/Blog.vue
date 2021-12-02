<template>
  <div class="hello">
    {{ JSON.stringify($store.getters.posts) }}
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
