/*
 * @lc app=leetcode.cn id=915 lang=java
 *
 * [915] 分割数组
 */

// @lc code=start
class Solution {
    public int partitionDisjoint(int[] nums) {
        int[] ns = new int[nums.length];
        ns[0] = nums[0];
        int[] ms = new int[nums.length];
        ms[nums.length - 1] = nums[nums.length - 1];
        for (int i = 1; i < ns.length; i++) {
            if (nums[i] > ns[i - 1]) {
                ns[i] = nums[i];
            } else {
                ns[i] = ns[i - 1];
            }
        }
        for (int i = nums.length - 2; i > -1; i--) {
            if (nums[i] < ms[i + 1]) {
                ms[i] = nums[i];
            } else {
                ms[i] = ms[i + 1];
            }
        }
        int i = 1;
        for (; i < ms.length; i++) {
            if (ms[i] >= ns[i - 1]) {
                break;
            }
        }
        return i;
    }
}
// @lc code=end

