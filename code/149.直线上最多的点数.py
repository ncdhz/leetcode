#
# @lc app=leetcode.cn id=149 lang=python3
#
# [149] 直线上最多的点数
#
from collections import defaultdict
# @lc code=start
class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        if len(points) == 1:
            return 1
        
        pl = len(points)
        max_ = 0
        for i in range(pl):
            p1 = points[i]
            
            res = defaultdict(int)
            for j in range(pl):
                if i == j:
                    continue
                p2 = points[j]

                x = p1[0] - p2[0]
                y = p1[1] - p2[1]

                key = p1[0]
                if x == 0:
                    key = f'x{p1[0]}'
                elif y == 0:
                    key = f'y{p1[1]}' 
                else:
                    key = y / x

                res[key] += 1
            max_ = max([max(res.values()), max_])
        
        return max_ + 1
# @lc code=end

