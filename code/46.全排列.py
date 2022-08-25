#
# @lc app=leetcode.cn id=46 lang=python3
#
# [46] 全排列
#

# @lc code=start
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        x = [[n] for n in nums]
        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for n in nums:
                    if n not in x[i]:
                        z = x[i].copy()
                        z.append(n)
                        x.append(z)
            x = x[y:]
        return x
# @lc code=end

