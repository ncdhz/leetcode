import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=904 lang=java
 *
 * [904] 水果成篮
 */

// @lc code=start
class Solution {
    public int totalFruit(int[] fruits) {
        Map<Integer, Integer> ms = new HashMap<>();
        int max = 0;
        int sum = 0;
        int j = 0;
        for (int i = 0; i < fruits.length; i++) {
            int f = 1;
            if (ms.containsKey(fruits[i])) {
                f = ms.get(fruits[i]) + 1;
            } else if (ms.size() == 2){
                while(ms.size() == 2) {
                    int jj = ms.get(fruits[j]) - 1;
                    if (jj != 0) {
                        ms.put(fruits[j], jj);
                    } else {
                        ms.remove(fruits[j]);
                    }
                    j++;
                    sum -= 1;
                }
            }
            ms.put(fruits[i], f);
            sum += 1;
            if (sum > max) {
                max = sum;
            }
        }
        return max; 
    }
}
// @lc code=end

