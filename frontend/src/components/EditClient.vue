<template>
  <div class="edit-container" v-if="isEditModalOpen" :key="clientToEdit._id">
    <div class="edit-box">
      <form @submit.prevent="saveClient">
        <h4>Edit Client</h4>
        <hr />
        <div class="input-group">
          <label>
            <p>Name:</p>
            <input type="text" v-model="clientToEdit.name" />
          </label>
          <label>
            <p>Email:</p>
            <input type="email" v-model="clientToEdit.email" />
          </label>
          <label>
            <p>Phone:</p>
            <input type="tel" v-model="clientToEdit.phone"  />
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
                v-model="providersModel"
                
              />
              <span>{{ p.name }}</span>
            </label>
            <div class="button-group">
              <!-- <Icon icon="edit" /> -->
              <Icon @click.prevent="deleteProvider(p._id)" icon="trash" />
            </div>
          </li>
          <Spinner v-if="addedProvider" size="small"/>
        </ul>
        <hr />
        <div class="footer">
          <button :id="id" @click="deleteClient($event)" class="left">
            Delete Client
          </button>
          <div class="right">
            <button @click.prevent="cancelEdit">Cancel</button>
            <button type="submit">Save Client</button>
          </div>
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
      providersModel: [],
      addedProvider: "",
    };
  },
  computed: {
    providers() {
      return this.$store.state.providers;
    },
    isEditModalOpen() {
      return this.$store.state.isEditModalOpen;
    },
    clientToEdit() {     
      return this.$store.state.clientToEdit
    }
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
    deleteProvider(_id) {
      this.$store.dispatch("deleteProvider", _id);
      this.$store.dispatch("getProviders");
    },

    saveClient() {
      const editClient = {
        _id:this.clientToEdit._id,
        data:{
          name: this.clientToEdit.name,
          email: this.clientToEdit.email,
          phone: this.clientToEdit.phone,
          providers: this.providersModel,
        }
      };
      this.$store.dispatch("editClient", editClient);
      this.$store.dispatch("getClients");
      this.$store.dispatch("toggleEditModal", false);
      this.providersModel = []
    },
    cancelEdit() {
      this.$store.dispatch("toggleEditModal", false);
    },
  },
  deleteClient(event) {
    this.$store.dispatch("deleteClient", event.target.id);
    this.$store.dispatch("getClients");
  },
};
</script>

<style lang="scss">
.edit-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  backdrop-filter: blur(2px);
  .edit-box {
    width: 450px;
    border: 2px solid #dcdcdc;
    // padding: 12px;
    margin: 0 auto;
    background: white;
    overflow: hidden;
    position: static;
    margin: 70px auto;
    // left: 30%;
    top: 5%;
    h4 {
      color: #436d87;
      padding: 12px;
    }
    .input-group {
      width: 350px;
      margin: 0 auto;
      label {
        display: flex;
        align-items: center;
        p {
          width: 85px;
          margin: 5px;
          text-align-last: end;
        }
        input {
          height: fit-content;
          width: 100%;
          outline: none;
        }
        button {
          margin: 0 0 0 5px;
          width: 190px;
        }
      }
    }
    ul {
      list-style: none;
      margin-left: 28%;
      border: 1px solid #dcdcdc;
      width: 200px;
      padding: 6px;
      li {
        display: flex;
        align-items: center;
        justify-content: space-between;

        label {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          span {
            margin: 0 0 0 10px;
          }
        }
        .button-group {
          width: 80px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          .icon {
            cursor: pointer;
          }
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      column-gap: 10px;
      .left {
        color: white;
        background: red;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .right {
        cursor: pointer;
      }
    }
  }
}
</style>
