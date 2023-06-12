// Blue Red Board Ended
// Description

// On an 8×8 grid, some horizontal rows have been painted red, and some vertical columns have been painted blue, in some order. The stripes are drawn sequentially, one after the other. When the stripe is drawn, it repaints all the cells through which it passes.

// Determine which color was used last.

// Input
// Input Format

// The first line of the input contains a single integer t — the number of test cases. The description of test cases follows. There is an empty line before each test case.

// Each test case consists of 8 lines, each containing 8 characters. Each of these characters is either 'R', 'B', or '.', denoting a red square, a blue square, and an unpainted square, respectively.

// It is guaranteed that the given field is obtained from a colorless one by drawing horizontal red rows and vertical blue columns.

// Constraints

// 1<=t<=10

// Output
// For each test case, output 'R' if a red stripe was painted last, and 'B' if a blue stripe was painted last (without quotes).

// Sample Input 1

// 1
// ....B...
// ....B...
// ....B...
// RRRRRRRR
// ....B...
// ....B...
// ....B...
// ....B...
// Sample Output 1

// R
// Sample Input 2

// 1
// RRRRRRRB
// B......B
// B......B
// B......B
// B......B
// B......B
// B......B
// RRRRRRRB
// Sample Output 2

// B
// Sample Input 3

// 1
// RRRRRRBB
// .B.B..BB
// RRRRRRBB
// .B.B..BB
// .B.B..BB
// RRRRRRBB
// .B.B..BB
// .B.B..BB
// Sample Output 3

// B
// Sample Input 4

// 1
// ........
// ........
// ........
// RRRRRRRR
// ........
// ........
// ........
// ........
// Sample Output 4

// R
