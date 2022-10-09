/*
 * @lc app=leetcode.cn id=275 lang=cpp
 *
 * [275] H 指数 II
 */

// @lc code=start
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int s = 0;
        int n = citations.size();
        int e = n;
        while (s < e) {
            int m = (s + e) / 2;
            if (citations[m] >= n - m) {
                e = m;
            } else {
                s = m + 1;
            }
        }
        return n - e;
    }
};
// @lc code=end

