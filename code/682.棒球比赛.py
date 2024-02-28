#
# @lc app=leetcode.cn id=682 lang=python3
#
# [682] 棒球比赛
#

# @lc code=start
class Solution:
    def calPoints(self, operations: List[str]) -> int:
        sum_ = 0
        scores = []

        for operation in operations:
            if operation == '+':
                n = scores[-1] + scores[-2]
                sum_ += n
                scores.append(n)
            elif operation == 'D':
                n = scores[-1] * 2
                sum_ += n
                scores.append(n)
            elif operation == 'C':
                score = scores.pop()
                sum_ -= score
            else:
                n = int(operation)
                scores.append(n)
                sum_ += n
        return sum_
# @lc code=end

