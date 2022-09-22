/*
 * @lc app=leetcode.cn id=215 lang=cpp
 *
 * [215] 数组中的第K个最大元素
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int fkl(vector<int> nums, int s, int e, int k) {
        int n = nums[s];
        int j = s;
        int i = s + 1;
        while (i < nums.size()) {
            if (nums[i] < n) {
                nums[j] = nums[i];
                j++;
                nums[i] = nums[j];
            }
            i++;
        }
        nums[j] = n;
        if (k > j) {
            return fkl(nums, j + 1, e, k);
        } else if ( k < j) {
            return fkl(nums, s, j - 1, k);
        }
        return n;
    }
    int findKthLargest(vector<int>& nums, int k) {
        return fkl(nums, 0, nums.size() - 1, nums.size() - k);
    }
};
// @lc code=end

