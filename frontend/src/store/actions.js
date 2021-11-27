import api from "@/api";

export const actions = {
    getClients({ commit }) {
      api.get("/clients").then((res) => {
        commit("GET_CLIENTS", res.data);
      });
    },
    getProviders({ commit }) {
      api.get("/providers").then((res) => {
        commit("GET_PROVIDERS", res.data);
      });
    },
    addClient({ commit }, newClient) {
      api.post("/newClient", { ...newClient }).then((res) => {
        commit("ADD_CLIENT", res.data);
      });
    },
    editClient({ commit }, editClient) {
      api.put("/editClient", { ...editClient }).then((res) => {
        commit("EDIT_CLIENT", res.data);
      });
    },
    deleteClient({ commit }, id) {
      api.delete("/deleteClient", { data: { _id: id } }).then((res) => {
        commit("DELETE_CLIENT", res.data);
      });
    },
    addProvider({ commit }, newProvider) {
      api.post("/newProvider", { name: newProvider }).then((res) => {
        commit("ADD_PROVIDER", res.data);
      });
    },
    deleteProvider({ commit }, _id) {
      api.delete("/deleteProvider", { data: { _id: _id } }).then((res) => {
        commit("DELETE_PROVIDER", res.data);
      });
    },
    toggleNewModal({ commit }, toggle) {
      commit("TOGGLE_MODAL_NEW", toggle);
    },
    toggleEditModal({ commit }, toggle) {
      commit("TOGGLE_MODAL_EDIT", toggle);
    },
    getClientToEdit({ commit }, client) {
      commit("GET_CLIENT_TO_EDIT", client);
    },
  };