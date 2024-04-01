#
# @lc app=leetcode.cn id=324 lang=python3
#
# [324] 摆动排序 II
#

# @lc code=start
class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        arrs = sorted(nums)
        j = 1
        al = len(arrs)
        al2 = (len(arrs) + 1) // 2
        for i in range(0, al, 2):
            nums[i] = arrs[al2 - j]
            if i + 1 < al:
                nums[i + 1] = arrs[al - j]
            j += 1
# @lc code=end

