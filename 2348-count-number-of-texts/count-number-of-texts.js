/**
 * @param {string} pressedKeys
 * @return {number}
 */
var countTexts = function (s) {
    let mod = 1e9 + 7; // Define modulo value
    let cal = (c) => c === '7' || c === '9' ? 4 : 3; // Function to calculate possibilities
    let n = s.length; // Length of the input string
    let dp = Array(n + 1).fill(0); // Initialize an array to store counts
    dp[0] = 1; // base case : Empty string has one possibility
    for (let i = 0; i < n; i++) { // Loop through each character of the string
        for (let j = 1; j <= cal(s[i]); j++) { // Loop through possible length of substrings
            let len = i - j + 1; // calculate length of substring
            if (len < 0 || s[i] !== s[len]) break; // Break if length is invalid or characterdoesnt match
            dp[i + 1] += dp[i + 1 - j]; // update count for current position
        }
        dp[i + 1] %= mod; // Apply modulo after each iteration
    }
    return dp[n]; // Return count of valid substrings
};