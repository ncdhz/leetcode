#
# @lc app=leetcode.cn id=307 lang=python3
#
# [307] 区域和检索 - 数组可修改
#

# @lc code=start
class NumArray:

    def __init__(self, nums: List[int]):
        self.__data = []
        self.__nums = nums
        self.__update = {}
        sum_ = 0
        for num in nums:
            sum_ += num
            self.__data.append(sum_)

    def update(self, index: int, val: int) -> None:
        self.__update[index] = val
        if len(self.__update) == 500:
            for key in self.__update:
                self.__nums[key] = self.__update[key]

            self.__data = []
            sum_ = 0
            for num in self.__nums:
                sum_ += num
                self.__data.append(sum_)
            self.__update = {}

    def sumRange(self, left: int, right: int) -> int:
        l = self.__data[left - 1] if left - 1 >= 0 else 0
        sum_ = self.__data[right] - l
        for i in self.__update:
            if left <= i <= right:
                sum_ += self.__update[i] - self.__nums[i]
        return sum_

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# obj.update(index,val)
# param_2 = obj.sumRange(left,right)
# @lc code=end

