#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == "":
            return 0
        
        max_ = 0
        r = {}
        j = 0
        for i in range(len(s)):
            if s[i] in r and r[s[i]] >= j:
                if i - j> max_:
                    max_ = i - j
                j = r[s[i]] + 1
            r[s[i]] = i

        if i + 1 - j > max_:
            max_ = i + 1 - j
        return max_
# @lc code=end

