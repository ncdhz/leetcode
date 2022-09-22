import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=210 lang=java
 *
 * [210] 课程表 II
 */

// @lc code=start
class Solution {
    static Map<Integer, Boolean> isS = new HashMap<>();
    static int ri;
    public boolean fO(Map<Integer, Set<Integer>> pres, Integer key, Set<Integer> sets, int[] rs) {
        
        if (isS.containsKey(key)) {
            return isS.get(key);
        }
        
        for (Integer p: pres.get(key)) {
            if (sets.contains(p)) {
                isS.put(p, false);
                return false;
            }
            sets.add(p);
            if (!fO(pres, p, sets, rs)) {
                return false;
            }
            sets.remove(p);
        }
        
        rs[ri] = key;
        ri--;
        isS.put(key, true);
        return true;
    }

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> pres = new HashMap<>();
        isS.clear();
        for (int i = 0; i < numCourses; i++) {
            pres.put(i, new HashSet<>());
        }
        for (int i = 0; i < prerequisites.length; i++) {
            pres.get(prerequisites[i][1]).add(prerequisites[i][0]);
        }

        int[] rs = new int[numCourses];
        ri = numCourses - 1;
        for (int i = 0; i < numCourses; i++) {
            if (!isS.containsKey(i)) {
                if (!fO(pres, i, new HashSet<>(), rs)) {
                    return new int[0];
                }
            }
        }
        return rs;
    }
}
// @lc code=end

