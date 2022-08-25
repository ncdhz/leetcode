#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] 最小覆盖子串
#

# @lc code=start
class Solution:
    def minWindow(self, s: str, t: str) -> str:

        t_map = {}
        for tt in t:
            t_map[tt] = t_map.get(tt, 0) + 1

        j = 0
        t_sum = 0
        min_sub_str = ''
        for i in range(len(s)):
            if s[i] in t_map:
                t_map[s[i]] -= 1
                if t_map[s[i]] >= 0:
                    t_sum += 1
            if t_sum == len(t):
                while j < len(s) and t_sum == len(t):
                    if s[j] in t_map:
                        t_map[s[j]] += 1
                        if t_map[s[j]] > 0:
                            t_sum -= 1
                    j += 1
                if min_sub_str is '' or len(min_sub_str) > (i + 1 - j):
                    min_sub_str = s[j-1: i + 1]
        return min_sub_str
# @lc code=end
