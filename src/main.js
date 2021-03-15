import Vue from "vue";
import App from "./App.vue";
import { firebase } from "@firebase/app";

import router from "./routes";

let configOptions = {
  apiKey: "AIzaSyD8P9ZvvxgnnHl8L3T53aqJu7JgxVWrjrI",
  authDomain: "playback-leaderboard.firebaseapp.com",
  projectId: "playback-leaderboard",
  storageBucket: "playback-leaderboard.appspot.com",
  messagingSenderId: "532029167112",
  appId: "1:532029167112:web:3b3a3c7d398d88fd3123bd",
  measurementId: "G-ZP8SLYEK8S",
};

firebase.initializeApp(configOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

export default firebase;
