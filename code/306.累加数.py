#
# @lc app=leetcode.cn id=306 lang=python3
#
# [306] 累加数
#


# @lc code=start
class Solution:

    def _add(self, s1, s2):
        s1l = len(s1)
        s2l = len(s2)
        s = 0
        res = ''
        for i in range(1, max(s1l, s2l) + 1):

            a = s1[s1l - i] if i <= s1l else 0
            b = s2[s2l - i] if i <= s2l else 0 
            x = int(a) + int(b) + s
            s = 0
            if x >= 10:
                s = 1
                x %= 10
            res = f'{x}{res}'

        if s == 1:
            res = f'1{res}'

        return res


    def _isAdditiveNumber(self, i, j, num):
        s = self._add(num[: i], num[i: i + j])
        
        n = num[i + j:]
        if n.startswith(s):
            if len(n) == len(s):
                return True
            else:
                return self._isAdditiveNumber(j, len(s), num[i:])
        return False

    def isAdditiveNumber(self, num: str) -> bool:
        if len(num) < 3:
            return False

        n2 = len(num) // 2 + 1
        for i in range(1, n2):
            if num[0] == '0' and i > 1:
                break
            for j in range(1, n2):
                if num[i] == '0' and j > 1:
                    break
                if i + j == len(num):
                    return False
                if self._isAdditiveNumber(i, j, num):
                    return True
            
        return False
# @lc code=end
