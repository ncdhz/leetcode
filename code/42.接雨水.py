#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#
# @lc code=start
class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) == 0 or len(height) == 1 or len(height) == 2:
            return 0

        x = 0 if height[0] > height[1] else 1
        y = [0, 0]
        for i in range(2, len(height)):
            if height[i] > height[i - 1]:
                hm = min(height[i], height[x])
                a = 0
                j = x
                for j in range(i - 1, x - 1, -1):
                    if height[j] >= height[i]:
                        break
                    a += hm - height[j]
                y.append(y[j] + a)
                if height[i] >= height[x]:
                    x = i
            else:
                y.append(y[-1])
        
        return y[-1]
# @lc code=end

