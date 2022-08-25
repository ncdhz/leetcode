#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] 加一
#

# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        j = 1
        for i in range(len(digits) - 1, -1, -1):
            if j == 0:
                break
            if digits[i] + j == 10:
                digits[i] = 0
            else:
                digits[i] += j
                j = 0
        if j == 1:
            digits.insert(0, 1)
        
        return digits
# @lc code=end

