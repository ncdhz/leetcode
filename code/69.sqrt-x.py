#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] Sqrt(x)
#

# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 1:
            return 1

        xx = 0
        yy = x
        while True:
            zz = (xx + yy) // 2
            zz2 = zz * zz
            zz12 = (zz + 1) * (zz + 1)

            if zz2 <= x and zz12 > x:
                return zz
            
            if zz12 == x:
                return zz + 1
            
            if zz2 > x:
                yy = zz
            else:
                xx = zz
# @lc code=end

