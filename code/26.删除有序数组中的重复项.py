#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除有序数组中的重复项
#

# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = 0
        sgin = -10 ** 5
        for i in range(len(nums)):
            if sgin < nums[i]:
                nums[l] = nums[i]
                sgin = nums[i]
                l += 1
        return l
# @lc code=end

