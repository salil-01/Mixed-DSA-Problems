/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats = seats.sort((a,b)=>a-b);
    students = students.sort((a,b)=>a-b);
    let total = 0;
    for(let i=0; i<seats.length; i++){
        total += Math.abs(seats[i]-students[i])
    }
    return total;
};