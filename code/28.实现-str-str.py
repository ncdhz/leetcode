#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] 实现 strStr()
#

# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0

        hl = len(haystack) - len(needle) + 1
        i = 0
        while i < hl: 
            if haystack[i] == needle[0]:
                is_s = True
                for j in range(len(needle)):
                    if needle[j] != haystack[i + j]:
                        is_s = False
                        for k in range(len(haystack) - i - j):
                            if needle[j] == haystack[i + j + k]:
                                i = i + k - 1
                                break
                        break
                if is_s:
                    return i
            i += 1
        return -1

# @lc code=end

