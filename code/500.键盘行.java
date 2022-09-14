import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=500 lang=java
 *
 * [500] 键盘行
 */

// @lc code=start
class Solution {
    static Set<Character> s1 = new HashSet<>();
    static Set<Character> s2 = new HashSet<>();
    static Set<Character> s3 = new HashSet<>();

    static {
        for (char c: "qwertyuiop".toCharArray()) {
            s1.add(c);
            s1.add(Character.toUpperCase(c));
        }
        for (char c: "asdfghjkl".toCharArray()) {
            s2.add(c);
            s2.add(Character.toUpperCase(c));
        }
        for (char c: "zxcvbnm".toCharArray()) {
            s3.add(c);
            s3.add(Character.toUpperCase(c));
        }
    }

    public String[] findWords(String[] words) {
        List<String> ss = new ArrayList<>();
        for (String word: words) {
            int i = 0;
            if (s1.contains(word.charAt(0))) {
                i = 0;
            } else if (s2.contains(word.charAt(0))) {
                i = 1;
            } else {
                i = 2;
            }
            boolean is_ok = true;
            for (int j = 1; j < word.length(); j++) {
                if (i == 0) {
                    if (!s1.contains(word.charAt(j))) {
                        is_ok = false;
                        break;
                    }
                } else if (i == 1) {
                    if (!s2.contains(word.charAt(j))) {
                        is_ok = false;
                        break;
                    }
                } else {
                    if (!s3.contains(word.charAt(j))) {
                        is_ok = false;
                        break;
                    }
                }
            }
            if (is_ok) {
                ss.add(word);
            }
        }
        return ss.toArray(new String[0]);
    }
}
// @lc code=end

