<template>
  <div class="container">
    <div class="top">
      <h2>Clients</h2>
      <button @click="newClient">New Client</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Providers</th>
          <th></th>
        </tr>
      </thead>
      <Spinner v-if="loading" size="big" />
      <tbody v-if="clients">
        <ClientList v-for="c in clients" :client="c" :key="c._id" />
      </tbody>
    </table>
    <NewClient />
    <EditClient />
  </div>
</template>

<script>
import ClientList from "./components/ClientList.vue";
import NewClient from "./components/NewClient.vue";
import EditClient from "./components/EditClient.vue";
import Spinner from "./components/Spinner.vue";

export default {
  components: {
    ClientList,
    NewClient,
    EditClient,
    Spinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    clients() {
      return this.$store.state.clients;
    },
  },
  mounted() {
    this.$store.dispatch("getClients");
    this.$store.dispatch("getProviders");
  },
  updated() {
    this.loading = false;
    const bool1 = this.$store.state.isNewModalOpen;
    const bool2 = this.$store.state.isEditModalOpen;
    if (this.loading && (bool1 || bool2)) {
      this.$store.dispatch("getClients");
    }
  },
  methods: {
    newClient() {
      this.$store.dispatch("toggleNewModal", true);
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.container {
  .top {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #436d87;
    background-color: #eff5f9;
    button {
      height: fit-content;
    }
  }
  table {
    padding: 8px;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    thead {
      background-color: #f3f3f3;
    }
    td,
    th {
      border: 1px solid #dcdcdc;
      text-align: left;
      padding: 8px;
    }
  }
}
</style>
