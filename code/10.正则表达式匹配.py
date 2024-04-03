#
# @lc app=leetcode.cn id=10 lang=python3
#
# [10] 正则表达式匹配
#

# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s = ' ' + s
        p = ' ' + p

        matches = [[False] * len(p) for _ in range(len(s))]
        matches[0][0] = True
        
        for i in range(0, len(s)):
            for j in range(1, len(p)):
                if p[j] == '.' or p[j] == s[i]:
                    matches[i][j] = matches[i - 1][j - 1]
                elif p[j] == '*':
                    matches[i][j] |= matches[i][j - 2]

                    if i > 0 and (p[j - 1] == s[i] or p[j - 1] == '.'):
                        matches[i][j] |= matches[i - 1][j]
        return matches[-1][-1]
# @lc code=end

