#
# @lc app=leetcode.cn id=268 lang=python3
#
# [268] 丢失的数字
#

# @lc code=start
from typing import List
class Solution:
    def missingNumber(self, nums: List[int]) -> int:

        nums = sorted(nums)
        s = 0
        e = len(nums) - 1
        while s <= e:
            m = (s + e) // 2
            if nums[m] == m:
                if s == e:
                    return m + 1
                s = m + 1
            elif nums[m] == m + 1:
                if s == e:
                    return m
                e = m - 1
        return e + 1
# @lc code=end

