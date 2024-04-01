#
# @lc app=leetcode.cn id=703 lang=python3
#
# [703] 数据流中的第 K 大元素
#

# @lc code=start
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.nums = sorted(nums, reverse=True)[:k]

    def find_val(self, val):
        s = 0
        e = len(self.nums)
        while s < e:
            mid = (s + e) // 2
            n = self.nums[mid]
            if n == val:
                return mid
            elif n < val:
                e = mid - 1
            else:
                s = mid + 1
        return s

    def add(self, val: int) -> int:
        
        if len(self.nums) >= self.k:
            n = self.nums[self.k - 1]
            if n > val:
                return n
            
        i = self.find_val(val)
        
        if len(self.nums) > i:
            v = self.nums[i]
            if v > val:
                i += 1
            self.nums = self.nums[:i] + [val] + self.nums[i:]
            self.nums = self.nums[:self.k]
        else:
            self.nums.append(val)

        return self.nums[self.k - 1]

# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# @lc code=end

