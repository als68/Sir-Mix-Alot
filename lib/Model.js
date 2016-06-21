var DataStore = require('./DataStore');

function Model(schema){
  this.schema = schema;
  this.id = null;

  for(var key in schema){
    this[key] = null;
  }

  if(DataStore.store[this.constructor.name] === undefined){
    DataStore.store[this.constructor.name] = [];
  }

}

  Model.prototype.save = function(){
    if(this.id === null){
      this.id = this.constructor.getNextId();
      DataStore.store[this.constructor.name].push(this);
    }
  };

  Model.getNextId = function(){
    return DataStore.store[this.name].length + 1;
  };

  Model.find = function(id){
    for(var i = 0; i < DataStore.store[this.name].length; i++){
      if(DataStore.store[this.name][i].id === id){
        return DataStore.store[this.name][i];
      }
    }
  };

  Model.extend = function(klass){



  };

module.exports = Model;