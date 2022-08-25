#
# @lc app=leetcode.cn id=442 lang=python3
#
# [442] 数组中重复的数据
#

# @lc code=start
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        l = len(nums)
        for n in nums:
            nums[(n - 1) % l] += l
        
        r = []
        for i in range(l):
            if nums[i] > 2 * l:
                r.append(i + 1)
        return r
# @lc code=end

