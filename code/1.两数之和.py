#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            if hash_map.get(target - num) is not None:
                return [i, hash_map.get(target - num)]
            hash_map[num] = i
# @lc code=end

