#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] 最长有效括号
#

# @lc code=start

class Solution:
    def longestValidParentheses(self, s: str) -> int:
        x = []
        for ss in s:
            if ss == '(':
                x.append(ss)
            else:
                if len(x) > 0:
                    if x[-1] == '(':
                        x.pop()
                        x.append(2)
                    elif x[-1] != ')' and len(x) > 1:
                        if x[-2] == '(':
                            del x[-2]
                            x[-1] += 2
                        else:
                            x.append(ss)
                    else:
                        x.append(ss)
                    while len(x) > 1 and x[-2] != '(' and x[-2] != ')' and x[-1] != '(' and x[-1] != ')':
                        x[-2] += x[-1]
                        del x[-1]                 
                else:
                    x.append(ss)
        max_ = 0
        for xx in x:
            if xx != '(' and xx != ')' and xx > max_:
                max_ = xx
        
        return max_
# @lc code=end