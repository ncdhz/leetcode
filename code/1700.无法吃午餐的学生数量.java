/*
 * @lc app=leetcode.cn id=1700 lang=java
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
class Solution {
    public int countStudents(int[] students, int[] sandwiches) {
        int[] sids = new int[2];
        for (int i = 0; i < students.length; i++) {
            sids[students[i]]++;
        }
        for (int i = 0; i < sandwiches.length; i++) {
            if (sandwiches[i] == 0) {
                if (sids[0] == 0) {
                    break;
                }
                sids[0]--;
            } else {
                if (sids[1] == 0) {
                    break;
                }
                sids[1]--;
            }
        }
        return sids[0] + sids[1];
    }
}
// @lc code=end

