import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
  },
  mutations: {
    GET_POSTS(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    getPosts(context, payload) {
      context.commit('GET_POSTS', payload);
    }
  },
  getters: {
    posts: state => {
      return state.posts;
    }
  }
});
