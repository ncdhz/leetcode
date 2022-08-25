#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] 整数反转
#

# @lc code=start
class Solution:
    
    MAX_VALUE = 2 ** 31 - 1
    MIN_VALUE = - 2 ** 31
    
    def reverse(self, x: int) -> int:
        
        r_x = 0
        symbol = -1 if x < 0 else 1
        x = symbol * x
        while x != 0:
            a = x % 10
            x = x // 10
            if symbol > 0:
                c = Solution.MAX_VALUE % 10
                d = Solution.MAX_VALUE // 10
            else:
                c = (-1 * Solution.MIN_VALUE) % 10
                d = -1 * Solution.MIN_VALUE // 10
            if (r_x == d and a > c) or (r_x > d):
                return 0 
            r_x = r_x * 10 + a
        return symbol * r_x
# @lc code=end

