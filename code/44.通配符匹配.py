#
# @lc app=leetcode.cn id=44 lang=python3
#
# [44] 通配符匹配
#

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:

        s = ' ' + s
        p = ' ' + p
        
        x = [[False] * len(p) for _ in range(len(s))]
        x[0][0] = True

        for i in range(0, len(s)):
            for j in range(1, len(p)):
                if p[j] == '*':
                    if x[i][j - 1] or (i > 0 and (x[i - 1][j] or x[i - 1][j - 1])):
                        x[i][j] = True
                elif i > 0 and (p[j] == '?' or p[j] == s[i]):
                    x[i][j] = x[i - 1][j - 1]
                    
        return x[-1][-1]
# @lc code=end

