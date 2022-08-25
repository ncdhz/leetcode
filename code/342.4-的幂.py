#
# @lc app=leetcode.cn id=342 lang=python3
#
# [342] 4的幂
#

# @lc code=start
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        
        if n == 0:
            return False
        
        while n != 1:
            if n % 4 != 0:
                return False
            n >>= 2
        
        return True
# @lc code=end

