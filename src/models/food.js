'use strict';

class FoodModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  create(obj){
    let record = {
      id: ++this.id,
      record: obj
    };
    this.db.push(record);
    return record;
  }

  read(id){
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj){
    if (id) {
      let itemToBeUpdated = this.db.find(record => record.id === id);
      const index = this.db.indexOf(itemToBeUpdated);
      this.db[index] = {
        id: id,
        record: obj
      };
    }
  }

  delete(id){
    if (id) {
      let itemToBeRemoved = this.db.find(record => record.id === id);
      const index = this.db.indexOf(itemToBeRemoved);
      this.db.splice(index, 1);
    }
  }

}

module.exports = FoodModel;
