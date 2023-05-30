/*
Can Knockdown Ended
Description

Recently Akhil decided to improve his pistol shooting skills. Today his coach offered him the following exercise. He placed n cans in a row on a table. Cans are numbered from left to right from 1 to n. Akhil has to knock down each can exactly once to finish the exercise. He is allowed to choose the order in which he will knock the cans down.

Akhil knows that the durability of the i-th can is ai.It means that if Akhil has already knocked x cans down and is now about to start shooting the i-th one, he will need (ai⋅x+1) shots to knock it down.
You can assume that if Akhil starts shooting the i-th can, he will be shooting it until he knocks it down.

Your task is to choose such an order of shooting so that the number of shots required to knock each of the n given cans down exactly once is minimum possible.


Input
Input Format

The first line contains the number of testcases - t

For each testcase:

The first line of the input contains one integer n — the number of cans.

The second line of the input contains the sequence a1,a2,…,an , where ai is the durability of the i-th can.

Constraints

1<=t<=10

1<=n<=1000

1<=ai<=1000


Output
For each testcase : In the first line print the minimum number of shots required to knock each of the n given cans down exactly once.

In the second line print the sequence consisting of n distinct integers from 1 to n — the order of indices of cans that minimizes the number of shots required. If there are several answers, you need the print the lexicographically smallest one


Sample Input 1 

2
3
20 10 20
4
10 10 10 10
Sample Output 1

43
1 3 2 
64
1 2 3 4 
Hint

In the first example Akhil can start shooting from the first can. He knocks it down with the first shot because he haven't knocked any other cans down before. After that he has to shoot the third can. To knock it down he shoots 20⋅1+1=21 times. After that only second can remains. To knock it down Akhil shoots 10⋅2+1=21 times. So the total number of shots is 1+21+21=43.

In the second example the order of shooting does not matter because all cans have the same durability.
*/