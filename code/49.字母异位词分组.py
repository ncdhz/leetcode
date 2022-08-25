#
# @lc app=leetcode.cn id=49 lang=python3
#
# [49] 字母异位词分组
#

# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        x = {}
        for s in strs:
            ss = ''.join(sorted(s))
            y = x.get(ss, [])
            y.append(s)
            x[ss] = y
        return list(x.values())
# @lc code=end

