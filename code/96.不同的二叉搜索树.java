import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=96 lang=java
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
class Solution {
    static Map<Integer, Integer> map = new HashMap<>();
    public int nt(int s, int e) {
        int es = (e * 100) + s;
        if (map.containsKey(es)) {
            return map.get(es);
        }
        if (s > e) {
            return 1;
        }
        int a = 0;
        for (int i = s; i <= e; i++) {
            int l = nt(s, i - 1);
            int r = nt(i + 1, e);
            a += (l * r);
        }
        map.put(es, a);
        return a;
    }
    public int numTrees(int n) {
        if (n == 0) {
            return 0;
        }
        return nt(1, n);
    }
}
// @lc code=end

