/*
 * @lc app=leetcode.cn id=213 lang=java
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
class Solution {

    public int rr(int[] nums, int start, int end) {
        int a = nums[start];
        int b = nums[start + 1];
        int c;
        for (int i = start + 2; i <= end; i++) {
            c = a + nums[i];
            a = Math.max(a, b);
            b = c;
        }
        return a > b ? a : b;
    }

    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        if (nums.length == 2) {
            return Math.max(nums[0], nums[1]);
        }
        return Math.max(rr(nums, 0, nums.length - 2), rr(nums, 1, nums.length - 1));
    }
}
// @lc code=end

