/*
 * @lc app=leetcode.cn id=198 lang=java
 *
 * [198] 打家劫舍
 */

// @lc code=start
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        if (nums.length == 2) {
            return Math.max(nums[0], nums[1]);
        }
        int a = nums[0];
        int b = nums[1];

        for (int i = 2; i < nums.length; i++) {
            int d = a + nums[i];
            a = Math.max(a, b);
            b = d;
        }
        return Math.max(a, b);
    }
}
// @lc code=end

