#
# @lc app=leetcode.cn id=706 lang=python3
#
# [706] 设计哈希映射
#

# @lc code=start
class MyHashMap:

    def __init__(self):
        self.__len = 0
        self.__data = [None] * 100

    def put(self, key: int, value: int) -> None:
        if self.__len == len(self.__data):
            data = self.__data
            self.__data = [None] * (self.__len * 2)
            self.__len = 0
            for d in data:
                if d:
                    for dd in d:
                        self.put(dd[0], dd[1])
            self.put(key, value)
            return
        k = key % len(self.__data)
        v = self.__data[k]
        if v:
            for vv in v:
                if vv[0] == key:
                    vv[1] = value
                    return
            v.append([key, value])
        else:
            self.__data[k] = [[key, value]]
        self.__len += 1

    def get(self, key: int) -> int:
        k = key % len(self.__data)
        v = self.__data[k]
        if v:
            for vv in v:
                if vv[0] == key:
                    return vv[1]
        return -1
    
    def remove(self, key: int) -> None:
        k = key % len(self.__data)
        v = self.__data[k]
        if v:
            res = []
            for vv in v:
                if vv[0] != key:
                    res.append(vv)
                else:
                    self.__len -= 1
            if len(res) > 0:
                self.__data[k] = res
            else:
                self.__data[k] = None

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
# @lc code=end

