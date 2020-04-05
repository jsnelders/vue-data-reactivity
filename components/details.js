import globalStore from '../store.js'



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
    <h2>Item Details</h2>
    Selected Item ID: {{itemId}}<br><br>
    ID: {{getItem.id}}<br>
    Type: {{getItem.type}}<br>
    Title: {{getItem.title}}<br>


    <br>
    <small>
    (This item details component demonstrates accessing data directly 
    from globalStore, rather than passing data in from the parent.)
    </small>
  </div>
  `
};

export default ccDetails;