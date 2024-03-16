#
# @lc app=leetcode.cn id=241 lang=python3
#
# [241] 为运算表达式设计优先级
#
from functools import cache
# @lc code=start
class Solution:

    @cache
    def diffWaysToCompute_(self, numbers, symbols):
        if len(symbols) == 0:
            return numbers
        res = []
        for i in range(1, len(numbers)):
            
            left = self.diffWaysToCompute_(numbers[:i], symbols[:i-1])
            right = self.diffWaysToCompute_(numbers[i:], symbols[i:])
            symbol = symbols[i - 1]

            for l in left:
                for r in right:

                    if symbol == '+':
                        res.append(l + r)
                    elif symbol == '-':
                        res.append(l - r)
                    else:
                        res.append(l * r)
        return res


    def diffWaysToCompute(self, expression: str) -> List[int]:
        numbers = []
        symbols = []
        number = ''
        for exp in expression:
            if '0' <= exp <= '9':
                number += exp
            else:
                numbers.append(int(number))
                number = ''
                symbols.append(exp)
        numbers.append(int(number))
        return self.diffWaysToCompute_(tuple(numbers), tuple(symbols))
# @lc code=end