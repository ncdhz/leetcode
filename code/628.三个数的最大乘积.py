#
# @lc app=leetcode.cn id=628 lang=python3
#
# [628] 三个数的最大乘积
#

# @lc code=start
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        data1 = list(nums[:3])
        data2 = list(nums[:3])
        for n in nums[3:]:
            data1.append(n)
            data1.remove(min(data1))
            data2.append(n)
            data2.remove(max(data2))
        sum_1 = data1[0] * data1[1] * data1[2]
        
        m1 = min(data2)
        data2.remove(m1)
        m2 = min(data2)

        sum_2 = m1 * m2 * max(data1)

        return sum_1 if sum_1 > sum_2 else sum_2
# @lc code=end

