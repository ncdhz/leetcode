--
-- @lc app=leetcode.cn id=185 lang=mysql
--
-- [185] 部门工资前三高的所有员工
--

-- @lc code=start
# Write your MySQL query
select
    d.name as Department, e.name as Employee, Salary
from 
    Employee e, Department d
where
    3 > (
        select 
            count(distinct salary) 
        from 
            Employee e1
        where
            e1.salary > e.salary and e1.departmentId = e.departmentId
    ) and e.departmentId = d.id
-- @lc code=end

