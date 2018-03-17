var Stack = function() {
    this._storage = []
    this.add = function(val){
      // write me
      this._storage.push(val)
    };
    this.remove = function() {
      // write me
      this._storage.pop()
    };
  };