impl Solution {
    pub fn maximum_happiness_sum(happiness: Vec<i32>, k: i32) -> i64 {
        let mut happiness = happiness;
        happiness.sort_unstable_by(|a, b| b.cmp(a));
        let mut ans = 0i64;
        for i in 0..k as usize {
            ans += std::cmp::max(happiness[i] - i as i32, 0) as i64;
        }
        ans
    }
}