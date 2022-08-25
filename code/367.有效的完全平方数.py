#
# @lc app=leetcode.cn id=367 lang=python3
#
# [367] 有效的完全平方数
#

# @lc code=start
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        for i in range(num + 1):
            ii = i * i
            if ii == num:
                return True
            elif ii > num:
                return False
# @lc code=end

