#
# @lc app=leetcode.cn id=45 lang=python3
#
# [45] 跳跃游戏 II
#

# @lc code=start
class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
            
        x = {0: 0}
        for i, n in enumerate(nums):
            if n == 0:
                continue
            k = x[i]
            if i + n + 1 >= len(nums):
                return k + 1
            for j in range(1, n + 1):
                if (j + i) not in x:
                    x[j + i] = k + 1
        return 0   
# @lc code=end

