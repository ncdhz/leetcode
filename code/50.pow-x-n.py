#
# @lc app=leetcode.cn id=50 lang=python3
#
# [50] Pow(x, n)
#

# @lc code=start
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0:
            return 0
        if n == 0:
            return 1
        if n < 0:
            x = 1 / x
        
        n = abs(n)
        
        r = x
        n -= 1
        while n > 0:
            s = x
            i = 1
            while n - i >= 0: 
                i = i * 2
                if n - i > 0:
                    s = s * s
                else:
                    n -= (i // 2)
            r *= s
        return r
# @lc code=end

