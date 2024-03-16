#
# @lc app=leetcode.cn id=300 lang=python3
#
# [300] 最长递增子序列
#

# @lc code=start
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        max_ = 0
        max_dict = {}
        for n in nums:
            m = 1
            for i in range(max_, 0, -1):
                x = max_dict.get(i, None)
                if x is not None and n > x:
                    m = i + 1
                if m != 1:
                    break
            x = max_dict.get(m, None)
            if x is None or x > n:
                max_dict[m] = n

            if m > max_:
                max_ = m
        return max_
# @lc code=end

