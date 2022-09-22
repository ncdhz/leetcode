/*
 * @lc app=leetcode.cn id=211 lang=java
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start

class WordDictionary {
    class Trie {
        boolean isEnd = false;
        Trie[] tries = new Trie[26];
    }
    
    private Trie root;

    public WordDictionary() {
        root = new Trie();
    }   
    
    public void addWord(String word) {
        Trie node = root;
        for (char c : word.toCharArray()) {
            int i = c - 'a';
            if (node.tries[i] == null) {
                node.tries[i] = new Trie();
            }
            node = node.tries[i];
        }
        node.isEnd = true;
    }
    
    private boolean search(Trie r, String word) {
        if (word == "") {
            if (r.isEnd)
                return true;
            return false;
        }
        if (word.charAt(0) == '.') {
            boolean rr = false;
            String sb = word.substring(1);
            for (int i = 0; i < r.tries.length; i++) {
                if (r.tries[i] != null)
                    rr |= search(r.tries[i], sb);
            }
            return rr;
        } else {
            int i = word.charAt(0) - 'a';
            if (r.tries[i] == null) {
                return false;
            } else {
                return search(r.tries[i], word.substring(1));
            }
        }
    }

    public boolean search(String word) {
        return search(root, word);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */
// @lc code=end

