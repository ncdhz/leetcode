--
-- @lc app=leetcode.cn id=196 lang=mysql
--
-- [196] 删除重复的电子邮箱
--

-- @lc code=start
# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
delete from
    Person 
where
    id not in (select id from
            (select min(id) as id from Person group by email) t)
-- @lc code=end

