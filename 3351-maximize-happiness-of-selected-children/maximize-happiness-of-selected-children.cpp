class Solution {
public:
    long long maximumHappinessSum(std::vector<int>& happiness, int k) {
        std::sort(happiness.begin(), happiness.end(), std::greater<int>());
        long long ans = 0;
        for (int i = 0; i < k; i++) {
            ans += std::max(static_cast<long long>(happiness[i]) - i, 0LL);
        }
        return ans;
    }
};