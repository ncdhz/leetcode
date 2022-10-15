--
-- @lc app=leetcode.cn id=1148 lang=mysql
--
-- [1148] 文章浏览 I
--

-- @lc code=start
# Write your MySQL query statement below
select
    distinct author_id as id
from 
    Views
where
    author_id = viewer_id
order by
    author_id
-- @lc code=end

