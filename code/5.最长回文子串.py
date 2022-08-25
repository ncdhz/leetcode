#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        max_str = s[0]
        s_len = len(s)
        for i in range(s_len):
            if i + 1 < s_len and s[i] == s[i + 1]:
                if len(max_str) < 2:
                    max_str = s[i: i + 2]

                for j in range(1, s_len):
                    if i - j < 0 or i + 1 + j > s_len - 1 or s[i - j] != s[i + 1 + j]:
                        ss = s[i - j + 1: i + 1 + j]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break

            if i + 2 < s_len and s[i] == s[i + 2]:
                if len(max_str) < 3:
                    max_str = s[i: i + 3]
                for j in range(1, s_len):
                    if i - j < 0 or i + 2 + j > s_len - 1 or s[i - j] != s[i + 2 + j]:
                        ss = s[i - j + 1: i + j + 2]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break
        return max_str
# @lc code=end
