--
-- @lc app=leetcode.cn id=184 lang=mysql
--
-- [184] 部门工资最高的员工
--

-- @lc code=start
# Write your MySQL query statement below
-- select dname as Department, name as Employee, Salary 
select e.name Employee, d.name as Department, Salary from Employee e, Department d where departmentId = d.id and (e.departmentId, Salary) in (select departmentId, max(Salary) from Employee group by Employee.departmentId);
-- @lc code=end

