#
# @lc app=leetcode.cn id=75 lang=python3
#
# [75] 颜色分类
#

# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i, j, k = 0, 0, 0
        for n in nums:
            if n == 0:
                i += 1
            elif n == 1:
                j += 1
            else:
                k += 1

        for l in range(i):
            nums[l] = 0
        
        for l in range(j):
            nums[l + i] = 1

        for l in range(k):
            nums[l + i + j] = 2
# @lc code=end

