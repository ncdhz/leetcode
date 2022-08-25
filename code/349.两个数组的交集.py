#
# @lc app=leetcode.cn id=349 lang=python3
#
# [349] 两个数组的交集
#

# @lc code=start

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = set()
        
        r = {n for n in nums1}
        
        for n in nums2:
            if n in r:
                result.add(n)

        return list(result)
# @lc code=end

