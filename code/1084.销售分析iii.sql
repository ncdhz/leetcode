--
-- @lc app=leetcode.cn id=1084 lang=mysql
--
-- [1084] 销售分析III
--

-- @lc code=start
# Write your MySQL query statement below
select
    p.product_id, p.product_name
from
    Product p, (select
        product_id, max(sale_date) as max_sale_date,
        min(sale_date) as min_sale_date
    from
        Sales
    group by
        product_id
    ) s
where
    p.product_id = s.product_id
    and min_sale_date between "2019-01-01" and "2019-03-31"
    and max_sale_date between "2019-01-01" and "2019-03-31"
-- @lc code=end

