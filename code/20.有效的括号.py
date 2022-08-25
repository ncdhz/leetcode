#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
class Solution:
    
    true_symbol = ['(', '[', '{']
    false_symbol = [')', ']', '}']
    obj_symbol = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    def isValid(self, s: str) -> bool:
        symbol = []
        
        for ss in s:
            if ss in Solution.true_symbol:
                symbol.append(ss)
            if ss in Solution.false_symbol:
                if len(symbol) == 0:
                    return False
                if Solution.obj_symbol[ss] != symbol.pop():
                    return False
        return len(symbol) == 0
# @lc code=end
