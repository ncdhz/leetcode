#
# @lc app=leetcode.cn id=728 lang=python3
#
# [728] 自除数
#

# @lc code=start
class Solution:
    
    numbers = set()

    def _selfDividingNumbers(self, n):
        if n in Solution.numbers:
            return True
        
        i = n % 10
        j = n // 10

        while i or j:
            if i == 0 or n % i != 0:
                return False

            i = j % 10            
            j = j // 10

        Solution.numbers.add(n)

        return True

    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        
        res = []
        for i in range(left, right + 1):
            if self._selfDividingNumbers(i):
                res.append(i)
        
        return res
# @lc code=end

