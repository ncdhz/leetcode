/*
 * @lc app=leetcode.cn id=165 lang=java
 *
 * [165] 比较版本号
 */

// @lc code=start
class Solution {
    
    public int getV(String v) {
        int i = 0;
        while(i < v.length() && v.charAt(i) == '0') i++;
        if (i < v.length()) {
            return Integer.valueOf(v.substring(i));
        }
        return 0;
    }

    public int compareVersion(String version1, String version2) {
        String[] vs1 = version1.split("\\.");
        String[] vs2 = version2.split("\\.");
        int i = 0;
        while (i < vs1.length || i < vs2.length) {
            if (i < vs1.length && i < vs2.length) {
                int v1 = getV(vs1[i]);
                int v2 = getV(vs2[i]);
                if (v1 > v2) {
                    return 1;
                } else if (v2 > v1) {
                    return -1;
                }
            } else if (i < vs1.length) {
                if (getV(vs1[i]) != 0) {
                    return 1;
                }
            } else {
                if (getV(vs2[i]) != 0) {
                    return -1;
                }
            }
            i++;
        }
        return 0;
    }
}
// @lc code=end

