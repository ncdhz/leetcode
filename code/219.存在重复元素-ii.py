#
# @lc app=leetcode.cn id=219 lang=python3
#
# [219] 存在重复元素 II
#

# @lc code=start

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # 用 Hash 可以大大的加快程序运行
        result = {}
        for i, n in enumerate(nums):
            if n in result and i - result[n] <= k:
                return True
            result[n] = i 
        return False
# @lc code=end

