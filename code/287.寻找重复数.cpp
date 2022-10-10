/*
 * @lc app=leetcode.cn id=287 lang=cpp
 *
 * [287] 寻找重复数
 */

// @lc code=start
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int low = 0;
        int fast = 0;
        do {
            low = nums[low];
            fast = nums[nums[fast]];
        } while (low != fast);
        low = 0;
        while (low != fast) {
            low = nums[low];
            fast = nums[fast];
        }
        return low;
    }
};
// @lc code=end

