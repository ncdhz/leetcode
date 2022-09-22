import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=207 lang=java
 *
 * [207] 课程表
 */

// @lc code=start
class Solution {

    static Map<Integer, Boolean> isS = new HashMap<>();

    public boolean cF(Map<Integer, Set<Integer>> pres, Integer key, Set<Integer> sets) {
        if (isS.containsKey(key)) {
            return isS.get(key);
        }
        if (!pres.containsKey(key)) {
            isS.put(key, true);
            return true;
        }
        Set<Integer> ps = pres.get(key);
        for (Integer p : ps) {
            if (sets.contains(p)) {
                isS.put(key, false);
                return false;
            }
            sets.add(p);
            if (!cF(pres, p, sets)) {
                return false;
            }
            sets.remove(p);
        }
        isS.put(key, true);
        return true;
    }

    public boolean canFinish(int numCourses, int[][] prerequisites) {
        isS.clear();
        Map<Integer, Set<Integer>> pres = new HashMap<>();
        for (int i = 0; i < prerequisites.length; i++) {
            if (pres.containsKey(prerequisites[i][0])) {
                pres.get(prerequisites[i][0]).add(prerequisites[i][1]);
            } else {
                Set<Integer> ls = new HashSet<>();
                ls.add(prerequisites[i][1]);
                pres.put(prerequisites[i][0], ls);
            }
        }
        for (int i = 0; i < numCourses; i++) {
            if (!cF(pres, i, new HashSet<>())) {
                return false;
            }
        }
        return true;
    }
}
// @lc code=end

