const removeFromArray = function(array,...toRemove) {
    for (let i=0; i < toRemove.length; i++) {
        while (array.includes(toRemove[i])){
            let index = array.indexOf(toRemove[i])
            array.splice(index,1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
