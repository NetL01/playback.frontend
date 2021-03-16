<template>
  <div>

  </div>
</template>

<script>


export default {
  name: 'logout',
 created: function () {
    window.localStorage.removeItem('user') 
    this.$router.replace({ name: "Login" });
  }
}

</script>

<style scoped>

</style>