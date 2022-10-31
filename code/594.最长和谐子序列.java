import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=594 lang=java
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
class Solution {
    public int findLHS(int[] nums) {
        Map<Integer, Integer> ns = new HashMap<>();
        for (Integer n: nums) {
            if (ns.containsKey(n)) {
                ns.put(n, ns.get(n) + 1);
            } else {
                ns.put(n, 1);
            }
        }

        int sum = 0;
        for (Integer i: ns.keySet()) {
            if (ns.containsKey(i + 1)) {
                int j = ns.get(i) + ns.get(i + 1);
                if (j > sum) {
                    sum = j;
                }
            }
        }

        return sum;
    }
}
// @lc code=end

