--
-- @lc app=leetcode.cn id=262 lang=mysql
--
-- [262] 行程和用户
--

-- @lc code=start
# Write your MySQL query statement below
select
    t.request_at as `Day`,
    round(sum(if(t.status="completed", 0, 1)) / count(t.id), 2) as "Cancellation Rate"
from
    Trips t,
    Users u,
    Users u1
where
    t.request_at between "2013-10-01"
    and "2013-10-03"
    and u.users_id = t.client_id 
    and u.banned = "No"
    and u1.users_id = t.driver_id
    and u1.banned = "No"
group by 
    t.request_at
-- @lc code=end

