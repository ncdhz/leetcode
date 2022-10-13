--
-- @lc app=leetcode.cn id=178 lang=mysql
--
-- [178] 分数排名
--

-- @lc code=start
# Write your MySQL query statement below
select Scores.score, `rank` from Scores, (select row_number() over(order by score desc) as `rank`, score from Scores group by score) as s where s.score = Scores.score order by `rank`;
-- @lc code=end

