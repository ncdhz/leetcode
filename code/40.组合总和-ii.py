#
# @lc app=leetcode.cn id=40 lang=python3
#
# [40] 组合总和 II
#

# @lc code=start
from select import select


class Solution:
    result = []
    def cs2(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
        y = []
        for j in range(i + 1, len(candidates)):
            c = candidates[j]
            if c + a > target:
                return
            
            if c in y:
                continue
            y.append(c)

            x.append(c)
            self.cs2(candidates, j, x, a + c, target)
            x.pop()

    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        y = []

        for i, c in enumerate(candidates):
            if c > target:
                break
            
            if c in y:
                continue
            y.append(c)

            self.cs2(candidates, i, [c], c, target)
        return Solution.result
# @lc code=end

