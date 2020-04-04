import Vue from 'vue'
import ccList from './components/list.js'



Vue.component('cc-list', ccList);
console.log("ccList", ccList);


new Vue({
  el: '#app',



  data: {
    list: [
      { id: 1, type: "category", title: "Category 1"},
      { id: 2, type: "category", title: "Category 2"},
      { id: 3, type: "category", title: "Category 3"},
      { id: 4, type: "category", title: "Category 4"},
      { id: 5, type: "category", title: "Category 5"},
      { id: 6, type: "category", title: "Category 6"},
      { id: 7, type: "category", title: "Category 7"},
      { id: 8, type: "category", title: "Category 8"},
      { id: 9, type: "category", title: "Category 9"},
      { id: 10, type: "category", title: "Category 10"},

      { id: 11, type: "tag", title: "Tag 1"},
      { id: 12, type: "tag", title: "Tag 2"},
      { id: 13, type: "tag", title: "Tag 3"}
    ],

    idCounter: 13
  },


  computed: {
    categoryItems()
    {
      return this.list.filter( (item) => { return item.type == "category" } );
    },

    tagItems()
    {
      return this.list.filter( (item) => { return item.type == "tag" } );
    }
  },


  methods: {
    addCategory()
    {
      this.idCounter++;

      this.list.push(
        { 
          id: this.idCounter, 
          type: "category", 
          title: "Category " + this.idCounter
        }
      );
    },

    addTag()
    {
      this.idCounter++;

      this.list.push(
        { 
          id: this.idCounter, 
          type: "tag", 
          title: "Tag " + this.idCounter
        }
      );
    }

  },


  template: `
  <div>
    <h1>hello Vue</h1>


    <button type="button" @click="addCategory">Add Category</button>
    <button type="button" @click="addTag">Add Tag</button>
  
    <h2>Categories</h2>
    <cc-list :list="categoryItems" />

    <h2>Tags</h2>
    <cc-list :list="tagItems" />
  </div>`
})