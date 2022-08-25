#
# @lc app=leetcode.cn id=77 lang=python3
#
# [77] 组合
#
# @lc code=start
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        if k > n:
            return []
        r = [[i + 1] for i in range(n + 1 - k)]
        for l in range(k - 1):
            lr = len(r)
            for m in range(lr):
                rr = r[m]
                for nn in range(rr[-1] + 1,n + 3 - k + l):
                    rrr = rr.copy()
                    rrr.append(nn)
                    r.append(rrr)
            r = r[lr:]
        return r
# @lc code=end

