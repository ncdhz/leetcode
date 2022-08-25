#
# @lc app=leetcode.cn id=392 lang=python3
#
# [392] 判断子序列
#

# @lc code=start
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0 
        j = 0
        while i < len(s) and j < len(t):
            while j < len(t) and t[j] != s[i]: j += 1
            j += 1
            if j > len(t):
                return False
            i += 1
        return len(s) == i
# @lc code=end

