#
# @lc app=leetcode.cn id=645 lang=python3
#
# [645] 错误的集合
#
# @lc code=start
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        i = 0
        results = []

        while i < len(nums):
            while nums[i] != i + 1 and nums[i] != -1:
                if nums[i] == nums[nums[i] - 1]:
                    results.append(nums[i])
                    nums[i] = -1                    
                    break 
                a = nums[i]
                nums[i] = nums[a - 1]
                nums[a - 1] = a
            i+=1
        for i in range(len(nums)):
            if nums[i] == -1:
                results.append(i + 1)
                break

        return results
# @lc code=end

