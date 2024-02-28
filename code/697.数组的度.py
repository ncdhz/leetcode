#
# @lc app=leetcode.cn id=697 lang=python3
#
# [697] 数组的度
#

# @lc code=start
class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        max_key = -1
        res = {}
        for i, num in enumerate(nums):
            msg = res.get(num, [0, i, i])
            msg[0] += 1
            msg[2] = i
            res[num] = msg

            max_msg = res.get(max_key)
            if max_key == -1 or max_msg[0] < msg[0] or(max_msg[0] == msg[0] and max_msg[2] - max_msg[1] > msg[2] - msg[1]):
                max_key = num

        msg = res.get(max_key)
        return msg[2] - msg[1] + 1
# @lc code=end

