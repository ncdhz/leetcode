#
# @lc app=leetcode.cn id=39 lang=python3
#
# [39] 组合总和
#
# @lc code=start
class Solution:
    result = []

    def cs(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
            return

        for j in range(i, len(candidates)):
            if candidates[j] + a > target:
                return
            x.append(candidates[j])
            self.cs(candidates, j, x, a + candidates[j], target)
            x.pop()

    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        for i, c in enumerate(candidates):
            if c > target:
                break
            self.cs(candidates,i, [c], c, target)
        return Solution.result
# @lc code=end

