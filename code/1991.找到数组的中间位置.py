#
# @lc app=leetcode.cn id=1991 lang=python3
#
# [1991] 找到数组的中间位置
#

# @lc code=start
class Solution:
    def findMiddleIndex(self, nums: List[int]) -> int:
        s = sum(nums)
        r = 0
        for i in range(len(nums)):
            n = nums[i]
            s -= n
            if r == s:
                return i
            r += n 
        return -1
# @lc code=end
