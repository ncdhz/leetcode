#
# @lc app=leetcode.cn id=299 lang=python3
#
# [299] 猜数字游戏
#

# @lc code=start
class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        a = 0
        b = 0
        aa = {}
        bb = []
        for i, s in enumerate(secret):
            if guess[i] == s:
                a += 1
            else:
                aa[s] = aa.get(s, 0) + 1
                bb.append(guess[i])
        for g in bb:
            if g in aa and aa[g] > 0:
                aa[g] -= 1
                b += 1
    
        return f'{a}A{b}B'
# @lc code=end

