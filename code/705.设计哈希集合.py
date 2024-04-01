#
# @lc app=leetcode.cn id=705 lang=python3
#
# [705] 设计哈希集合
#

# @lc code=start
class MyHashSet:

    def __init__(self):
        self.__keys = [[] for _ in range(5000)]

    def add(self, key: int) -> None:
        if not self.contains(key):
            self.__keys[key % 5000].append(key)

    def remove(self, key: int) -> None:
        if self.contains(key):
            self.__keys[key % 5000].remove(key)

    def contains(self, key: int) -> bool:

        nums = self.__keys[key % 5000]
        for num in nums:
            if num == key:
                return True
        return False
# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
# @lc code=end

