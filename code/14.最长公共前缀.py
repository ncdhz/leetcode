#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] 最长公共前缀
#

# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        end_str = ''
        min_len = len(strs[0])
        for s in strs:
            if len(s) < min_len:
                min_len = len(s)
        
        for i in range(min_len):
            c = strs[0][i]
            for s in strs:
                if s[i] != c:
                    return end_str
            end_str += c
        return end_str
# @lc code=end

