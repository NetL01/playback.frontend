<template>
  <div class="body">
    <header>
      <div class="logo-menu">
        <h1 class="logo">PLAYBACK</h1>
        <ul class="menu">
          <li>leaderboard</li>
          <li>support</li>
        </ul>
      </div>
      <a class="login" href="/login">LOGIN</a>
    </header>
    <main>
      <h2 class="promo">
        laderboard<br />
        which helps developers<br />
        follow the progress of the game
      </h2>
    </main>
    <footer>
      <h2>JOIN OUR COMUNITY</h2>
      <ul>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Discord</li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>


li {
  list-style-type: none;
}

header {
  display: flex;
  justify-content: space-between;
}

.logo-menu {
  margin-left: 20px;
}

.logo {
  margin-bottom: 5px;
}

.menu {
  padding: 0px;
  margin: 5px;
  margin-left: 0px;
  display: flex;
}

.menu li {
  margin-right: 10px;
}

.login {
  padding-top: 20px;
  color: white;
  text-decoration: none;
  display: block;
  height: 38px;
  width: 150px;
  text-align: center;
  border: 1px solid white;
  border-radius: 7px;
  margin-top: 20px;
  margin-right: 20px;
}

main {
  text-align: center;
  min-height: calc(100vh - 270px);
}

.promo {
  padding-top: 10%;
  font-size: 40px;
}

footer {
  text-align: center;
  height: 50px;
}

footer ul {
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 0px;
  margin: 0 auto;
}
</style>

<script>
export default {

}
</script>