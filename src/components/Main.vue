<template>
  <div>
<router-link to="/logout">Выйти?</router-link>

  </div>
</template>

<script>
import firebase from "firebase";


export default {
  name: 'Main',
  components: {
  
  },
  created: function () {
    const user = window.localStorage.getItem('user') 
    console.log(user)
    if (user === null){
      this.$router.replace({ name: "Login" });
    }
     let db = firebase.firestore();
    db.collection('users').get(user).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        console.log(this.mas, " => ", doc.data());
    });
});
  }
  
}

</script>

<style scoped>

</style>