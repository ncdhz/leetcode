#
# @lc app=leetcode.cn id=693 lang=python3
#
# [693] 交替位二进制数
#

# @lc code=start
class Solution:
    def hasAlternatingBits(self, n: int) -> bool:
        start = n % 2
        n //= 2
        while n > 0:
            back = n % 2
            n //= 2
            if start == back:
                return False
            start = back
            
        return True
# @lc code=end

