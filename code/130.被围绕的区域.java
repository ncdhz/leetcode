import java.util.HashSet;
import java.util.Set;

/*
 * @lc app=leetcode.cn id=130 lang=java
 *
 * [130] 被围绕的区域
 */

// @lc code=start
class Solution {

    Set<Integer> all_set = new HashSet<>(); 
    
    public boolean solve(Set<Integer> set, int i, int j, char[][] board) {
        
        if (i < 0 || i >= board.length) {
            return false;
        }

        if (j < 0 || j >= board[i].length) {
            return false;
        }

        if (board[i][j] == 'X') return true;
        
        int s = i * 300 + j;
        
        if (set.contains(s)) {
            return true;
        }

        all_set.add(s);
        set.add(s);
        
        boolean b1 = solve(set, i - 1, j, board);
        boolean b2 = solve(set, i + 1, j, board);
        boolean b3 = solve(set, i, j - 1, board);
        boolean b4 = solve(set, i, j + 1, board);

        return b1 && b2 && b3 && b4;
    }

    public void solve(char[][] board) {
        
        all_set.clear();
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                int s = i * 300 + j;
                if (!all_set.contains(s)) {
                    if (board[i][j] == 'O') {
                        Set<Integer> set = new HashSet<>();
                        boolean b = solve(set, i, j, board);
                        if (b) {
                            for(int ij : set) {
                                board[ij / 300][ij % 300] = 'X';
                            }
                        }
                    }
                    all_set.add(s);
                }
                
            }
        }
    }
}
// @lc code=end

