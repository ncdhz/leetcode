#
# @lc app=leetcode.cn id=242 lang=python3
#
# [242] 有效的字母异位词
#

# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False
        r = {}
        
        for ss in s:
            r[ss] = r.get(ss, 0) + 1
        
        for tt in t:
            if tt not in r:
                return False
            r[tt] -= 1
            if r[tt] < 0:
                return False
        
        return True
# @lc code=end

