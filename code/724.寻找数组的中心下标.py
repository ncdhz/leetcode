#
# @lc app=leetcode.cn id=724 lang=python3
#
# [724] 寻找数组的中心下标
#

# @lc code=start
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
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