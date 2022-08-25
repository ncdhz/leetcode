#
# @lc app=leetcode.cn id=31 lang=python3
#
# [31] 下一个排列
#
# @lc code=start
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = 0
        for i in range(len(nums) - 1, 0, -1):
            if nums[i] > nums[i - 1]:
                k = i
                for j in range(len(nums) - 1, i, -1):
                    if nums[j] > nums[i - 1]:
                        k = j
                        break
                x = nums[i - 1]
                nums[i - 1] = nums[k]
                nums[k] = x
                k = i
                break

        for i in range(k, (len(nums) + k) // 2):
            x = nums[i] 
            nums[i] = nums[len(nums) - 1 + k -i]
            nums[len(nums) - 1 + k -i] = x
        return nums
# @lc code=end

