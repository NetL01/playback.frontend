<template>
  <div>
    <input type="text" v-model="mess">
    <button class="add" v-on:click="add">Отправить</button>
    <ul>
      <li v-for="(item, idx) in mas" :key="item">
          {{ item }}
          <div>
            <button class="delete" v-on:click="del(idx)">X</button>
          </div>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'Answers',
  props: [
    "addAnswer", "idx"
  ],
  data: function(){
      return {
          mas: [],
          mess: ''
      }
  },
methods: {
      add: function(){
        this.addAnswer(this.idx, this.mess)
    this.mas.push(this.mess);
      },
       del: function(index){
         this.mas.splice(index,1);
      }

}
}

</script>

<style scoped>

</style>