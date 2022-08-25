#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] 盛最多水的容器
#

# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_a = 0
        for i in range(len(height) - 1, 0, -1):
            if height[i] * i < max_a:
                continue
            for j in range(i):
                if height[i] <= height[j]:
                    a = (i - j) * height[i]
                    if a > max_a:
                        max_a = a
                    break
                else:
                    a = (i - j) * height[j]
                    if a > max_a:
                        max_a = a
                if (i - j) * height[i] < max_a:
                    break
        return max_a

# @lc code=end

