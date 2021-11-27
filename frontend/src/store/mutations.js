export const mutations = {
    GET_CLIENTS(state, payload) {
      state.clients = payload;
    },
    GET_PROVIDERS(state, payload) {
      state.providers = payload;
    },
    ADD_CLIENT(state, payload) {
      state.isClientAdded = payload;
    },
    EDIT_CLIENT(state, payload) {
      state.isClientEdited = payload;
    },
    DELETE_CLIENT(state, payload) {
      state.isClientDeleted = payload;
    },
    ADD_PROVIDER(state, payload) {
      state.isProviderAdded = payload;
    },
    DELETE_PROVIDER(state, payload) {
      state.isProviderDeleted = payload;
    },
    TOGGLE_MODAL_NEW(state, payload) {
      state.isNewModalOpen = payload;
    },
    TOGGLE_MODAL_EDIT(state, payload) {
      state.isEditModalOpen = payload;
    },
    GET_CLIENT_TO_EDIT(state, payload) {
      state.clientToEdit = payload;
    },
  };