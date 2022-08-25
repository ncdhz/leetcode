#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] 括号生成
#

# @lc code=start
class Solution:
    
    def generateParenthesis(self, n: int)  -> List[str]:
        PS = []
        def gp(c1, c2, end_str):
            if c1 > n: return
            if c1 == n and c2 == n: PS.append(end_str)
            if c1 >= c2:
                gp(c1 + 1, c2, end_str + '(')
                gp(c1, c2 + 1, end_str + ')')
        gp(0, 0, '')    
        return PS
# @lc code=end

