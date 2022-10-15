--
-- @lc app=leetcode.cn id=1050 lang=mysql
--
-- [1050] 合作过至少三次的演员和导演
--

-- @lc code=start
# Write your MySQL query statement below
select
    actor_id, director_id
from
    (select
        actor_id, director_id, count(`timestamp`) as c
    from
        ActorDirector
    group by
        actor_id, director_id) f
where
    c >= 3
-- @lc code=end

