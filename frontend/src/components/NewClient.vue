<template>
  <div class="edit-container" v-if="isNewModalOpen">
    <div class="edit-box">
      <form @submit.prevent="addClient">
        <h4>New Client</h4>
        <hr />
        <div class="input-group">
          <label>
            <p>Name:</p>
            <input type="text" v-model="state.name" />
          </label>
          <label>
            <p>Email:</p>
            <input type="email" v-model="state.email" />
          </label>
          <label>
            <p>Phone:</p>
            <input type="tel" v-model="state.phone" />
          </label>
          <label>
            <p>Providers:</p>
            <input v-model="addedProvider" />
            <button @click.prevent="addProvider">Add Provider</button>
          </label>
        </div>
        <ul>
          <li v-for="p in providers" :key="p._id">
            <label>
              <input
                type="checkbox"
                :value="p"
                v-model="state.providersModel"
              />
              <span>{{ p.name }}</span>
            </label>
            <div class="button-group">
              <!-- <Icon icon="edit" /> -->
              <Icon @click="deleteProvider(p._id)" icon="trash" />
            </div>
          </li>
          <Spinner v-if="addedProvider" size="small" />
        </ul>
        <hr />
        <div class="footer">
          <button @click.prevent="cancelAdd">Cancel</button>
          <button type="submit">Add Client</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
import Spinner from "./Spinner.vue";
export default {
  components: { Icon, Spinner },
  data() {
    return {
      state: {
        name: [],
        email: [],
        phone: [],
        providersModel: [],
      },
      addedProvider: "",
    };
  },
  computed: {
    providers() {
      return this.$store.state.providers;
    },
    isNewModalOpen() {
      return this.$store.state.isNewModalOpen;
    },
  },
  mounted() {
    this.$store.dispatch("getProviders");
  },
  methods: {
    addProvider() {
      this.$store.dispatch("addProvider", this.addedProvider);
      this.$store.dispatch("getProviders");
      this.addedProvider = "";
    },
    deleteProvider(id) {
      this.$store.dispatch("deleteProvider", id);
      this.$store.dispatch("getProviders");
    },
    addClient() {
      const newClient = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        providers: this.state.providersModel,
      };
      this.$store.dispatch("addClient", newClient);
      this.$store.dispatch("getClients");
      this.$store.dispatch("toggleNewModal", false);
      this.state = {
        name: [],
        email: [],
        phone: [],
        providersModel: [],
      };
    },
    cancelAdd() {
      this.$store.dispatch("toggleNewModal", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-container {
  .edit-box {
    .footer {
      display: flex;
      justify-content: flex-end;
      padding: 12px;
      column-gap: 10px;
    }
  }
}
</style>
