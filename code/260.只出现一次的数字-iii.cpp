/*
 * @lc app=leetcode.cn id=260 lang=cpp
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        long v = 0;
        for (int num: nums) {
            v ^= num;
        }
        v = v & (-v);

        vector<int> r(2, 0);
        for (int num: nums) {
            if ((num & v) == 0) {
                r[0] ^= num;
            } else {
                r[1] ^= num;
            }
        }
        return r;
    }
};
// @lc code=end

