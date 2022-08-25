#
# @lc app=leetcode.cn id=72 lang=python3
#
# [72] 编辑距离
#

# @lc code=start
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        word2 = ' ' + word2
        x = [i for i in range(len(word2))]
        y = [0] * len(word2)
        for w1 in word1:
            for i, w2 in enumerate(word2):
                if i == 0:
                    y[i] = x[i] + 1
                elif w1 == w2:
                    y[i] = x[i - 1]
                else:
                    y[i] = min([x[i - 1], x[i], y[i - 1]]) + 1
            x, y = y, x
        return x[-1]
# @lc code=end

