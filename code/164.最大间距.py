#
# @lc app=leetcode.cn id=164 lang=python3
#
# [164] 最大间距
#

# @lc code=start
class Solution:

    def maximumGap(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return 0
        
        buf = [0] * len(nums)
        
        sign = 1
        max_num = max(nums)
        
        while max_num >= sign:
            bucket = [0] * 10
            for num in nums:
                bucket[num // sign % 10] += 1
            
            for i in range(1, 10):
                bucket[i] += bucket[i - 1]
            
            for i in range(len(nums) - 1, -1, -1):
                num = nums[i]
                n = num // sign % 10
                buf[bucket[n] - 1] = num
                bucket[n] -= 1
            sign *= 10
            
            if max_num >= sign: 
                for i, num in enumerate(buf):
                    nums[i] = num

        res = 0
        for i in range(1, len(buf)):
            b = buf[i] - buf[i - 1]
            if b > res:
                res = b

        return res 

# @lc code=end

