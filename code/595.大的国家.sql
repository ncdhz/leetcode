--
-- @lc app=leetcode.cn id=595 lang=mysql
--
-- [595] 大的国家
--

-- @lc code=start
# Write your MySQL query statement below
select
    `name`, `population`, area
from
    World
where
    area >= 3000000
    or population >= 25000000
-- @lc code=end

