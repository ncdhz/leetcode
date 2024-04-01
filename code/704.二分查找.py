#
# @lc app=leetcode.cn id=704 lang=python3
#
# [704] 二分查找
#

# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        s = 0
        e = len(nums)
        while s < e:
            mid = (s + e) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:
                e = mid - 1
            else:
                s = mid + 1
        if len(nums) > s and nums[s] == target:
            return s
        return -1
# @lc code=end

