import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=784 lang=java
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
class Solution {

    static Map<Integer, List<String>> cache = new HashMap<>();

    public List<String> lCP(char[] s, int i) {

        if (cache.containsKey(i)) {
            return cache.get(i);
        }

        List<String> l = new ArrayList<>();
        
        if (i == s.length) {
            l.add("");
        } else {
            List<String> ls = lCP(s, i + 1);
            for (String ss: ls) {
                if (s[i] >= '0' && s[i] <= '9') {
                    l.add(s[i] + ss);
                } else {
                    l.add(s[i] + ss);
                    l.add((s[i] + "").toUpperCase() + ss);
                }
            }
        }
        cache.put(i, l);
        return l;
    }

    public List<String> letterCasePermutation(String s) {
        cache.clear();
        return lCP(s.toLowerCase().toCharArray(), 0);
    }
}
// @lc code=end

