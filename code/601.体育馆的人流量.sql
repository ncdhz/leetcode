--
-- @lc app=leetcode.cn id=601 lang=mysql
--
-- [601] 体育馆的人流量
--

-- @lc code=start
# Write your MySQL query statement below

with t as 
    (select
        case when id = (@p + 1) then
            @x
        else
            @x := @x + 1
        end as n,
        @p := id,
        id
    from 
        Stadium, (select @x := 1, @p := 0) f
    where 
        people >= 100),
t1 as 
    (select 
        id, s 
    from 
        t f1, (select n, count(*) as s from t group by n) f2 
    where 
        f1.n = f2.n)

select 
    Stadium.id, visit_date, people 
from
    Stadium, t1 f3
where
    f3.id = Stadium.id
    and f3.s >= 3
order by
    visit_date;
-- @lc code=end

