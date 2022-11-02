import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.lang.model.element.Element;

/*
 * @lc app=leetcode.cn id=599 lang=java
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {

        Map<String, Integer> ss = new HashMap<>();
        for (int i = 0; i < list2.length; i++) {
            ss.put(list2[i], i);
        }

        List<String> rs = new ArrayList<>();
        int m = Integer.MAX_VALUE;
        for (int i = 0; i < list1.length; i++) {
            if (ss.containsKey(list1[i])) {
                int j = ss.get(list1[i]) + i;
                if (j < m) {
                    rs.clear();
                    m = j;
                    
                } else if (j > m) {
                    continue;
                } 
                rs.add(list1[i]);
            }
        }

        return rs.toArray(new String[0]);
    }
}
// @lc code=end

