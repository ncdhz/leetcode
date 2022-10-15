--
-- @lc app=leetcode.cn id=626 lang=mysql
--
-- [626] 换座位
--

-- @lc code=start
# Write your MySQL query statement below
select
    if(r % 2 = 1, if(r = @m, id, id + 1), id - 1) as id, student
from
    (select 
        row_number() over(order by id) as r, id, student
    from
        Seat) f, 
    (select
        @m := count(*)
    from
        Seat) f1
order by
    id
-- @lc code=end

