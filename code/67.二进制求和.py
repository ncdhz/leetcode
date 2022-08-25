#
# @lc app=leetcode.cn id=67 lang=python3
#
# [67] 二进制求和
#

# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:

        if len(b) > len(a):
            c = b
            b = a
            a = c
        i = len(a) - len(b)
        k = 0
        end_str = ''
        for j in range(len(b) - 1, -1, -1):
            x = int(b[j]) + int(a[j + i]) + k
            if x <= 1:
                end_str = str(x) + end_str
                k = 0
            else:
                if x == 2:
                    end_str = '0' + end_str
                elif x == 3:
                    end_str = '1' + end_str
                k = 1
        
        for j in range(i - 1, -1, -1):
            x = int(a[j]) + k
            if x == 2:
                end_str = '0' + end_str
                k = 1
            else:
                end_str = str(x) + end_str
                k = 0

        if k == 1:
            end_str = '1' + end_str

        return end_str
# @lc code=end

