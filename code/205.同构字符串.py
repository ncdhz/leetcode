#
# @lc app=leetcode.cn id=205 lang=python3
#
# [205] 同构字符串
#

# @lc code=start
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        table_s_t = {}
        table_t_s = {}
        for i, ss in enumerate(s):
            tt = t[i]
            if ss in table_s_t:
                if tt != table_s_t[ss]:
                    return False
            elif tt in table_t_s:
                if ss != table_t_s[tt]:
                    return False
            else:
                table_s_t[ss] = tt
                table_t_s[tt] = ss
        return True
# @lc code=end

