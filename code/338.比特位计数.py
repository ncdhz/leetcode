#
# @lc app=leetcode.cn id=338 lang=python3
#
# [338] 比特位计数
#

# @lc code=start
class Solution:
    def countBits(self, n: int) -> List[int]:
        # 凡是 2 的 y 次方其结果都为 1
        # 0 [0]
        # 1 [0, 1] 1 是 2 的 0 次方
        # 2 [0,1,1]
        # 3 [0,1,1,2]
        # 4 [0,1,1,2,1] 4 是 2 的平方
        # 5 [0,1,1,2,1,2]
        # 6 [0,1,1,2,1,2,2]
        # 7 [0,1,1,2,1,2,2,3]
        # 8

        result = [0]
        x = 0
        for i in range(1, n + 1):
            # 这行可以判断是否是2的y次方
            # 如 4 -> 100 4-1 -> 11 两者与必定为 0
            if i & (i - 1) == 0:
                x = i
            # 这行代码后面的加1表示的是最近的一个为 2的y 次方的数
            # result[i - x] 表示 i - 最近一个为 2的y 次方的数
            # 比如：7 = 3 + 4 其含1量为 3 的含1量加4的含1量
            result.append(result[i - x] + 1)
        return result
# @lc code=end

