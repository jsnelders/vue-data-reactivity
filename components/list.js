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





  template: `
  <ul>
    <li v-for="item in list" :key="list.id">
      {{item.title}}
    </li>
  </ul>
  `
};

export default ccList;