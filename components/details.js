import globalStore from '../store.js'

import Vue from 'vue'



const ccDetails = {
  data: function () {
    return {
      store: globalStore
    }
  },




  props: ['itemId'],




  computed: {
    getItem()
    {
      const foundItem = this.store.list.find( (item) => { 
        if (item.id == this.itemId) return true;

        // Item not found in the list
        return false;
      });
      
      // Item not found. Return a placeholder.
      // Otherwise, the render function throws error:
      // `[Vue warn]: Error in render function: "TypeError: Cannot read property 'id' of undefined"`
      if (!foundItem) return {};

      // Return the found item.
      return foundItem;
    }
  },





  template: `
  <div>
    Selected Item ID: {{itemId}}<br><br>
    ID: {{getItem.id}}<br>
    Type: {{getItem.type}}<br>
    Title: {{getItem.title}}<br>
  </div>
  `
};

export default ccDetails;