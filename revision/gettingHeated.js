/*
Getting heated Ended
Description

There are 3 people in a room - Ankush, Sachin and Akhil.

The room is starting to get heated so they decide to turn the AC on, but all three of them have certain conditions.

Ankush wants the temperature to be at least A degrees.

Sachin wants the temperature to be at most B degrees.

Akhil wants the temperature to be at least C degrees.

They will turn the AC on if and only if all 3 of them agree on some temperature.


Input
Input Format
The first line contains an integer t - the number of testcases.

The next t lines contain the description of the t testcases.

The first and the only line of each testcase contains three integers A,B and C.

Constraints
1 <= t <= 10^4

1 <= A,B,C <= 10^9


Output
Output Format
For each test case print a single line "AC" if they can agree on some temperature or "No AC" if they can't.


Sample Input 1 

4
30 35 25
30 35 40
30 35 35
30 25 35
Sample Output 1

AC
No AC
AC
No AC
Hint

Test Case 1: Ankush wants the temperature to be ≥30, Sachin wants it to be ≤35, and Akhil wants it to be ≥25. The temperatures 30, 31, 32, 33, 34, 35 all satisfy all their demands. So they can choose any of these 6 temperatures, and so the answer is "AC".

Test Case 2: Ankush wants the temperature to be ≥30, Sachin wants it to be ≤35, and Akhil wants it to be ≥40. A number can't be both ≥40, and ≤35. So there is no temperature that satisfies all their demands. So the answer is "No AC".

Test Case 3: Ankush wants the temperature to be ≥30, Sachin wants it to be ≤35, and Akhil wants it to be ≥35. The temperature 35 satisfies all their demands. So the answer is "AC".

Test Case 4: Ankush wants the temperature to be ≥30, Sachin wants it to be ≤25, and Akhil wants it to be ≥35. A number can't be both ≥30, and ≤25. So there is no temperature that satisfies all their demands. So the answer is "No AC".
*/