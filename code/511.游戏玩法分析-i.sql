--
-- @lc app=leetcode.cn id=511 lang=mysql
--
-- [511] 游戏玩法分析 I
--

-- @lc code=start
# Write your MySQL query statement below
select
    player_id,
    min(event_date) as first_login
from
    Activity
group by
    player_id
-- @lc code=end

