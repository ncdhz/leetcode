#
# @lc app=leetcode.cn id=709 lang=python3
#
# [709] 转换成小写字母
#

# @lc code=start
class Solution:
    def toLowerCase(self, s: str) -> str:
        a = ord('a')
        A = ord('A')
        Z = ord('Z')
        res = ''
        for ss in s:
            if Z >= ord(ss) >= A:
                res += chr(a + ord(ss) - A)
            else:
                res += ss
        return res
# @lc code=end

