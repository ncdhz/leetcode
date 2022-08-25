#
# @lc app=leetcode.cn id=8 lang=python3
#
# [8] 字符串转换整数 (atoi)
#

# @lc code=start
class Solution:
    
    MAX_VALUE = 2 ** 31 -1
    MIN_VALUE = -2 ** 31

    a = MAX_VALUE // 10
    b = MAX_VALUE % 10
    c = - MIN_VALUE // 10
    d = (- MIN_VALUE) % 10
    

    def myAtoi(self, s: str) -> int:
        sum_num = 0
        sign = False
        symbol = 1
        
        for ss in s:
            if '0' <= ss and ss <= '9':
                sign = True
                i = int(ss)
                
                if symbol > 0 and ((sum_num == Solution.a and i > Solution.b) or sum_num > Solution.a):
                    return Solution.MAX_VALUE
                
                if symbol < 0 and ((sum_num == Solution.c and i > Solution.d) or sum_num > Solution.c):
                    return Solution.MIN_VALUE
                sum_num = sum_num * 10 + i
            else:
                if sign:
                    break
                if ss == '-' or ss == '+':
                    symbol = -1 if ss == '-' else 1
                    sign = True
                    continue
                if ss != ' ':
                    break

        return symbol * sum_num
# @lc code=end

