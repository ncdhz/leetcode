#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] 移动零
#

# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        j = 0
        n_len = len(nums)
        while i < n_len and j < n_len:
            nums[i], nums[j] = nums[j], nums[i]
            while i < n_len and nums[i] != 0: i += 1
            j = i + 1
            while j < n_len and nums[j] == 0: j += 1
# @lc code=end

