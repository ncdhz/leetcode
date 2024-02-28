#
# @lc app=leetcode.cn id=241 lang=python3
#
# [241] 为运算表达式设计优先级
#

# @lc code=start
class Solution:

    def diffWaysToCompute_(self, numbers, symbols):
        if len(symbols) == 0:
            return numbers
        res = []
        for i in range(1, len(numbers)):
            symbol = symbols[i - 1]
            if symbol == '+':
                number = numbers[i] + numbers[i - 1]
            elif symbol == '-':
                number = numbers[i - 1] - numbers[i]
            else:
                number = numbers[i] * numbers[i - 1]

            res.extend(self.diffWaysToCompute_([*numbers[:i-1], number, *numbers[i+1:]], [*symbols[:i - 1], *symbols[i:]]))
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
        return self.diffWaysToCompute_(numbers, symbols)

# @lc code=end