<template>
  <div class="container">
    <div>
      <div class="feedback">
        <div class="container">
          <h2 class="section-title">Зарегистрироваться</h2>
          <form class="feedback-form" action="#" @submit.prevent="submit">
            <div class="feedback-form-group">
              <label for="fullname">Имя:</label>
              <input type="text" name="name" id="name"  v-model="form.name" required autofocus />
            </div>
            <div class="feedback-form-group">
              <label for="fullname">Электронная почта:</label>
              <input type="email" name="email" id="email"  v-model="form.email" required autofocus />
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
              <router-link to="/login">Уже есть аккаунт?</router-link>
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
  name: 'Register',
    data() {
    return {
      form: {
        name: "",
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {})
            .catch(() => {alert('Не получилось зарегестрироваться. Попробуйте ещё раз.')});
          data.user.sendEmailVerification().then(function() {
            firebase
              .auth()
              .signOut()
              .then(() => {});
          });
        })
    }
    
 }
}

</script>

<style scoped>

</style>