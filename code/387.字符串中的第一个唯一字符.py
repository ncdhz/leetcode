#
# @lc app=leetcode.cn id=387 lang=python3
#
# [387] 字符串中的第一个唯一字符
#

# @lc code=start
class Solution:
    def firstUniqChar(self, s: str) -> int:
        ss = {}
        for i, s_ in enumerate(s):
            if s_ in ss:
                ss[s_] = -1
            else:
                ss[s_] = i 
        
        i = len(s) + 1
        for s_ in ss:
            if ss[s_] != -1 and ss[s_] < i:
                i = ss[s_]
        
        return i if i != (len(s) + 1) else -1
# @lc code=end

