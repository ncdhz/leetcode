#
# @lc app=leetcode.cn id=33 lang=python3
#
# [33] 搜索旋转排序数组
#

# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > nums[max_]:
                min_ = mid_ + 1
            else:
                max_ = mid_
        
        
        max_ = min_ - 1
        min_ = - (len(nums) - min_)

        while min_ <= max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] == target:
                return (mid_ + len(nums)) % len(nums)
            elif nums[mid_] > target:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        return -1
# @lc code=end

