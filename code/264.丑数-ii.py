#
# @lc app=leetcode.cn id=264 lang=python3
#
# [264] 丑数 II
#
import heapq
# @lc code=start
class Solution:
    def nthUglyNumber(self, n: int) -> int:

        nums = [1]
        eliminate = set()
        for _ in range(n - 1):
            curr = heapq.heappop(nums)
            
            for i in [2, 3, 5]:
                n = curr * i
                if n not in eliminate:
                    heapq.heappush(nums, n)
                    eliminate.add(n)

        return heapq.heappop(nums)
# @lc code=end

