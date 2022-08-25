#
# @lc app=leetcode.cn id=6 lang=python3
#
# [6] Z 字形变换
#

# @lc code=start
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        end_str = ''
        for i in range(numRows):
            sl = len(s) / (2 * numRows - 2) 
            sl = int(sl) + 1 if sl > int(sl) else int(sl)
            for j in range(sl):
                k = i + j * (2 * numRows - 2)
                if k >= len(s):
                    break
                end_str += s[k]
                
                if i != 0 and i != (numRows - 1):
                    k1 = (numRows - i) * 2 - 2 + k
                    if k1 >= len(s):
                        break
                    end_str += s[k1]   
        return end_str
# @lc code=end

