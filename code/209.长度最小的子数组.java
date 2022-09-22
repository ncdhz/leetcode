/*
 * @lc app=leetcode.cn id=209 lang=java
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int sum_ = 0;
        int j = 0;
        int min_ = 0;
        for (int i = 0; i < nums.length; i++) {
            sum_ += nums[i];
            while (sum_ >= target) {
                if (min_ == 0 || min_ > i - j + 1) {
                    min_ = i - j + 1;
                }
                sum_-= nums[j];
                j++;
            }
            
        }
        return min_;
    }
}
// @lc code=end

