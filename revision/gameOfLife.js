// Game of life Ended
// Description

// According toWikipedia'sarticle: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of anm x ngrid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with itseight neighbors(horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.

// Any live cell with two or three live neighbors lives on to the next generation.

// Any live cell with more than three live neighbors dies, as if by over-population.

// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.


// Input
// Input Format
// The first line of input contains 2 integers m and n - the dimensions of the board.

// The following m lines contain the desciption of the board.

// The following m lines each contain n integers (either 0 or 1).

// Constraints
// m == board.length

// n == board[i].length

// 1 <= m, n <= 25

// board[i][j] is 0 or 1


// Output
// Output Format
// Output the next state of life.


// Sample Input 1 

// 4 3
// 0 1 0
// 0 0 1
// 1 1 1
// 0 0 0
// Sample Output 1

// 0 0 0
// 1 0 1
// 0 1 1
// 0 1 0
// Sample Input 2 

// 2 2
// 1 1
// 1 0
// Sample Output 2

// 1 1
// 1 1
// Hint

// First testcase
// 1.PNG

// Second testcase
// 2.PNG