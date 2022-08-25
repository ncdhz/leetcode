#
# @lc app=leetcode.cn id=47 lang=python3
#
# [47] 全排列 II
#
# @lc code=start
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        
        x = [[i] for i, n in enumerate(nums) if n not in nums[:i]]

        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for j in range(len(nums)):
                    if j not in x[i]:
                        z = x[i].copy()
                        z.append(j)
                        x.append(z)
            x = x[y:]
        
        y = []
        i = 0
        z = []

        for xx in x:
            s = 0
            zz = []
            for j in range(len(xx)):
                s += 10 ** j * nums[xx[j]]
                zz.append(nums[xx[j]])

            if s not in y:
                z.append(zz)
                y.append(s)
        
        return z
# @lc code=end

