/*
 * @lc app=leetcode.cn id=1822 lang=java
 *
 * [1822] 数组元素积的符号
 */

// @lc code=start
class Solution {
    public int arraySign(int[] nums) {
        int n = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                return 0;
            } else if (nums[i] < 0) {
                n++;
            }
        }
        return n % 2 == 1 ? -1 : 1;
    }
}
// @lc code=end

