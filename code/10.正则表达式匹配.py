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

        matches = [[False] for _ in range(len(s))]
        matches[0][0] = True
        for i in range(len(s)):
            for j in range(1, len(p)):
                if s[i] == p[j] or (p[j] == '.' and s[i] != ' '):
                    matches[i].append(matches[i - 1][j - 1])
                elif p[j] == '*':
                    if matches[i][j - 2]:
                        matches[i].append(True)
                    elif i != 0 and matches[i - 1][j] and (p[j - 1] == s[i] or p[j - 1] == '.'):
                        matches[i].append(True)
                    else:
                        matches[i].append(False)
                else:
                    matches[i].append(False)
        return matches[-1][-1]
# @lc code=end

