--
-- @lc app=leetcode.cn id=1141 lang=mysql
--
-- [1141] 查询近30天活跃用户数
--

-- @lc code=start
# Write your MySQL query statement below
select
    activity_date as `day`, count(`user_id`) as active_users
from
    (select
        activity_date, `user_id`
    from
        Activity
    where
        activity_date between "2019-06-28" and "2019-07-27"
    group by
        `user_id`, activity_date) f
group by
    activity_date
-- @lc code=end

