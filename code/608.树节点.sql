--
-- @lc app=leetcode.cn id=608 lang=mysql
--
-- [608] 树节点
--

-- @lc code=start
# Write your MySQL query statement below
select
    tt.id, if(isnull(p_id), "Root", if(isnull(f_id), "Inner", "Leaf")) as `Type`
from 
    (select
        t.id, t.p_id, f.id as f_id
    from
        tree t
    left join
        (select
            id
        from
            tree
        where
            id not in (select ifnull(p_id, -1) from tree)) f
    on
        t.id = f.id) tt;
-- @lc code=end