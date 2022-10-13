--
-- @lc app=leetcode.cn id=177 lang=mysql
--
-- [177] 第N高的薪水
--

-- @lc code=start
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE N_1 int DEFAULT N - 1;
  RETURN (
    # Write your MySQL query statement below.
    select salary from Employee group by salary order by salary desc limit N_1, 1
  );
END
-- @lc code=end

