import java.util.ArrayDeque;
import java.util.Deque;
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
    public boolean canFinish(int numCourses, int[][] prerequisites) {
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
        for (Integer i : pres.keySet()) {
            Deque<Integer> deque = new ArrayDeque<>(pres.get(i));
            Set<Integer> ss = new HashSet<>();
            while(!deque.isEmpty()) {
                int d = deque.pop();
                if (ss.contains(d)) {
                    for (int js : pres.get(d)) {
                        if (ss.contains(js)) {
                            return false;
                        }
                    }
                }
                if (pres.containsKey(d)) {
                    ss.add(d);
                    deque.addAll(pres.get(d));
                }
            }
        }
        return true;
    }
}
// @lc code=end

