import java.util.HashMap;
import java.util.Map;

/*
 * @lc app=leetcode.cn id=208 lang=java
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
class Trie {
    Map<Character, Object> root;
    public Trie() {
        root = new HashMap<>();
    }
    
    public void insert(String word) {
        Map<Character, Object> node = root;
        for (int i = 0; i < word.length(); i++) {
            if (!node.containsKey(word.charAt(i))) {
                node.put(word.charAt(i), new HashMap<>());
            }
            node = (Map<Character, Object>) node.get(word.charAt(i));
        }
        node.put(null, null);
    }
    
    public boolean search(String word) {
        Map<Character, Object> node = root;
        for (int i = 0; i < word.length(); i++) {
            if (node.containsKey(word.charAt(i))) {
                node = (Map<Character, Object>) node.get(word.charAt(i));
            } else {
                return false;
            }
        }
        if (node.containsKey(null)) {
            return true;
        }
        return false;
    }
    
    public boolean startsWith(String prefix) {
        Map<Character, Object> node = root;
        for (int i = 0; i < prefix.length(); i++) {
            if (node.containsKey(prefix.charAt(i))) {
                node = (Map<Character, Object>) node.get(prefix.charAt(i));
            } else {
                return false;
            }
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
// @lc code=end

