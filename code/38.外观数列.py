#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] 外观数列
#

# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        s = '1'
        for _ in range(1, n):
            i = 0
            sss = ''
            r = ''
            for ss in s:
                if sss == '':
                    sss = ss
                    i += 1
                elif sss == ss:
                    i += 1
                else:
                    r = r + str(i) + sss
                    sss = ss
                    i = 1
            s =r + str(i) + sss
        return s
# @lc code=end

