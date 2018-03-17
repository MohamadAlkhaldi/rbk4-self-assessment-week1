var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

    return {
      _storage: [,,,],
      retrieve: function(key) {
        var bucket = this._storage[hashFn(key, max)];

        if(!bucket){
        	return null
        }
        for(var i = 0; i<bucket.length; i++){
        	var tuple = bucket[i]
        	if(tuple[0] === key){
        		return tuple[1]
        	}
        }
        return null
      },

      insert: function(key, value) {
        //your code is here
        var bucket = this._storage[hashFn(key, max)] //|| []
        console.log(bucket)
        //console.log(hashFn(key, max))
        //if no bucket make one
        if(!bucket){
        	//console.log(bucket)
        	bucket = [[key,value]]
        	//console.log(bucket)
        }
        // for(var i = 0; i<bucket.length; i++){
        // 	var tuple = bucket[i]
        // 	if(tuple[0] === key){
        // 		tuple[1] = value
        // 		break
        // 	}
        // }
        else {//console.log('sth')
      bucket.push([key, value])}

    }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};