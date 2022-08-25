#
# @lc app=leetcode.cn id=202 lang=python3
#
# [202] 快乐数
#

# @lc code=start
class Solution:
    def isHappy(self, n: int) -> bool:
        result = []
        def happy_sum(nn):
            sum_ = 0
            while nn != 0:
                x = nn % 10
                sum_ += x * x
                nn = nn // 10
            return sum_
            
        x = happy_sum(n)
        while x != 1:
            if x in result:
                return False
            result.append(x)
            x = happy_sum(x)
        return True
# @lc code=end

