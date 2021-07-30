import API_URL from "@/boot/api";

const state = {
  posts: null,
  loader: false
};

const getters = {};


const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },

  SET_LOADER_TRUE() {
    state.loader = true
  },

  SET_LOADER_FALSE() {
    state.loader = false
  }
};

const actions = {
  loadPosts({ commit }) {
    commit("SET_LOADER_TRUE")
    return new Promise((resolve, reject) => {
      API_URL.get("posts")
        .then((response) => {
          console.log(response.data);
          commit("SET_POSTS", response.data)
          commit("SET_LOADER_FALSE")
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
