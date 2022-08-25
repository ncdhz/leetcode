#
# @lc app=leetcode.cn id=68 lang=python3
#
# [68] 文本左右对齐
#

# @lc code=start
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        i = 0
        x = []
        while i < len(words):
            sum_ = 0
            xx = []
            while i < len(words):
                w_l = len(words[i])
                if sum_ + len(xx) + w_l <= maxWidth:
                    xx.append(words[i])
                    i += 1
                    sum_ += w_l
                else:
                    break
            x.append((xx, sum_))
        
        for i in range(len(x) - 1):
            if len(x[i][0]) == 1:
                x[i] = x[i][0][0] + (' ' * (maxWidth - x[i][1]))
                continue
            j = len(x[i][0]) - 1
            ss = maxWidth - x[i][1]
            s = ''
            while j > 0:
                s = x[i][0][j] + s
                sm = ss // j
                s = ' ' * sm + s
                ss = ss - sm
                j -= 1
            s = x[i][0][0] + s
            x[i] = s
        
        x[-1] = ' '.join(x[-1][0])
        x[-1] = x[-1] + (' ' * (maxWidth - len(x[-1])))

        return x
# @lc code=end

