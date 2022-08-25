#
# @lc app=leetcode.cn id=228 lang=python3
#
# [228] 汇总区间
#

# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
            
        result = []
        str_ = nums[0]
        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] > 1:
                if str_ == nums[i - 1]:
                    result.append(str(str_))
                else:
                    result.append(str(str_) + '->' + str(nums[i - 1]))
                str_ = nums[i]

        if str_ == nums[len(nums) - 1]:
            result.append(str(str_))
        else:
            result.append(str(str_) + '->' + str(nums[len(nums) - 1]))
        return result
# @lc code=end

