/*
 * @lc app=leetcode.cn id=152 lang=java
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
class Solution {
    public int maxProduct(int[] nums) {
        int min_ = nums[0];
        int max_ = nums[0];
        int resule = max_;
        for(int i = 1; i < nums.length ; i++) {
            int l = nums[i];
            int m = l * max_;
            int n = l * min_;
            max_ = l > m ? l > n ? l : n : m > n ? m : n;
            resule = resule > max_ ? resule : max_;
            min_ = l > m ? m > n ? n : m : l > n ? n : l;
        }
        return resule;
    }
}
// @lc code=end

