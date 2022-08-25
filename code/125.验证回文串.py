#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] 验证回文串
#

# @lc code=start
class Solution:
    
    def is_char(self, c):
        c = c.lower()
        return not (ord(c) >= ord('0') and ord(c) <= ord('9')) and not (ord(c) >= ord('a') and ord(c) <= ord('z'))

    def isPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while i < j:
            while i < j and self.is_char(s[i]): 
                i += 1
                continue
            start = s[i].lower()
            while i < j and self.is_char(s[j]): 
                j -= 1
                continue
            end = s[j].lower()

            if start != end:
                return False
            i += 1
            j -= 1
        return True
# @lc code=end

