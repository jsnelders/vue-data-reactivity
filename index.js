import Vue from 'vue'
import ccList from './components/list.js'
import ccDetails from './components/details.js'
import globalStore from './store.js'



Vue.component('cc-list', ccList);
Vue.component('cc-details', ccDetails);


new Vue({
  el: '#app',



  data: {
    globalList: globalStore.list,

    selectedItemId: 0
  },





  /**
   * Computed properties will react to changes in the underlying list.
   * Return a listed list of items by type.
   */
  computed: {
    categoryItems()
    {
      return this.globalList.filter( (item) => { return item.type == "category" } );
    },

    tagItems()
    {
      return this.globalList.filter( (item) => { return item.type == "tag" } );
    }
  },





  methods: {
    addCategory()
    {
      this.idCounter++;

      this.globalList.push(
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

      this.globalList.push(
        { 
          id: this.idCounter, 
          type: "tag", 
          title: "Tag " + this.idCounter
        }
      );
    },



    selectItem(itemId)
    {
      this.selectedItemId = itemId;
    }

  },





  template: `
  <div>
    <h1>hello Vue</h1>


    <button type="button" @click="addCategory">Add Category</button>
    <button type="button" @click="addTag">Add Tag</button>
  
    <h2>Categories</h2>
    <cc-list :list="categoryItems" @select-item="selectItem" />

    <h2>Tags</h2>
    <cc-list :list="tagItems" />


    <hr>

    <cc-details :item-id="selectedItemId" />
  </div>`
})