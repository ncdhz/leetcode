#
# @lc app=leetcode.cn id=345 lang=python3
#
# [345] 反转字符串中的元音字母
#

# @lc code=start
class Solution:
    def reverseVowels(self, s: str) -> str:
        ss = [s_ for s_ in s]
        sy = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}

        i = 0
        j = len(ss) - 1
        while i < j:
            while i < j and ss[i] not in sy: i += 1
            while i < j and ss[j] not in sy: j -= 1
            if i < j:
                ss[i], ss[j] = ss[j], ss[i]
                i += 1
                j -= 1

        return ''.join(ss)

# @lc code=end

