--
-- @lc app=leetcode.cn id=1158 lang=mysql
--
-- [1158] 市场分析 I
--

-- @lc code=start
# Write your MySQL query statement below
select
    u.user_id as buyer_id, join_date, if(isnull(orders_in_2019), 0, orders_in_2019) as orders_in_2019
from
    Users u
left join    
    (select
        count(order_date) as orders_in_2019, buyer_id
    from
        Orders o
    where
        order_date between "2019-01-01" and "2019-12-31"
    group by
        buyer_id) f
on
    u.user_id = buyer_id
-- @lc code=end

