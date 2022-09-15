import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=204 lang=java
 *
 * [204] 计数质数
 */

// @lc code=start
class Solution {
    public int countPrimes(int n) {
        if (n < 3) {
            return 0;
        }
        if (n == 3) {
            return 1;
        }
        List<Integer> all = new ArrayList<>();
        all.add(2);
        for (int i = 3; i < n; i += 2) {
            boolean isOk = true;
            for (int j = 0; j < all.size() && all.get(j) * all.get(j) <= i; j++) {
                if (i % all.get(j) == 0) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                all.add(i);
            }
        }
        return all.size();
    }
}
// @lc code=end

