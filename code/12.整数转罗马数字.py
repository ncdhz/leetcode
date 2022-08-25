#
# @lc app=leetcode.cn id=12 lang=python3
#
# [12] 整数转罗马数字
#

# @lc code=start
class Solution:
    def get_roman(self, n, s, m, e):
        end_str = ''
        if n == 9:
            end_str += (s + e)
        else:
            if n >= 5:
                n = n - 5
                end_str += m
                
            else:
                if n == 4:
                    end_str += (s + m)
                    n = 0
            for _ in range(n):
                end_str += s 
        return end_str

    def intToRoman(self, num: int) -> str:
        end_str = ''
        m = num // 1000
        for _ in range(m):
            end_str += 'M'
        num = num % 1000
        c = num // 100
        end_str += self.get_roman(c, 'C', 'D', 'M')
        num = num % 100
        x = num // 10
        end_str += self.get_roman(x, 'X', 'L', 'C')
        i = num % 10
        end_str += self.get_roman(i, 'I', 'V', 'X')
        
        return end_str
# @lc code=end

