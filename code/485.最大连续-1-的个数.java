/*
 * @lc app=leetcode.cn id=485 lang=java
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max_ = 0;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                if (j > max_) {
                    max_ = j;
                }
                j = 0;
            } else if (nums[i] == 1) {
                j++;
            }
        }
        if (j > max_) 
            return j;
        return max_;
    }
}
// @lc code=end

