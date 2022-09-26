/*
 * @lc app=leetcode.cn id=747 lang=cpp
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int a = -1;
        int b = 0;
        for (size_t i = 1; i < nums.size(); i++) {
            if (nums[b] <= nums[i]) {
                a = b;
                b = i;
            } else if (a == -1 || nums[a] < nums[i]) {
                a = i;
            }
        }
        if (a == -1) {
            return b;
        }
        if (nums[b] >= 2 * nums[a]) {
            return b;
        }
        return -1;
    }
};
// @lc code=end

