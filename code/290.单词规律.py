#
# @lc app=leetcode.cn id=290 lang=python3
#
# [290] 单词规律
#

# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        
        s = s.split(' ')
        if len(s) != len(pattern):
            return False
        table_p_s = {}
        table_s_p = {}
        
        for i, p in enumerate(pattern):
            ss = s[i]
            if p not in table_p_s:
                table_p_s[p] = ss
            else:
                if table_p_s[p] != ss:
                    return False
            if ss not in table_s_p:
                table_s_p[ss] = p
            else:
                if table_s_p[ss] != p:
                    return False

        return True
# @lc code=end

