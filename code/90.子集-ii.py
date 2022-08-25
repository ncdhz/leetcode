#
# @lc app=leetcode.cn id=90 lang=python3
#
# [90] 子集 II
#

# @lc code=start
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        result = []
        rm = set()

        def swd(r):
            if len(r) == len(nums):
                s = []
                a = ''
                for i, rr in enumerate(r):
                    if rr == 1:
                        s.append(nums[i])
                        a +=str(nums[i])
                if a not in rm:
                    result.append(s)
                    rm.add(a)
                return
    
            r.append(1)
            swd(r)
            r.pop()
            r.append(0)
            swd(r)
            r.pop()
        
        swd([])

        return result
# @lc code=end

