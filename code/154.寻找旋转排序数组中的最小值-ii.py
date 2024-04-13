#
# @lc app=leetcode.cn id=154 lang=python3
#
# [154] 寻找旋转排序数组中的最小值 II
#
# @lc code=start
class Solution:
    def findMin(self, nums: List[int]) -> int:
        s = 0
        e = len(nums) - 1
        while s < e:
            m = (s + e) // 2
            n = nums[m]
            n1, n2 = nums[s], nums[e]
            if n1 <= n < n2:
                e = m -1
            elif n1 < n > n2:
                s = m + 1
            elif n1 == n or n2 == n:
                if n2 == n:
                    e -= 1
                if n1 == n:
                    s += 1
            else:
                e = m
             
        return nums[s]
# @lc code=end
