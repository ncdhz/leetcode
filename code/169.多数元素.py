#
# @lc app=leetcode.cn id=169 lang=python3
#
# [169] 多数元素
#

# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:

        nums = sorted(nums)
        return nums[len(nums) // 2]

# @lc code=end

