#
# @lc app=leetcode.cn id=78 lang=python3
#
# [78] 子集
#

# @lc code=start

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        result = [[n] for n in nums]
        result.append([])

        rm = [[i] for i in range(len(nums))]
        while len(rm) > 0:
            r = rm[0]
            del rm[0]
            for i in range(r[-1] + 1, len(nums)):
                rn = r.copy()
                rn.append(i)
                rm.append(rn)
                r_m = []
                for j in rn:
                    r_m.append(nums[j])
                result.append(r_m)
        return result
# @lc code=end

