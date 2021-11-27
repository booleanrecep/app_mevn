import { createStore } from "vuex";
import {mutations} from "./mutations"
import {actions} from "./actions"
const state = {
  clients: [],
  providers: [],
  isClientAdded: [],
  isClientDeleted: [],
  isClientEdited:[],
  isProviderAdded: [],
  isProviderDeleted: [],
  clientToEdit: [],
  isNewModalOpen: false,
  isEditModalOpen: false,
};

const getters = {
};

export default createStore({
  state,
  mutations,
  actions,
  getters,
});
