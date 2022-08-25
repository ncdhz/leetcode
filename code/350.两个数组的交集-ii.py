#
# @lc app=leetcode.cn id=350 lang=python3
#
# [350] 两个数组的交集 II
#

# @lc code=start
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        
        r1 = {}
        for n in nums1:
            r1[n] = r1.get(n, 0) + 1
        r2 = {}
        for n in nums2:
            r2[n] = r2.get(n, 0) + 1
        
        result = []
        for r in r1:
            if r in r2:
                result.extend([r] * min([r1[r], r2[r]]))
        return result
# @lc code=end

