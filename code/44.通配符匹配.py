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
        
        x = [[False] for _ in range(len(s))]
        x[0][0] = True

        for j in range(1, len(p)):
            if (p[j] == '*' and x[0][j - 1]):
                x[0].append(True)
            else:
                x[0].append(False)

        for i in range(1, len(s)):
            for j in range(1, len(p)):
                if p[j] == '*':
                    if x[i - 1][j] or x[i][j - 1] or x[i - 1][j - 1]:
                        x[i].append(True)
                    else:
                        x[i].append(False)
                elif p[j] == '?' or p[j] == s[i]:
                    x[i].append(x[i - 1][j - 1])
                else:
                    x[i].append(False)
                    
        return x[len(s) - 1][len(p) - 1]
# @lc code=end

