--
-- @lc app=leetcode.cn id=627 lang=mysql
--
-- [627] 变更性别
--

-- @lc code=start
# Write your MySQL query statement below
update
    Salary
set
    sex = if(sex = "m", "f", "m")
-- @lc code=end

