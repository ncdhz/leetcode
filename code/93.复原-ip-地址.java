import java.util.ArrayList;
import java.util.List;

/*
 * @lc app=leetcode.cn id=93 lang=java
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
class Solution {
    
    public boolean isIPN(String str) {
        
        if ((str.length() == 1 || str.charAt(0) != '0') && new Integer(str) <= 255) {
            return true;
        }
        return false;
    }
    
    public List<String> restoreIpAddresses(String s) {
        List<String> ips = new ArrayList();
        if (s.length() > 12) {
            return ips;
        }
        for (int i = 0; i < 4; i++) {
            if (i >= s.length() - 3) break; 
            String s1 = s.substring(0, i + 1);
            if (!isIPN(s1)) continue;
            for (int j = i + 1; j < i + 4; j++) {
                if (j >= s.length() - 2) break;
                String s2 = s.substring(i +  1, j + 1);
                if(!isIPN(s2)) continue;
                for (int k = j + 1; k < j + 4; k++) {
                    if (k >= s.length() - 1) break;
                    String s3 = s.substring(j + 1, k + 1);
                    if (!isIPN(s3)) continue;
                    String s4 = s.substring(k + 1, s.length());
                    if (!isIPN(s4)) continue;
                    ips.add(s1 + '.' + s2 + '.' + s3 + '.' + s4);
                }
            }
        }
        return ips;
    }
}
// @lc code=end

