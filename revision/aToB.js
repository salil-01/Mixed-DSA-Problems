// A to B Ended
// Description

// Robert loves to play with numbers and their multiplications. He has two integersAandBand wants to find out the minimum number of operations required to makeAequal toB. In one operation, he will either multiply A by x or y(A := A*x (or) A := A*y). If it is not possible to convertAtoBprint "-1".


// Input
// Input Format:-

// The first line of input contains four integersA,B,xandy

// Constraints:-

// 1 <= A <= B <= 40000

// 2 <= x, y <= 8


// Output
// Output Format:-

// Print "-1" If not possible, otherwise print minimum number of operations required to makeAequalsB.


// Sample Input 1 

// 4 5184 2 3
// Sample Output 1

// 8
// Sample Input 2 

// 5 13 2 3
// Sample Output 2

// -1
// Hint

// TestCase 1:-A = 4,B = 5184,x = 2,y = 3

// 4 → (4x3 = 12) → (12x2 = 24) → (24x3 = 72)  → (72x2 = 144)→ (144x3 = 432)→ (432x3 = 1296)→ (1296x2 = 2592)→ (2592x2 = 5184)

// TestCase 2:-A = 5,B = 13,x = 2,y = 3

// Not possible
