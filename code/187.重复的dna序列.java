import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=187 lang=java
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        Set<String> ss = new HashSet<>();
        Set<String> ms = new HashSet<>();
        for (int i = 10; i <= s.length(); i++) {
            String m = s.substring(i - 10, i);
            if (ms.contains(m)) {
                ss.add(m);
                ms.remove(m);
            } else if (!ss.contains(m)) {
                ms.add(m);
            }
        }
        List<String> rs = Arrays.asList(ss.toArray(new String[0]));
        return rs;
    }
}
// @lc code=end

