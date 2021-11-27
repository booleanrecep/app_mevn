<template>
  <span class="icon">
    <svg
      v-if="icon === 'trash'"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-trash-2"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      ></path>
      <line x1="10" x2="10" y1="11" y2="17"></line>
      <line x1="14" x2="14" y1="11" y2="17"></line>
    </svg>
    <svg
      v-else-if="icon === 'edit'"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#fff"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-edit"
    >
      <path
        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
      ></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
    <span v-else></span>
  </span>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
    },
  },
};
</script>

<style></style>
