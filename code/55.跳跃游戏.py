#
# @lc app=leetcode.cn id=55 lang=python3
#
# [55] 跳跃游戏
#

# @lc code=start
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_ = 0
        for i, n in enumerate(nums):
            if max_ < i:
                return False
            
            if i + n >= len(nums) - 1:
                return True

            if max_ == i and n == 0:
                return False
            
            if i + n > max_:
                max_ = i + n
        return False
# @lc code=end

