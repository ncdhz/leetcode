#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] 柱状图中最大的矩形
#

# @lc code=start
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left = [0] * n
        right = [n] * n
        l = []

        for i in range(n):
            while len(l) > 0 and heights[l[-1]] >= heights[i]:
                right[l[-1]] = i
                l.pop()
            left[i] = l[-1] if len(l) > 0 else -1
            l.append(i)

        return max([(right[i] - left[i] - 1) * heights[i] for i in range(n)]) if len(heights) > 0 else 0 
# @lc code=end

