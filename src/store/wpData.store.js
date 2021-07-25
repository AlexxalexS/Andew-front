import API_URL  from "@/boot/api";

const state = {
  // messages: [],
};

const getters = {};

const actions = {
  loadPosts() {
    return new Promise((resolve, reject) => {
      API_URL.get("posts")
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  loadImagePost(_, data) {
    return new Promise((resolve, reject) => {
      API_URL.get(`media/${data.id}`)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  loadOncePost(_, data) {
    return new Promise((resolve, reject) => {
      API_URL.get(`media?parent=${data.id}`)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
};

const mutations = {
  /*
        SET_MESSAGES(state, payload) {
            state.messages = payload;
        }
     */
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
