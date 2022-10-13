--
-- @lc app=leetcode.cn id=180 lang=mysql
--
-- [180] 连续出现的数字
--

-- @lc code=start
# Write your MySQL query statement below
select distinct t.Num as ConsecutiveNums from 
(select 
    case @nn when Num then
        @n := @n + 1
    else
        @n := 1
    end as n,
    @nn := Num,
    Num
from Logs a, (select @n := 1, @nn := '') b) as t 
where t.n >= 3;
-- @lc code=end

