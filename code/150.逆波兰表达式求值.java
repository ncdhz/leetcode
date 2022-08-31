import java.util.ArrayDeque;
import java.util.Deque;

/*
 * @lc app=leetcode.cn id=150 lang=java
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
class Solution {
    
    public int evalRPN(String[] tokens) {
        Deque<Integer> deque = new ArrayDeque<>();
        for(String token: tokens) {
            int ss = 0;
            if (token.equals("+") || token.equals("-") || token.equals("*") || token.equals("/")) {
                int y = deque.pop();
                int x = deque.pop();
                if (token.equals("+")) {
                    ss = x + y;
                } else if (token.equals("-")) {
                    ss = x - y;
                } else if (token.equals("*")) {
                    ss = x * y;
                } else {
                    ss = x / y;
                }
            } else {
                ss = Integer.valueOf(token);
            }
            deque.push(ss);
        }
        return deque.pop();
    }
}
// @lc code=end

