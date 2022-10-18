#
# @lc app=leetcode.cn id=902 lang=python3
#
# [902] 最大为 N 的数字组合
#

# @lc code=start
class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
        s = str(n)
        rs = [[0] * 2 for _ in range(len(s) + 1)]
        rs[0][1] = 1
        for i in range(1, len(s) + 1):
            for j in range(len(digits)):
                if s[i - 1] > digits[j]:
                    rs[i][0] += rs[i - 1][1]
                elif s[i - 1] == digits[j]:
                    rs[i][1] = rs[i - 1][1]
                else:
                    break
            
            if i > 1:
                rs[i][0] += (rs[i - 1][0] + 1) * len(digits) 

        return sum(rs[-1])
# @lc code=end
