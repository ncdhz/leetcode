#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#

# @lc code=start

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []
        nums = sorted(nums)

        result = []
        ni = None
        for i, n in enumerate(nums):
            if n == ni:
                continue
            ni = n
            k = len(nums) - 1
            j = i + 1
            while j < k:
                while nums[k] + n + nums[j] >= 0 and k > j:
                    if nums[k] + n + nums[j] == 0 and (k == len(nums) - 1 or nums[k] != nums[k + 1]):
                        result.append([n, nums[j], nums[k]])
                    k -= 1
                j += 1
        return result
# @lc code=end
