import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=127 lang=java
 *
 * [127] 单词接龙
 */

// @lc code=start
class Solution {
    
    int idNumber = 0;

    Map<String, Integer> ids = new HashMap<>();

    List<Set<Integer>> edges = new ArrayList<>();

    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        if (!wordList.contains(endWord)) {
            return 0;
        }

        addEdge(beginWord);
        for (String word : wordList) {
            addEdge(word);
        }

        // 从开始节点向终止节点循环
        int[] ss = new int[idNumber];
        Arrays.fill(ss, Integer.MAX_VALUE);
        int beginId = ids.get(beginWord);
        ss[beginId] = 0;
        Queue<Integer> qb = new LinkedList<>();
        qb.add(beginId);

        // 从终止节点向开始节点循环
        int[] es = new int[idNumber];
        Arrays.fill(es, Integer.MAX_VALUE);
        int endId = ids.get(endWord);
        es[endId] = 0;
        Queue<Integer> qe = new LinkedList<>();
        qe.add(endId);

        while (!qb.isEmpty() && !qe.isEmpty()) {
            // 从上往下
            int bs = qb.size();
            for (int i = 0; i < bs; i++) {
                int bid = qb.poll();
                if (es[bid] != Integer.MAX_VALUE) {
                    return (es[bid] + ss[bid]) / 2 + 1;
                }
                for (Integer j: edges.get(bid)) {
                    if (ss[j] == Integer.MAX_VALUE) {
                        ss[j] = ss[bid] + 1;
                        qb.add(j);
                    }
                }
            }

            // 从下往上
            bs = qe.size();
            for (int i = 0; i < bs; i++) {
                int eid = qe.poll();
                if (ss[eid] != Integer.MAX_VALUE) {
                    return (es[eid] + ss[eid]) / 2 + 1;
                }
                for (Integer j: edges.get(eid)) {
                    if (es[j] == Integer.MAX_VALUE) {
                        es[j] = es[eid] + 1;
                        qe.add(j);
                    }
                }
            }
        }
        return 0;
    }

    private void addEdge(String word) {
        int id = getId(word);
        char[] cs = word.toCharArray();
        for (int i = 0; i < word.length(); i++) {
            char tmp = cs[i];
            cs[i] = '_';
            int cid = getId(new String(cs));
            edges.get(id).add(cid);
            edges.get(cid).add(id);
            cs[i] = tmp;
        }
    }

    private int getId(String word) {
        if (!ids.containsKey(word)) {
            ids.put(word, idNumber ++);
            edges.add(new HashSet<>());
        }
        return ids.get(word);
    }

}
// @lc code=end

