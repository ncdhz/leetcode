--
-- @lc app=leetcode.cn id=182 lang=mysql
--
-- [182] 查找重复的电子邮箱
--

-- @lc code=start
# Write your MySQL query statement below
 select Email from  (select count(Email) as n, Email from Person group by Email) t where n > 1;
-- @lc code=end

