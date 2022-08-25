#
# @lc app=leetcode.cn id=171 lang=python3
#
# [171] Excel 表列序号
#

# @lc code=start
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum_ = 0
        j = 1
        for i in range(len(columnTitle) - 1, -1, -1):
            sum_ += (ord(columnTitle[i]) - ord('A') + 1) * j
            j *= 26
        return sum_
# @lc code=end

