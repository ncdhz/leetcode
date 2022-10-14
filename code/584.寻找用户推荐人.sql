--
-- @lc app=leetcode.cn id=584 lang=mysql
--
-- [584] 寻找用户推荐人
--

-- @lc code=start
# Write your MySQL query statement below
select
    `name`
from
    customer
where
    isnull(referee_id)
    or referee_id != 2
-- @lc code=end

