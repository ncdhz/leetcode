/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] 移除元素
 */

// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
        int l = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                l++;
            } else {
                nums[i - l] = nums[i];
            }
        }
        return nums.length - l;
    }
}
// @lc code=end

