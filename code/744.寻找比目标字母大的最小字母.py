#
# @lc app=leetcode.cn id=744 lang=python3
#
# [744] 寻找比目标字母大的最小字母
#

# @lc code=start
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        t = ord(target)
        c = letters[0]
        n = ord(c) - t
        for letter in letters:
            o = ord(letter) - t
            if o > 0 and (o  < n or n <= 0):
                c = letter
                n = o
        return c
# @lc code=end

