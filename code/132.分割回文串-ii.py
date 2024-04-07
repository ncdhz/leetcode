#
# @lc app=leetcode.cn id=132 lang=python3
#
# [132] 分割回文串 II
#

# @lc code=start
class Solution:
    def minCut(self, s: str) -> int:
        dp = [-1]
        for i in range(len(s)):
            res = []
            for j in range(i + 1):
                ss = s[j:i + 1]
                if ss == ss[::-1]:
                    res.append(dp[j] + 1)

            dp.append(min(res))
        return dp[-1]
# @lc code=end

