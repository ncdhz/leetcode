#
# @lc app=leetcode.cn id=190 lang=python3
#
# [190] 颠倒二进制位
#

# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        sum_ = 0
        for i in range(32):
            sum_ |= ((n & 1) << (31 - i))
            n >>= 1
        return sum_
# @lc code=end

