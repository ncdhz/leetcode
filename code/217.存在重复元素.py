#
# @lc app=leetcode.cn id=217 lang=python3
#
# [217] 存在重复元素
#

# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return False
        # 先排序相同的元素就会聚在一起
        nums = sorted(nums)
        for i in range(1, len(nums)):
            # 判断前一个元素与当前元素是否相同
            if nums[i] == nums[i - 1]:
                return True
        return False
# @lc code=end

