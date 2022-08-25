#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] 回文数
#

# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        y = x
        x_sum = 0
        while y != 0:
            z = y % 10
            y = y // 10
            x_sum = x_sum * 10 + z
        return x == x_sum
# @lc code=end

