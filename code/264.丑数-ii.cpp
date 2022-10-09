/*
 * @lc app=leetcode.cn id=264 lang=cpp
 *
 * [264] 丑数 II
 */
#include <algorithm>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> rs(n, 1);
        int i2 = 0;
        int i3 = 0;
        int i5 = 0;
        for (size_t i = 1; i < n; i++) {
            rs[i] = min(min(rs[i2] * 2, rs[i3] * 3), rs[i5] * 5);
            if (rs[i] == rs[i2] * 2) {
                i2++;
            } 
            if (rs[i] == rs[i3] * 3) {
                i3++;
            }
            if (rs[i] == rs[i5] * 5) {
                i5++;
            }
        }
        return rs[n - 1];
    }
};
// @lc code=end

