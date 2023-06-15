#
# @lc app=leetcode.cn id=643 lang=python3
#
# [643] 子数组最大平均数 I
#

# @lc code=start
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sum_ = sum(nums[:k])
        max_ = sum_
        i = 0
        for n in nums[k:]:
            sum_ = sum_ - nums[i] + n
            if sum_ > max_:
                max_ = sum_
            i += 1
        return max_ / k
# @lc code=end

