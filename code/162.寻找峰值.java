/*
 * @lc app=leetcode.cn id=162 lang=java
 *
 * [162] 寻找峰值
 */

// @lc code=start
class Solution {
    public int findPeakElement(int[] nums) {
        if (nums.length == 1) {
            return 0;
        } else {
            if (nums[0] > nums[1]) {
                return 0;
            } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
                return nums.length - 1;
            }
        }
        int s = 1, e = nums.length - 2;
        while(s < e) {
            int m = (s + e) / 2;
            if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
                return m;
            } 
            if (nums[m] < nums[m + 1]) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
        return s;
    }
}
// @lc code=end

