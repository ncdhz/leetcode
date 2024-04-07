#
# @lc app=leetcode.cn id=131 lang=python3
#
# [131] 分割回文串
#

# @lc code=start
class Solution:

    def partition(self, s: str) -> List[List[str]]:
        dp = [[[]]]
        for i in range(len(s)):
            res = []
            for j in range(i + 1):
                ss = s[j:i + 1]
                if ss == ss[::-1]:
                    res.extend([d + [ss] for d in dp[j]])
            dp.append(res)
        return dp[-1]
# @lc code=end

