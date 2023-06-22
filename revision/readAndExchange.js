// Read and exchange Ended
// Description

// There are n books, and Abhi and Anuj are going to read them all. For each book, you know the time it takes to read it.

// They both read each book completely, and they cannot read a book at the same time one has to wait for the other to finish if he finishes all other books. What is the minimum total time required by both of them to finish all the books?

// Input
// Input Format

// The first input line has an integer n: the number of books.

// The second line has n integers t1,t2, …,tn: the time required to read each book.

// Constraints

// 1≤n≤2⋅10^5
// 1≤ti≤10^9

// Output
// Print the minimum time is taken to finish all books.

// Sample Input 1

// 3
// 2 8 3
// Sample Output 1

// 16
// Hint

// Sample Input 1 Explanation:

// Abhi completes books taking time 2min and 3min and waits for 3min  for Anuj to finish the book which is taking 8min.

// When Abhi is reading his 3rd book Anuj will finish rest 2 books.

// Abhi sequence of reading is 2,3, and 8
// whereas Anuj sequence of reading is 8,2 and 3

// So overall it will take a minimum time of 2+3+3+8 = 16min
