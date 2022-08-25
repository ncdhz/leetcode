#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子数组和
#

# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        max_ = nums[0]
        k = nums[0]
        for i in range(1, len(nums)):
            if nums[i] + k < nums[i]:
                k = nums[i]
            else:
                k = nums[i] + k
            if max_ < k:
                max_ = k
        return max_
# @lc code=end

