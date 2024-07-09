/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let initialOrderTime =  customers[0][0] + customers[0][1];
    let total = customers[0][1]; 
    for(let i=1; i<customers.length; i++){
        // console.log(initialOrderTime,customers[i][0] < initialOrderTime)
        if(initialOrderTime > customers[i][0]){
            initialOrderTime = initialOrderTime + customers[i][1];
            total += initialOrderTime - customers[i][0];
        }else{
            initialOrderTime =  customers[i][0] + customers[i][1];
            total += initialOrderTime - customers[i][0];
        }
        // console.log()
    }
    console.log(total)
    return (total/customers.length.toFixed(5));
};