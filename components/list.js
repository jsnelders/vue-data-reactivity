import Vue from 'vue'



const ccList = {
  data: function () {
    return {
      count: 0
    }
  },



  props: [
    'list'
  ],





  methods: {
    selectItem(itemId)
    {
      this.$emit('select-item', itemId);
    }
  },





  template: `
  <ul>
    <li v-for="item in list" :key="list.id" @click="selectItem(item.id)" style="cursor: pointer">
      {{item.title}}
    </li>
  </ul>
  `
};

export default ccList;