#
# @lc app=leetcode.cn id=389 lang=python3
#
# [389] 找不同
#

# @lc code=start
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        ss = {}
        tt = {}
        
        for s_ in s:
            ss[s_] = ss.get(s_, 0) + 1
        for t_ in t:
            tt[t_] = tt.get(t_, 0) + 1
        
        for t_ in tt:
            if t_ not in ss or tt[t_] != ss[t_]:
                return t_
# @lc code=end

