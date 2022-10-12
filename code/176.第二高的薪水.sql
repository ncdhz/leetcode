--
-- @lc app=leetcode.cn id=176 lang=mysql
--
-- [176] 第二高的薪水
--

-- @lc code=start
# Write your MySQL query statement below
select ifnull((select max(salary) from Employee where salary < (select max(salary) from Employee)), NULL) as SecondHighestSalary;
-- @lc code=end

