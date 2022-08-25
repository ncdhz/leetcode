#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] 零钱兑换
#

# @lc code=start
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        max_amount = amount + 1
        all_amount = [max_amount] * max_amount
        all_amount[0] = 0

        for i in range(1, amount + 1):
            for j in coins:
                if i >= j:
                    all_amount[i] = min([all_amount[i],all_amount[i - j] + 1])

        return -1 if all_amount[amount] >= max_amount else all_amount[amount]
# @lc code=end

