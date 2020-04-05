import Vue from 'vue'
import ccList from './components/list.js'
import ccDetails from './components/details.js'
import globalStore from './store.js'



Vue.component('cc-list', ccList);
Vue.component('cc-details', ccDetails);



new Vue({
  el: '#app',



  data: {
    // Reference the `list` in the global store.
    // I like to do it this way in case I need to add a watcher to the list.
    globalList: globalStore.list,

    // ID of an item selected in one of the rendered lists.
    selectedItemId: 0,

    /**
     * An alternate to using a computed to manage a list of items of type "tag".
     * Updates to this list are triggered via a watcher on `globalList`
     * which executes the `updateListOfTags` method.
     */
    listOfTags: []
  },





  mounted()
  {
    // Ensure `listOfTags` is populated when the component initially loads.
    this.updateListOfTags();
  },





  /**
   * Computed properties will react to changes (add, remove items) 
   * in the underlying `list` array.
   */
  computed: {
    /**
     * Return all items in `list` of type "category".
     */
    categoryItems()
    {
      return this.globalList.filter( (item) => { return item.type == "category" } );
    },



    /**
     * Return all items in `list` of type "tag".
     */
    tagItems()
    {
      return this.globalList.filter( (item) => { return item.type == "tag" } );
    }
  },





  methods: {

    /**
     * Event handlers: When a rendered list item is "selected".
     */
    selectItem(itemId)
    {
      this.selectedItemId = itemId;
    },



    /**
     * Event handler: When a rendered list item is selected to be removed.
     */
    removeItem(itemId)
    {
      globalStore.removeItem(itemId);
    },



    addCategory()
    {
      globalStore.addCategory();
    },



    addTag()
    {
      globalStore.addTag();
    },



    updateListOfTags()
    {
      this.listOfTags = this.globalList.filter( (item) => { return item.type == "tag" } );
    }

  },





  watch: {
    /**
     * Whenever the `list` changes.
     */
    globalList: function (val, olvVal) {
      this.updateListOfTags();
    }
  },





  template: `
  <div>
    <h1>Vue (2.x) Data Reactivity Sample</h1>


    <button type="button" @click="addCategory">Add Category</button>
    <button type="button" @click="addTag">Add Tag</button>

    <p>
      Click on an item title in the lists below to select it and
      show the details at the bottom.
    </p>
  
    <h2>Categories (via computed property)</h2>
    <cc-list :list="categoryItems" @select-item="selectItem" @remove-item="removeItem" />

    <h2>Tags (via computed property)</h2>
    <cc-list :list="tagItems" @select-item="selectItem" @remove-item="removeItem" />

    <h2>Tags (listOfTags data attribute)</h2>
    <cc-list :list="listOfTags" @select-item="selectItem" @remove-item="removeItem" />


    <hr>

    <cc-details :item-id="selectedItemId" />
  </div>`
})