#
# @lc app=leetcode.cn id=16 lang=python3
#
# [16] 最接近的三数之和
#
# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums = sorted(nums)

        min_r = float('inf')
        min_s = None
        for i, n in enumerate(nums):
            j = i + 1
            k = len(nums) - 1
            while j < k:
                while k > j and (nums[k] + n + nums[j] > target) :
                    k -= 1
                
                if k < (len(nums) - 1):
                    mid = nums[k + 1] + n + nums[j]
                    if mid - target < min_r:
                        min_r = mid - target
                        min_s = mid
                
                if k == j:
                    break
                
                mid = nums[k] + n + nums[j]
                if target - mid< min_r:
                    min_r = target - mid
                    min_s = mid

                
                if min_r == 0:
                    return target

                j += 1
        return min_s
# @lc code=end

