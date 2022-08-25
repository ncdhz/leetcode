#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] 在排序数组中查找元素的第一个和最后一个位置
#
# @lc code=start
class Solution:
    def bs(self, nums, target, left):
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > target:
                max_ = mid_ - 1
            elif nums[mid_] == target and left:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        if left:
            return min_
        return max_

    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        l = self.bs(nums, target, True)
        if nums[l] != target:
            l += 1
        r = self.bs(nums, target, False)
        if nums[r] != target:
            r -= 1
        if l == len(nums) or r == -1:
            return [-1, -1]
        if nums[l] != target or nums[r] != target:
            return [-1, -1]
        return [l, r]
# @lc code=end

