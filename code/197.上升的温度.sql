--
-- @lc app=leetcode.cn id=197 lang=mysql
--
-- [197] 上升的温度
--

-- @lc code=start
# Write your MySQL query statement below
select
    w.id
from
    Weather w, Weather w1
where
    w.Temperature > w1.Temperature and dateDiff(w.recordDate, w1.recordDate) = 1
-- @lc code=end

