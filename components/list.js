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
      // Raise a custom event. Tell the parent an item was selected.
      this.$emit('select-item', itemId);
    },


    removeItem(itemId)
    {
      // Raise a custom event. Tell the parent to remove an item.
      this.$emit('remove-item', itemId);
    }
  },





  template: `
  <ul>
    <li v-for="item in list" :key="list.id" >
      <span @click="selectItem(item.id)" style="cursor: pointer">{{item.title}}</span>

      <span @click="removeItem(item.id)" style="cursor: pointer; color: maroon">[Remove]</span>
    </li>
  </ul>
  `
};

export default ccList;