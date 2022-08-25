#
# @lc app=leetcode.cn id=17 lang=python3
#
# [17] 电话号码的字母组合
#

# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        
        all_r = []
        if len(digits) == 0:
            return all_r
        
        num2letter = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }

        def x(s):
            if len(s) == len(digits):
                all_r.append(s)
                return
            letter = num2letter[digits[len(s)]]
            for c in letter:
                x(s + c)
        x('')

        return all_r 
# @lc code=end

