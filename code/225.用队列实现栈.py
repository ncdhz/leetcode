#
# @lc app=leetcode.cn id=225 lang=python3
#
# [225] 用队列实现栈
#

# @lc code=start
class MyStack:
    # 代码有问题
    def __init__(self):
        self.x1 = []
        self.x2 = []

    def push(self, x: int) -> None:
        self.x2.append(x)
        while len(self.x1) != 0:
            self.x2.append(self.x1[0])
            del self.x1[0]
        self.x2, self.x1 = self.x1, self.x2  
     
    def pop(self) -> int:
        r = self.x1[0]
        del self.x1[0]
        return r 

    def top(self) -> int:
        return self.x1[0]

    def empty(self) -> bool:
        if len(self.x1) == 0:
            return True
        return False

# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
# @lc code=end

