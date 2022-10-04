/*
 * @lc app=leetcode.cn id=238 lang=cpp
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> rs(n, 1);
        int prefix = 1;
        int suffix = 1;
        for (int i = 0; i < nums.size(); ++i) {
            rs[i] *= prefix;
            rs[n - 1 - i] *= suffix;
            prefix *= nums[i];
            suffix *= nums[n - 1 - i];
        }
        return rs;
    }
};
// @lc code=end

