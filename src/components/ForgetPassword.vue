<template>
  <div>
    <div class="feedback">
      <div class="container">
        <h2 class="section-title">Забыли пароль?</h2>
        <form class="feedback-form" action="#" @submit.prevent="resetPassword">
          <div class="feedback-form-group">
            <label for="fullname">Электронная почта:</label>
            <input type="email" name="email"  v-model="form.email" id="email"/>
          </div>
          <div style="text-align:center">
            <input type="submit" class="btn" value="Отправить" />
            <br />
          </div>
          <div class="reset-password">
            <router-link to="/login">Вспомнили пароль?</router-link>
          </div>
          <div class="reset-password">
            <router-link to="/register">Еще не зарегистрированы?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      form: {
        email: ""
      }
    }
  },
  methods: {
    resetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.form.email)
        .then(function() {
          console.log('then');
        })
        .catch(function() {
          console.log('catch');
        });
    }
  
  
  }
};
</script>

<style scoped>

</style>