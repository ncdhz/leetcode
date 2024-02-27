#
# @lc app=leetcode.cn id=674 lang=python3
#
# [674] 最长连续递增序列
#

# @lc code=start
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        num_ = 1
        start = 1
        for i in range(1, len(nums)):
            num1 = nums[i - 1]
            num2 = nums[i]
            if num2 > num1:
                start += 1
            else:
                num_ = max([start, num_])
                start = 1
        return max([start, num_])
# @lc code=end

