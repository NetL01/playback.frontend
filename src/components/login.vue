<template>
  <div class="container">
    <div>
      <div class="feedback">
        <div class="container">
          <h2 class="section-title">Войти</h2>
          <form class="feedback-form" action="#" @submit.prevent="submit">
            <div class="feedback-form-group">
              <label for="fullname">Электронная почта:</label>
              <input type="email" name="email" id="email" class="form-control"  v-model="form.email" required autofocus />
            </div>
            <div class="feedback-form-group">
              <label for="fullname">Пароль:</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                required
                autofocus/>
            </div>
            <div style="text-align:center">
              <input type="submit" class="btn" value="Отправить" />
              <br />
            </div>
            <div class="reset-password">
              <router-link to="/register">Ещё не зарегестрированы?</router-link>
              <br>
              <router-link to="/ForgetPassword">Забыли пароль?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase  from 'firebase'

export default {
  name: 'login',
    data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
 methods: {
    submit() {
      console.log(this.form);
        firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          console.log(data);
          window.localStorage.setItem('user', data.user.email);
          this.$router.replace({ name: "Main" });
        })
        .catch(function() {
    })
    }

}
}

</script>

<style scoped>

</style>