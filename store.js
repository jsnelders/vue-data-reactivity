/**
 * A global store of data that can be shared between components.
 * It's good a good idea to only mutate data in this store via methods
 * defined on the object. It makes tracking the cause of mutation much easier.
 */
const globalStore = {
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

    idCounter: 13,






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
    },



    removeItem(itemId)
    {
      const index = this.list.findIndex(obj => obj.id === itemId);

      this.list.splice(index, 1);
    }
};


export default globalStore;