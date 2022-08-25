#
# @lc app=leetcode.cn id=18 lang=python3
#
# [18] 四数之和
#
# @lc code=start
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        
        if len(nums) < 4:
            return []
        all_r = []
        nums = sorted(nums)
        en = None
        for i, n in enumerate(nums):
            if n == en:
                continue
            en = n
            enn = None
            
            for j in range(i + 1, len(nums) - 2):
                if nums[j] == enn:
                    continue
                enn = nums[j]

                k = j + 1
                m = len(nums) - 1
                while k < m:
                    rt = (n + nums[j] + nums[k] + nums[m])
                    while m > k and rt >= target:
                        
                        if rt == target and ((m == len(nums) - 1) or nums[m] != nums[m + 1]):
                            all_r.append([n, nums[j], nums[k], nums[m]])

                        m -= 1
                        rt = (n + nums[j] + nums[k] + nums[m])
                    k += 1
        return all_r
# @lc code=end

