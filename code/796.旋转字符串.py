#
# @lc app=leetcode.cn id=796 lang=python3
#
# [796] 旋转字符串
#

# @lc code=start
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False

        if len(s) == 1:
            return s == goal

        for _ in range(0, len(s)):
            s = s[1:]+s[0]
            if s == goal:
                return True
        return False
# @lc code=end

