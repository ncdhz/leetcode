#
# @lc app=leetcode.cn id=313 lang=python3
#
# [313] 超级丑数
#

import heapq
# @lc code=start
class Solution:
    def nthSuperUglyNumber(self, n: int, primes: List[int]) -> int:
        nums = [1]
        en = set()
        for _ in range(n - 1):
            n = heapq.heappop(nums)

            for p in primes:
                a = n * p
                if a not in en:
                    en.add(a)
                    heapq.heappush(nums, a)
                    
        return heapq.heappop(nums)        
# @lc code=end

