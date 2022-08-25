#
# @lc app=leetcode.cn id=232 lang=python3
#
# [232] 用栈实现队列
#

# @lc code=start
class MyQueue:

    def __init__(self):
        self.f = []
        self.s = []

    def push(self, x: int) -> None:
        self.f.append(x)

    def pop(self) -> int:
        self.__f2s()
        
        return self.s.pop()

    def __f2s(self):
        if len(self.s) == 0:
            for _ in range(len(self.f)):
                self.s.append(self.f.pop())

    def peek(self) -> int:
        self.__f2s()
        return self.s[len(self.s) - 1]

    def empty(self) -> bool:
        return True if (len(self.s) + len(self.f)) == 0 else False


# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
# @lc code=end

