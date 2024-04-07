#
# @lc app=leetcode.cn id=153 lang=python3
#
# [153] 寻找旋转排序数组中的最小值
#
from typing import List
# @lc code=start
class Solution:
    def findMin(self, nums: List[int]) -> int:
        s, e = 0, len(nums) - 1
        while s != e:
            m = (s + e) // 2
            n = nums[m]
            ss = nums[s]
            ee = nums[e]

            if (n > ss and n > ee) or ee <= n <= ss:
                s = m + 1
            elif ss < n < ee:
                e = m - 1
            else:
                e = m

        return nums[s]
# @lc code=end

