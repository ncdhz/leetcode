#
# @lc app=leetcode.cn id=29 lang=python3
#
# [29] 两数相除
#

# @lc code=start
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if divisor == 1:
            return dividend
        if divisor == -1:
            if dividend == -2**31:
                return 2**31 -1
            else:
                return -dividend

        d = str(dividend)
        sign = 1
        if d[0] == '-':
            d = d[1:]
            sign = -sign
        if divisor < 0:
            sign = -sign
        r = ''
        s = ''
        for dd in d:
            dd = int(s + dd)
            rr = 0
            while dd > 0:
                if divisor > 0:
                    if dd - divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd -= divisor

                elif divisor < 0:
                    if dd + divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd += divisor

            if r != '' or rr != 0:
                r += str(rr)
            if dd > 0:
                s = str(dd)
            else:
                s = ''
        r = 0 if r == '' else int(r)
        if sign < 0:
            return -r
        return r
# @lc code=end

