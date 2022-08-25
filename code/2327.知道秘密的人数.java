import java.util.ArrayList;

/*
 * @lc app=leetcode.cn id=2327 lang=java
 *
 * [2327] 知道秘密的人数
 */

// @lc code=start
class Solution {

    public int peopleAwareOfSecret(int n, int delay, int forget) {
        int max_ = (int) 1e9 + 7;
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        for (int i = 1; i < n; i++) {
            int s = 0;
            for (int j = list.size() - delay; j >= 0 && j > list.size() - forget; j--) {
                s += list.get(j);
                s %= max_;
            }
            list.add(s);
        }
        int s = 0;
        for (int i = list.size() - 1; i >= 0 && i >= list.size() - forget; i--) {
            s += list.get(i);
            s %= max_;
        }
        return s;
    }
}
// @lc code=end

