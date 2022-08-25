#
# @lc app=leetcode.cn id=383 lang=python3
#
# [383] 赎金信
#

# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        r = {}
        m = {}
        for rn in ransomNote:
            r[rn] = r.get(rn, 0) + 1
        
        for mz in magazine:
            m[mz] = m.get(mz, 0) + 1
        
        for rr in r:
            if rr not in m or r[rr] > m[rr]:
                return False
        return True
# @lc code=end

