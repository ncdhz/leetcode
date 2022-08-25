#
# @lc app=leetcode.cn id=57 lang=python3
#
# [57] 插入区间
#

# @lc code=start

class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:

        i = 0
        j = len(intervals) - 1
        while i <= j:
            k = (i + j) // 2
            if newInterval[0] == intervals[k][0]:
                i = k + 1
                break
            elif newInterval[0] > intervals[k][0]:
                i = k + 1
            else:
                j = k - 1
        
        intervals.insert(i, newInterval)

        insert = []
        for interval in intervals:
            if not insert or insert[-1][1] < interval[0]:
                insert.append(interval)
            else:
                insert[-1][1] = max(insert[-1][1], interval[1])
        return insert
# @lc code=end

