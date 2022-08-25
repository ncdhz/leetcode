#
# @lc app=leetcode.cn id=81 lang=python3
#
# [81] 搜索旋转排序数组 II
#

# @lc code=start
from typing import List

class Solution:

    def search(self, nums: List[int], target: int) -> bool:
        s = 0
        e = len(nums) - 1

        while s <= e:
            m = (s + e) // 2
            if nums[m] == target:
                return True
            if nums[s] == nums[m] and nums[m] == nums[e]:
                s += 1
                e -= 1
            elif nums[s] <= nums[m]:
                if nums[s] <= target and target <= nums[m]:
                    e = m - 1
                else:
                    s = m + 1
            else:
                if nums[m] < target and target <= nums[-1]:
                    s = m + 1
                else:
                    e = m - 1

        return False
# @lc code=end

