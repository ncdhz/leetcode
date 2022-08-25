#
# @lc app=leetcode.cn id=59 lang=python3
#
# [59] 螺旋矩阵 II
#

# @lc code=start
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        x = [[0] * n for _ in range(n)]
        k = n * n
        
        i = n // 2
        j = (n - 1) // 2
        x[i][j] = k
        k -= 1
        m = 2
        if n % 2 == 0:
            x[i][j + 1] = k
            k -= 1
            j += 1
            x[i - 1][j] = k
            k -= 1
            i -= 1
            x[i][j - 1] = k
            k -= 1
            j -= 1
            m += 1
        while k > 0:
            j -= 1
            for n in range(m):
                x[i + n][j] = k
                k -= 1
            i += n
            for n in range(m):
                x[i][j + n + 1] = k
                k -= 1
            j = j + n + 1
            for n in range(m):
                x[i - n - 1][j] = k
                k -= 1
            i = i - n - 1
            for n in range(m):
                x[i][j - n - 1] = k
                k -= 1
            j = j - n - 1
            m += 2
        return x                
# @lc code=end

