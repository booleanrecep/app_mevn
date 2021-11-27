<template>
  <div
    class="loader-container"
    :class="{ big: size === 'big', small: size === 'small' }"
  >
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  props: ["size"],
};
</script>

<style lang="scss">
.loader-container {
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
    margin: 0 auto;
  }
}
.big {
  width: 100vw;
  .loader {
    width: 50px;
    height: 50px;
  }
}
.small {
  width: 100%;
  .loader {
    width: 8px;
    height: 8px;
  }
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
