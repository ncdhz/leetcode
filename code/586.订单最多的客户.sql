--
-- @lc app=leetcode.cn id=586 lang=mysql
--
-- [586] 订单最多的客户
--

-- @lc code=start
# Write your MySQL query statement below
select 
    customer_number
from
    orders
group by
    customer_number
order by
    count(*) desc
limit 1
-- @lc code=end

