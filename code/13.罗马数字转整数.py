#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] 罗马数字转整数
#

# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        char_num = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        sum_num = 0
        max_len = len(s)
        sign = False

        for i in range(len(s)):

            if sign:
                sign = False
                continue

            if i + 1 < max_len:
                n1 = char_num[s[i]]
                n2 = char_num[s[i + 1]]

                if n2 / n1 == 10 or n2 / n1 == 5:
                    sum_num = sum_num + char_num[s[i + 1]] - char_num[s[i]]
                    sign = True
                else:
                    sum_num += char_num[s[i]]
            else:
                sum_num += char_num[s[i]]
        return sum_num
# @lc code=end