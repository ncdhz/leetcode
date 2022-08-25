#
# @lc app=leetcode.cn id=231 lang=python3
#
# [231] 2 的幂
#

# @lc code=start
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n == 1:
            return True
        for i in range(32):
            if n == 2 << i:
                return True
        return False
# @lc code=end

