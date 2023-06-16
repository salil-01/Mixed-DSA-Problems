// College Event and the CR Ended
// Description

// Himanshu the CR of class wants to spread some news about an event to every group of students of the college.He will have to miss Professor DK classes to spread the news to every student, so he came up with a plan,Instead of meeting every student in person he decided to meet few people such that the person to whom he pass the news will spread it to all his friends in a group.And those friends will pass it to other friends and so on.

// Your task is to find minimum number of persons he need to meet to spread the news of the event.

// Input
// Input Format :

// First line of input is 't' - Test cases.

// Follwed by N, the number of students in the testcase ( 0 to N-1 ).

// The next line will contain 'e', the number of friend descriptions 'e'.

// The next 'e' lines are the descriptions of type "a b" denoting 'a' friends with 'b'. If 'a' is friends with 'b' then 'b' is friends with 'a'.

// Constraints :

// 1<= t <= 10

// 2 <= N <= 100000

// 0 <= e <= N/2

// 0 <= a,b <= N-1

// Output
// Output contains t line, the number of people, Himanshu has to meet in person for each test case.

// Sample Input 1

// 2
// 4
// 2
// 0 1
// 1 2
// 3
// 0
// Sample Output 1

// 2
// 3
// Hint

// Case 1: 0 is friends with 1; 1 is friends with 2; so if Himanshu passes the news to 0 & 3, news will pass to all the students.

// Case 2: No one is friends with any one. So Himanshu will have to meet every one in person.
