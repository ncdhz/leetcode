import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=117 lang=java
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */
// @lc code=start
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/
class Solution {
    public Node connect(Node root) {
        
        if (root == null) {
            return null;
        }

        Deque<Node> nodes = new ArrayDeque<>();
        nodes.add(root);

        while (true) {
            Deque<Node> new_nodes = new ArrayDeque<>();
            Node m = null;
            
            while (!nodes.isEmpty()) {
                Node node = nodes.pop();
                node.next = m;
                m = node;

                if (node.right != null) {
                    new_nodes.add(node.right);
                }
                if (node.left != null) {
                    new_nodes.add(node.left);
                }
            }

            nodes = new_nodes;
            if (nodes.isEmpty()) {
                break;
            }
        }

        return root;
    }
}
// @lc code=end

