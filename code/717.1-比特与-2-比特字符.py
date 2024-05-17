#
# @lc app=leetcode.cn id=717 lang=python3
#
# [717] 1 比特与 2 比特字符
#

# @lc code=start
class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        i = 0
        res = False
        while i < len(bits):
            b = bits[i]
            if b == 1:
                i += 2
                res = False
            else:
                i += 1
                res = True
        return res
# @lc code=end

