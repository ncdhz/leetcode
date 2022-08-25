#
# @lc app=leetcode.cn id=168 lang=python3
#
# [168] Excel表列名称
#

# @lc code=start
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []

        while columnNumber != 0:
            c = columnNumber % 26   
            if c == 0:
                result.insert(0, 'Z')
                columnNumber -= 1
            else:
                result.insert(0, chr(ord('A') + (c - 1)))
            columnNumber = columnNumber // 26
        return ''.join(result)

# @lc code=end

