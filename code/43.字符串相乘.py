#
# @lc app=leetcode.cn id=43 lang=python3
#
# [43] 字符串相乘
#

# @lc code=start
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        x = []
        max_ = 1
        for i in range(len(num1) - 1, -1, -1):
            n1 = num1[i]
            s = '0' * (len(num1) - 1 - i)
            y = 0
            for j in range(len(num2) - 1, -1, -1):
                n2 = num2[j]
                n = int(n1) * int(n2) + y
                y = n // 10
                s = s + str(n % 10)
            s =  s + str(y)
            x.append(s)
            if len(s) > max_:
                max_ = len(s)
        y = 0
        r = ''
        for i in range(max_):
            s = 0
            for j in range(len(x)):
                if len(x[j]) > i:
                    s += int(x[j][i])
            s += y
            y = s // 10
            r = str(s % 10) + r
        r = str(y) + r 
        j = 0
        for i in range(len(r) - 1):
            if r[i] != '0':
                break
            j += 1
        return r[j:]
# @lc code=end

