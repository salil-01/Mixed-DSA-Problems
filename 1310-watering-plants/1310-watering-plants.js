/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let temp = capacity;
    let total = 0;
    for(let i=0; i<plants.length; i++){
        console.log(temp)
        if(temp>=plants[i]){
            total++;
            temp = temp - plants[i];
        }else{
            // going back for refilling and coming back
            let back = i;
            let forward = i+1;
            total = total + back + forward;
            temp = capacity - plants[i]; 
            // total = total + i + i + 1
        }
    }
    // console.log(total)
    return total
};