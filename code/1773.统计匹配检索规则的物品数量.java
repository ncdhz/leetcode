import java.util.List;

/*
 * @lc app=leetcode.cn id=1773 lang=java
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int ri = 0;
        if (ruleKey.equals("color")) {
            ri = 1;
        } else if (ruleKey.equals("name")) {
            ri = 2;
        }

        int sum = 0;
        for (List<String> l : items) {
            if (l.get(ri).equals(ruleValue)) {
                sum++;
            }
        }
        
        return sum;
    }
}
// @lc code=end

