/*
 * @lc app=leetcode.cn id=153 lang=java
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
class Solution {
    public int findMin(int[] nums) {
        int s = 0;
        int e = nums.length - 1;
        while (s < e) {
            int m = (s + e) / 2;
            if (nums[m] < nums[(m + 1) % nums.length] && nums[m] < nums[(m - 1 + nums.length) % nums.length]) {
                break;
            }
            if (nums[e] > nums[s]) {
                e = s;
                break;
            }  else {
                if (nums[m] < nums[e]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            }
        }
        return nums[(s + e) / 2];
    }
}
// @lc code=end

