<template>
  <tr>
    <td>{{ client.name }}</td>
    <td>{{ client.email }}</td>
    <td>{{ client.phone }}</td>
    <td>
      <span v-for="p in client.providers" :key="p._id">{{
        p.name + `${client.providers.length >= 2 ? ", " : ""}`
      }}</span>
    </td>
    <td>
      <button @click="editClient(client)">Edit</button>
      <button :id="client._id" @click="deleteClient($event)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    client: Object,
  },
  methods: {
    editClient(client) {
      this.$store.dispatch("toggleEditModal", true);
      this.$store.dispatch("getClientToEdit", client);
    },
    deleteClient(event) {
      this.$store.dispatch("deleteClient", event.target.id);
      this.$store.dispatch("getClients");
    },
  },
};
</script>

<style lang="scss">
tr {
  td:last-of-type {
    button {
      color: #1e5f74;
      background: none;
      border: none;
      text-decoration: underline;
      cursor: pointer;
      &:last-of-type {
        color: red;
      }
    }
  }
}
</style>
