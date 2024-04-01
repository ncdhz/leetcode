#
# @lc app=leetcode.cn id=318 lang=python3
#
# [318] 最大单词长度乘积
#

# @lc code=start
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        max_ = 0
        words = sorted(words, key=lambda k: len(k), reverse=True)
        wlen = len(words)
        for i in range(wlen):
            w1 = words[i]
            w1l = len(w1)
            w1s = set(w1)
            for j in range(i + 1, wlen):
                w2 = words[j]
                w2s = set(w2)
                if len(w1s | w2s) == (len(w1s) + len(w2s)):
                    max_ = max([w1l * len(w2), max_])
                    break
        return max_
# @lc code=end
