// this is a coding chalange we're going to do. 
//we're given this object here which is a record collection. 
//each record has an id and then also has different pieces of information about the record. 
//we are supposed to create this updateRecords function where we can pass i the ID, the property, and the value. 
//and it's going to update our record collection with the property and the value. 
//so for example, if we pass in the id "2468" and we put the property "artist" and we set a different value like "quincy" and then we should update this whole object. 
//and we should return the full collection. 

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  
// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === ""){ //check if the value is empty. if the value is set to blank we delete that property. 
        delete records[id][prop]; // if our value is an empty string then we want to delete this property. 
    } else if (prop === "tracks"){ // the next condition we need to check is if the property is "trakes". because for most properties we're just going to override that property with the value passed into the function. but if the property is tracks, we're going to push onto the end of the array.
        records[id][prop] = records[id][prop] /*if the prop is exists it's going to equal itself*/ || []; /*if the prop is not exist, we're going to create it*/
        records[id][prop].push(value); //push the value that was passed in to the function onto the end of the array.
    } else { // the defalt is as if the tracs is empty, then add the value into the tracks property. 
        records[id][prop] = value;
    }
    return records;
}
  

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));