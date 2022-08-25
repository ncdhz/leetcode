#
# @lc app=leetcode.cn id=65 lang=python3
#
# [65] 有效数字
#

# @lc code=start
class Solution:
    def isNumber(self, s: str) -> bool:
        is_e = False
        is_f = False
        is_i = False
        is_s = False

        for ss in s:
            if (ss  == '-' or ss == '+') and not is_s and not is_i and not is_f:
                is_s = True
                continue

            if ss == '.' and not is_f and not is_e:
                is_f = True
                continue
            
            if (ss == 'e' or ss == 'E') and not is_e and is_i:
                is_i = False
                is_e = True
                is_f = False
                is_s = False
                continue
                
            if ord(ss) >= ord('0') and ord(ss) <= ord('9'):
                is_i = True
            else:
                return False
        return is_i
# @lc code=end

