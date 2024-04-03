#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        
        max_str = s[0]
        s_len = len(s)

        dp = [[False] * s_len for _ in range(s_len)]

        for i in range(s_len):
            dp[i][i] = True

        for i in range(1, s_len):
            for j in range(s_len):
                k = i + j

                if k >= s_len:
                    break
                
                if s[j] != s[k]:
                    dp[j][k] = False
                else:
                    if k - j < 3:
                        dp[j][k] = True
                    else:
                        dp[j][k] = dp[j + 1][k - 1]
                
                if dp[j][k] and k - j + 1 > len(max_str):
                    max_str = s[j: k + 1]
            
        return max_str
# @lc code=end
