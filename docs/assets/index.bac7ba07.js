import{c as F,A as sn,d as W,g as en,r as P,o as L,a as D,w as z,b as X,e as dn,F as Q,f as K,h as q,t as J,u as N,i as nn,j as gn,k as zn,n as jn,E as Fn,C as Cn,m as Z,l as M,p as $n,q as Nn,s as Hn,v as Un,x as Vn,M as Kn,D as Wn,y as Zn,B as Gn,S as Xn,L as Qn,z as Yn,G as Jn,H as ne,I as ee,P as te}from"./ant-design-vue.7f46d128.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const t of d.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();const ie=[`/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] \u4E24\u6570\u4E4B\u548C
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sorted = []
    nums.map((item, index) => {
        sorted.push([item, index])
    })
    sorted.sort((a, b) => {return a[0] - b[0]})
    let i = 0
    let j = sorted.length - 1
    while(true) {
        if (sorted[i][0] + sorted[j][0] === target) {
            return [sorted[i][1], sorted[j][1]]
        } else if (sorted[i][0] + sorted[j][0] > target) {
            j--
        } else {
            i++
        }
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] \u4E24\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i, num in enumerate(nums):
            if hash_map.get(target - num) is not None:
                return [i, hash_map.get(target - num)]
            hash_map[num] = i
# @lc code=end`,`#
# @lc app=leetcode.cn id=10 lang=python3
#
# [10] \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D
#
# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s = ' ' + s
        p = ' ' + p
        matches = [[False] for _ in range(len(s))]
        matches[0][0] = True
        for i in range(len(s)):
            for j in range(1, len(p)):
                if s[i] == p[j] or (p[j] == '.' and s[i] != ' '):
                    matches[i].append(matches[i - 1][j - 1])
                elif p[j] == '*':
                    if matches[i][j - 2]:
                        matches[i].append(True)
                    elif i != 0 and matches[i - 1][j] and (p[j - 1] == s[i] or p[j - 1] == '.'):
                        matches[i].append(True)
                    else:
                        matches[i].append(False)
                else:
                    matches[i].append(False)
        return matches[-1][-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=100 lang=python3
#
# [100] \u76F8\u540C\u7684\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: TreeNode, q: TreeNode) -> bool:
        def same(pp, qq):
            if pp == None and qq == None:
                return True
            elif pp != None and qq != None:
                if pp.val != qq.val:
                    return False
                return same(pp.right, qq.right) and same(pp.left, qq.left)
            else:
                return False
        return same(p, q)
# @lc code=end`,`#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] \u5BF9\u79F0\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        def same(p, q):
            if p is None and q is None:
                return True
            elif p is not None and q is not None:
                if p.val != q.val:
                    return False
                return same(p.left, q.right) and same(p.right, q.left)
            else:
                return False
        return same(root.left, root.right)
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=102 lang=java
 *
 * [102] \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386
 */
import java.util.List;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Tuple{
    public TreeNode treeNode;
    public int i;
    Tuple(TreeNode treeNode, int i) {
        this.treeNode = treeNode;
        this.i = i;
    }
    public int getI() {
        return i;
    }
    public TreeNode getTreeNode() {
        return treeNode;
    }
}
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        Deque<Tuple> deque = new ArrayDeque<>();
        deque.add(new Tuple(root, 1));
        while(!deque.isEmpty()) {
            Tuple tuple = deque.pop();
            TreeNode treeNode = tuple.getTreeNode();
            if (tuple.getI() > result.size()) {
                result.add(new ArrayList<Integer>());
            }
            List r =  result.get(tuple.getI() - 1);
            r.add(treeNode.val);
            if (treeNode.left != null) {
                deque.add(new Tuple(treeNode.left, tuple.getI() + 1));
            }
            if (treeNode.right != null) {
                deque.add(new Tuple(treeNode.right, tuple.getI() + 1));
            }
        }
        return result;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import javax.swing.tree.TreeNode;
/*
 * @lc app=leetcode.cn id=103 lang=java
 *
 * [103] \u4E8C\u53C9\u6811\u7684\u952F\u9F7F\u5F62\u5C42\u5E8F\u904D\u5386
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        boolean is_s = false;
        Deque<TreeNode> d =  new ArrayDeque<>();
        d.push(root);
        while (!d.isEmpty()) {
            Deque<TreeNode> new_d = new ArrayDeque<>();
            List<Integer> r = new ArrayList<>();
            while (!d.isEmpty()) {
                TreeNode treeNode = d.pop();
                if (!is_s) {
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                } else {
                    if (treeNode.right != null) {
                        new_d.push(treeNode.right);
                    }
                    if (treeNode.left != null) {
                        new_d.push(treeNode.left);
                    }
                }
                r.add(treeNode.val);
            } 
            is_s = !is_s;
            result.add(r);
            if (new_d.isEmpty())
                break;
            d = new_d;
        }
        return result;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=104 lang=python3
#
# [104] \u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        max_depth = 0
        def md(r, k):
            nonlocal max_depth
            if r.left == None and r.right == None:
                if k > max_depth:
                    max_depth = k
            if r.left != None:
                md(r.left, k + 1)
            if r.right != None:
                md(r.right, k + 1)
        md(root, 1)
        return max_depth
# @lc code=end`,`#
# @lc app=leetcode.cn id=1044 lang=python3
#
# [1044] \u6700\u957F\u91CD\u590D\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestDupSubstring(self, s: str) -> str:
# @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=105 lang=java
 *
 * [105] \u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder.length == 0) {
            return null;
        }
        TreeNode root = new TreeNode(preorder[0]);
        int i = 0;
        while(preorder[0] != inorder[i]) i++;
        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] lp = Arrays.copyOfRange(preorder, 1, left.length + 1);
        root.left = buildTree(lp, left);
        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] rp = Arrays.copyOfRange(preorder, left.length + 1, preorder.length);
        root.right = buildTree(rp, right);
        return root;
    }
}
// @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=106 lang=java
 *
 * [106] \u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder.length == 0) return null;
        TreeNode root = new TreeNode(postorder[postorder.length - 1]);
        int i = 0;
        while (inorder[i] != postorder[postorder.length - 1]) i++;
        int[] left = Arrays.copyOfRange(inorder, 0, i);
        int[] pl = Arrays.copyOfRange(postorder, 0, i);
        root.left = buildTree(left, pl);
        int[] right = Arrays.copyOfRange(inorder, i + 1, inorder.length);
        int[] pr = Arrays.copyOfRange(postorder, i, postorder.length - 1);
        root.right = buildTree(right, pr);
        return root;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=107 lang=java
 *
 * [107] \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386 II
 */
import javax.swing.tree.TreeNode;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> result = new LinkedList<>();
        if (root == null) {
            return result;
        }
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.add(root);
        while (true) {
            List<Integer> r = new LinkedList<>();
            Deque<TreeNode> new_stack = new ArrayDeque<>();
            while(!stack.isEmpty()) {
                TreeNode treeNode = stack.pop();
                if (treeNode.left != null) {
                    new_stack.add(treeNode.left);
                }
                if (treeNode.right != null) {
                    new_stack.add(treeNode.right);
                }
                r.add(treeNode.val);
            }
            result.add(0, r);
            stack = new_stack;
            if (stack.isEmpty()) {
                break;
            }
        }
        return result;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=108 lang=python3
#
# [108] \u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        nl = len(nums) // 2
        root = TreeNode(nums[nl])
        def sat(r, left, right):
            if len(left) != 0:
                ll = len(left) // 2
                r.left = TreeNode(left[ll])
                sat(r.left, left[:ll], left[ll + 1:])
            if len(right) != 0:
                rl = len(right) // 2
                r.right = TreeNode(right[rl])
                sat(r.right, right[:rl], right[rl + 1:])
        sat(root, nums[:nl], nums[nl+1:])
        return root
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=109 lang=java
 *
 * [109] \u6709\u5E8F\u94FE\u8868\u8F6C\u6362\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sLTBST(ListNode head, int num) {
        System.out.println(num);
        if (num == 0) {
            return null;
        }
        int m = num / 2;
        if (num % 2 == 1) {
            m ++;
        }
        int i = m;
        ListNode hc = head;
        while (--i > 0) hc = hc.next;
        TreeNode root = new TreeNode(hc.val);
        root.left = sLTBST(head, m - 1);
        root.right = sLTBST(hc.next, num - m);
        return root;
    }
    public TreeNode sortedListToBST(ListNode head) {
        if (head == null) {
            return null;
        }
        int i = 0;
        ListNode hc = head;
        while (hc != null) {
            i++;
            hc = hc.next;
        }
        return sLTBST(head, i);
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] \u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668
#
# @lc code=start
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_a = 0
        for i in range(len(height) - 1, 0, -1):
            if height[i] * i < max_a:
                continue
            for j in range(i):
                if height[i] <= height[j]:
                    a = (i - j) * height[i]
                    if a > max_a:
                        max_a = a
                    break
                else:
                    a = (i - j) * height[j]
                    if a > max_a:
                        max_a = a
                if (i - j) * height[i] < max_a:
                    break
        return max_a
# @lc code=end`,`#
# @lc app=leetcode.cn id=110 lang=python3
#
# [110] \u5E73\u8861\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if root is None:
            return True
        is_ok = True
        def balanced(r, k):
            nonlocal is_ok
            if r is None:
                return k
            k1 = balanced(r.left, k + 1)
            k2 = balanced(r.right, k + 1)
            if k1 - k2 > 1 or k2 - k1 > 1:
                is_ok = False
            return max([k1, k2])
        balanced(root, 0)
        return is_ok
# @lc code=end`,`#
# @lc app=leetcode.cn id=111 lang=python3
#
# [111] \u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if root is None:
            return 0
        all_depth = []
        def min_depth(r, k):
            if r.left == None and r.right == None:
                all_depth.append(k)
                return
            if r.left != None:
                min_depth(r.left, k + 1)
            if r.right != None:
                min_depth(r.right, k + 1)
        min_depth(root, 1)
        return min(all_depth)
# @lc code=end`,`#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] \u8DEF\u5F84\u603B\u548C
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        if root is None:
            return False
        def hps(r, sum):
            if r.left is None and r.right is None:
                return sum == targetSum
            left = False
            if r.left is not None:
                left = hps(r.left, sum + r.left.val)
            right = False
            if r.right is not None:
                right = hps(r.right, sum + r.right.val)
            return left or right
        return hps(root, root.val)
# @lc code=end`,`import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
/*
 * @lc app=leetcode.cn id=113 lang=java
 *
 * [113] \u8DEF\u5F84\u603B\u548C II
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private static List<List<Integer>> results = new ArrayList<>();
    public void ps(TreeNode r, List<Integer> rs, int targetSum) {
        rs.add(r.val);
        targetSum -= r.val;
        if (r.left == null && r.right == null) {
            if (targetSum == 0) {
                List<Integer> ar = new ArrayList<Integer>();
                for (Integer integer : rs) {
                    ar.add(integer);
                }
                results.add(ar);
            }
        }
        if (r.left != null) {
            ps(r.left, rs, targetSum);
        }
        if (r.right != null) {
            ps(r.right, rs, targetSum);
        }
        rs.remove(rs.size() - 1);
    }
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        results.clear();
        if (root == null) {
            return results;
        }
        ps(root, new ArrayList<Integer>(), targetSum);
        return results;
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=114 lang=java
 *
 * [114] \u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868
 */
import javax.swing.tree.TreeNode;
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void flatten(TreeNode root) {
        if (root == null) {
            return;
        }
        Deque<TreeNode> stack = new ArrayDeque<>();
        stack.push(root);
        TreeNode f = null;
        while(!stack.isEmpty()) {
            TreeNode treeNode = stack.pop();
            if (treeNode.right != null) {
                stack.push(treeNode.right);
                treeNode.right = null;
            }
            if (treeNode.left != null) {
                stack.push(treeNode.left);
                treeNode.left = null;
            }
            if (f == null) {
                f = treeNode;
            } else {
                f.right = treeNode;
                f = treeNode;
            }
        }
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=115 lang=cpp
 *
 * [115] \u4E0D\u540C\u7684\u5B50\u5E8F\u5217
 */
class Solution {
private:
    unordered_map<string, int> cache;
public:
    int nd(string s, string t, int i, int j) {
        if (j == t.length()) {
            return 1;
        }
        int sum = 0;
        for (size_t k = i; k < s.length() - t.length() + j + 1; k++)
        {
            if (s.at(k) == t.at(j)) {
                string ss = s.substr(k, s.length()) + "-" + t.substr(j, t.length());
                if (cache.count(ss) > 0) {
                    sum += cache[ss];
                    continue;   
                }
                int n = nd(s, t, k + 1, j + 1);
                cache.emplace(ss, n);
                sum += n;
            }
        }
        return sum;
    }
    int numDistinct(string s, string t) {
        cache.clear();
        return nd(s, t, 0, 0);
    }
};
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=116 lang=java
 *
 * [116] \u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488
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
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=117 lang=java
 *
 * [117] \u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488 II
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
// @lc code=end`,`#
# @lc app=leetcode.cn id=118 lang=python3
#
# [118] \u6768\u8F89\u4E09\u89D2
#
# @lc code=start
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        for i in range(numRows):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[i - 1][j - 1] + result[i - 1][j])
            result.append(rm)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=119 lang=python3
#
# [119] \u6768\u8F89\u4E09\u89D2 II
#
# @lc code=start
class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        result = None
        for i in range(rowIndex + 1):
            rm = []
            for j in range(i + 1):
                if j == 0 or j == i:
                    rm.append(1)
                else:
                    rm.append(result[j - 1] + result[j])
            result = rm
        return result     
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=1195 lang=java
 *
 * [1195] \u4EA4\u66FF\u6253\u5370\u5B57\u7B26\u4E32
 */
// @lc code=start
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;
class FizzBuzz {
    private int n;
    private volatile int index;
    public FizzBuzz(int n) {
        this.n = n;
        this.index = 1;
    }
    private final ReentrantLock rLock = new ReentrantLock();
    private final Condition  condition = rLock.newCondition();
    // printFizz.run() outputs "fizz".
    public void fizz(Runnable printFizz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 != 0) {
                printFizz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printBuzz.run() outputs "buzz".
    public void buzz(Runnable printBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 == 0) {
                printBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printFizzBuzz.run() outputs "fizzbuzz".
    public void fizzbuzz(Runnable printFizzBuzz) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 == 0 && this.index % 5 == 0) {
                printFizzBuzz.run();
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
    // printNumber.accept(x) outputs "x", where x is an integer.
    public void number(IntConsumer printNumber) throws InterruptedException {
        rLock.lock();
        while (this.index <= this.n) {
            if (this.index % 3 != 0 && this.index % 5 != 0) {
                printNumber.accept(this.index);
                this.index ++;
                condition.signalAll();
            } else {
                condition.await();
            }
        }
        rLock.unlock();
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=12 lang=python3
#
# [12] \u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57
#
# @lc code=start
class Solution:
    def get_roman(self, n, s, m, e):
        end_str = ''
        if n == 9:
            end_str += (s + e)
        else:
            if n >= 5:
                n = n - 5
                end_str += m
            else:
                if n == 4:
                    end_str += (s + m)
                    n = 0
            for _ in range(n):
                end_str += s 
        return end_str
    def intToRoman(self, num: int) -> str:
        end_str = ''
        m = num // 1000
        for _ in range(m):
            end_str += 'M'
        num = num % 1000
        c = num // 100
        end_str += self.get_roman(c, 'C', 'D', 'M')
        num = num % 100
        x = num // 10
        end_str += self.get_roman(x, 'X', 'L', 'C')
        i = num % 10
        end_str += self.get_roman(i, 'I', 'V', 'X')
        return end_str
# @lc code=end`,`import java.util.Arrays;
import java.util.Collections;
/*
 * @lc app=leetcode.cn id=120 lang=java
 *
 * [120] \u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C
 */
// @lc code=start
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int m = 0;
        for (int i = 1; i < triangle.size(); i++) {
            for (int j = 0; j < triangle.get(i).size(); j++) {
                int ss = triangle.get(i).get(j);
                if (j == 0) {
                    m = triangle.get(i - 1).get(j);
                } else if (j == i) {
                    m = triangle.get(i - 1).get(j - 1);
                } else {
                    m = Integer.min(triangle.get(i - 1).get(j), triangle.get(i - 1).get(j - 1));
                }
                triangle.get(i).set(j, ss + m);
            }
        }
        return Collections.min(triangle.get(triangle.size() - 1));
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A
#
# @lc code=start
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        price = 0
        s = prices[0]
        for p in prices:
            if p - s < 0:
                s = p
            elif p - s > price:
                price = p - s
        return price
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=122 lang=java
 *
 * [122] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II
 */
// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
        int sum = 0;
        int buy = -1;
        for (int i = 0; i < prices.length; i++) {
            if (i < prices.length - 1) {
                if (prices[i] <= prices[i + 1]) {
                    if (buy == -1) {
                        buy = i;
                    }
                } else {
                    if (buy != -1) {
                        sum += (prices[i] - prices[buy]);
                        buy = -1;
                    }
                }
            } else {
                if (buy != -1) {
                    sum += (prices[i] - prices[buy]);
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=123 lang=java
 *
 * [123] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A III
 */
// @lc code=start
class Solution {
    public int maxProfit(int[] prices) {
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] \u9A8C\u8BC1\u56DE\u6587\u4E32
#
# @lc code=start
class Solution:
    def is_char(self, c):
        c = c.lower()
        return not (ord(c) >= ord('0') and ord(c) <= ord('9')) and not (ord(c) >= ord('a') and ord(c) <= ord('z'))
    def isPalindrome(self, s: str) -> bool:
        i = 0
        j = len(s) - 1
        while i < j:
            while i < j and self.is_char(s[i]): 
                i += 1
                continue
            start = s[i].lower()
            while i < j and self.is_char(s[j]): 
                j -= 1
                continue
            end = s[j].lower()
            if start != end:
                return False
            i += 1
            j -= 1
        return True
# @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=128 lang=java
 *
 * [128] \u6700\u957F\u8FDE\u7EED\u5E8F\u5217
 */
// @lc code=start
class Solution {
    public int longestConsecutive(int[] nums) {
        int sum = 0;
        Set<Integer> set = new HashSet<>();
        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if (!set.contains(n)) {
                int s = 1;
                set.add(n);
                for (int j = 1;; j++) {
                    if (set.contains(n + j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                for (int j = 1;; j++) {
                    if (set.contains(n - j)) {
                        s += 1;
                    } else {
                        break;
                    }
                }
                if (s > sum) {
                    sum = s;
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=129 lang=java
 *
 * [129] \u6C42\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u6570\u5B57\u4E4B\u548C
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static int sum = 0;
    public void sn(TreeNode r, int s) {
        s = s * 10 + r.val;
        if (r.left == null && r.right == null) {
            sum += s;
            return;
        }
        if (r.left != null) {
            sn(r.left, s);
        }
        if (r.right != null) {
            sn(r.right, s);
        }
    }
    public int sumNumbers(TreeNode root) {
        sum = 0;
        if (root != null) {
            sn(root, 0);
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=13 lang=python3
#
# [13] \u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570
#
# @lc code=start
class Solution:
    def romanToInt(self, s: str) -> int:
        char_num = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        sum_num = 0
        max_len = len(s)
        sign = False
        for i in range(len(s)):
            if sign:
                sign = False
                continue
            if i + 1 < max_len:
                n1 = char_num[s[i]]
                n2 = char_num[s[i + 1]]
                if n2 / n1 == 10 or n2 / n1 == 5:
                    sum_num = sum_num + char_num[s[i + 1]] - char_num[s[i]]
                    sign = True
                else:
                    sum_num += char_num[s[i]]
            else:
                sum_num += char_num[s[i]]
        return sum_num
# @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=130 lang=java
 *
 * [130] \u88AB\u56F4\u7ED5\u7684\u533A\u57DF
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] \u5206\u5272\u56DE\u6587\u4E32
 */
// @lc code=start
var pn = function(result, r, ss, s, i) {
    if (i >= ss.length) {
        if (s === "") {
            result.push(Object.values(r))
        }
        return
    }
    s += ss[i]
    var is_h = true
    for(var j = 0; j < parseInt(s.length / 2); j++) {
        if (s[j] != s[s.length - 1 - j]) {
            is_h = false
            break
        }
    }
    if (is_h) {
        r.push(s)
        pn(result, r, ss, "", i + 1)
        r.pop()
    }
    pn(result, r, ss, s, i + 1)
}
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    result = []
    pn(result, [], s, "", 0)
    return result
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=132 lang=java
 *
 * [132] \u5206\u5272\u56DE\u6587\u4E32 II
 */
// @lc code=start
class Solution {
    public int minCut(String s) {
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=133 lang=python3
#
# [133] \u514B\u9686\u56FE
#
# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""
class Solution:
    all_node = {}
    def cg(self, node):
        if node.val in self.all_node:
            return self.all_node[node.val]
        root = Node(node.val)
        self.all_node[root.val] = root
        for n in node.neighbors:
            root.neighbors.append(self.cg(n))
        return root
    def cloneGraph(self, node: 'Node') -> 'Node':
        self.all_node.clear()
        if node is None:
            return None
        return self.cg(node) 
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] \u52A0\u6CB9\u7AD9
 */
// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let len = gas.length
    let i = 0 
    while(i < len) {
        if (gas[i] >= cost[i]) {
            let x = gas[i]
            let k = i
            for (let j = 0; j < len; j++) {
                let c = cost[(i + j) % len]
                if (x < c) {
                    i = i + j
                    break
                }  
                x = x + gas[(i + j + 1) % len] - c
            }
            if (i == k) {
                return i
            }
        }
        i += 1
    }
    return -1
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=135 lang=java
 *
 * [135] \u5206\u53D1\u7CD6\u679C
 */
// @lc code=start
class Solution {
    public int candy(int[] ratings) {
        int min = 0;
        for (int i = 1; i < ratings.length; i++) {
            if (ratings[i] < ratings[min]) {
                min = i;
            }
        }
        int[] rs = new int[ratings.length];
        rs[min] = 1;
        for (int i = min - 1; i >= 0 ; i--) {
            if (ratings[i] > ratings[i + 1]) {
                rs[i] =rs[i + 1] + 1;
            } else if (rs[i + 1] > 1 || ratings[i + 1] == ratings[i]){
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i + j] += 1;
                    if (rs[i + j] < rs[i + j + 1] || ratings[i + j] >= ratings[i + j + 1]) {
                        break;
                    }   
                }
                rs[i] = 1;
            }
        }
        for (int i = min + 1; i < ratings.length; i++) {
            if (ratings[i] > ratings[i - 1]) {
                rs[i] = rs[i - 1] + 1;
            } else if (rs[i - 1] > 1 || ratings[i - 1] == ratings[i]) {
                rs[i] = 1;
            } else {
                for (int j = 1;; j++) {
                    rs[i - j] += 1;
                    if (rs[i - j - 1] > rs[i - j] || ratings[i - j - 1] <= ratings[i - j]) {
                        break;
                    }
                }
                rs[i] = 1;
            }
        }
        int sum = 0;
        for (int r: rs) {
            sum += r;
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=136 lang=python3
#
# [136] \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57
#
# @lc code=start
class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        n = nums[0]
        for i in range(1, len(nums)):
            n ^= nums[i]
        return n
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 II
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let r = 0
    for (let i = 0; i < 32; i++) { 
        let k = 0
        for (let j = 0; j < nums.length; j++) {
            k += (nums[j] >> i) & 1
        }
        r += (k % 3) << i
    }
    return r
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=138 lang=python3
#
# [138] \u590D\u5236\u5E26\u968F\u673A\u6307\u9488\u7684\u94FE\u8868
#
# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""
from lib2to3.pytree import Node
class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        hc = head
        while hc != None:
            n = Node(hc.val)
            n.next = hc.next
            hc.next = n
            hc = hc.next.next
        hc = head
        while hc != None:
            if hc.random != None:
                hc.next.random = hc.random.next
            hc = hc.next.next
        end = None
        start = None
        hc = head 
        while hc != None:
            if start == None:
                start = hc.next
            else:
                end.next = hc.next
            end = hc.next
            hc = hc.next.next
        return start
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] \u5355\u8BCD\u62C6\u5206
 */
// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let cache = {}
var wB = function(s, wD) {
    if (s === '') {
        return true
    }
    for (let i = 0; i < s.length; i++) {
        if (wD[s.substring(0, i + 1)] !== undefined) {
            if (cache[s.length - i - 1] !== undefined) {
                continue
            }
            let rb = wB(s.substring(i + 1, s.length), wD)
            cache[s.length - i - 1] = rb
            if (rb) {
                return true
            }
        }
    }
    return false
}
var wordBreak = function(s, wordDict) {
    cache = {}
    let wD = {}
    for (let w of wordDict) {
        wD[w] = 0
    }
    return wB(s, wD)
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=14 lang=python3
#
# [14] \u6700\u957F\u516C\u5171\u524D\u7F00
#
# @lc code=start
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        end_str = ''
        min_len = len(strs[0])
        for s in strs:
            if len(s) < min_len:
                min_len = len(s)
        for i in range(min_len):
            c = strs[0][i]
            for s in strs:
                if s[i] != c:
                    return end_str
            end_str += c
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] \u73AF\u5F62\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        mid_result = []
        while head != None:
            if head in mid_result:
                return True
            mid_result.append(head)
            head = head.next
        return False
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] \u73AF\u5F62\u94FE\u8868 II
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while (true) {
        if (fast === null || fast.next === null) {
            return null
        }
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            break
        }
    }
    fast = head
    while (fast != slow) {
        fast = fast.next
        slow = slow.next
    }
    return fast
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] \u91CD\u6392\u94FE\u8868
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let nodes = []
    while (head !== null) {
        nodes.push(head)
        head = head.next
    } 
    head = nodes[0]
    let node = new ListNode(1, undefined)
    for (let i = 0; i < parseInt(nodes.length / 2); i++) {
        node.next = nodes[i]
        node = node.next
        node.next = nodes[nodes.length - 1 - i]
        node = node.next
    }
    if (nodes.length % 2 === 1) {
        node.next = nodes[parseInt(nodes.length / 2)]
        node = node.next
    }
    node.next = null
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] \u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def pt(r):
            if r is None:
                return
            result.append(r.val)
            pt(r.left)
            pt(r.right)
        pt(root)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=145 lang=python3
#
# [145] \u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def pt(r):
            if r is None:
                return
            pt(r.left)
            pt(r.right)
            result.append(r.val)
        pt(root)
        return result
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU \u7F13\u5B58
 */
// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = {}
    this.cache_list = []
    this.capacity = capacity
    this.i = 0
};
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let r = this.cache[key]
    if (r === undefined) {
        return -1
    } else {
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    }
    return r
};
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let r = this.get(key)
    if (r !== -1) {
        this.cache[key] = value
        this.cache_list.splice(this.cache_list.indexOf(key), 1)
        this.cache_list.push(key)
    } else {
        this.i += 1
        if (this.i > this.capacity) {
            let x = this.cache_list.shift()
            delete this.cache[x]
            this.i = this.capacity
        } 
        this.cache[key] = value
        this.cache_list.push(key)
    }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=147 lang=java
 *
 * [147] \u5BF9\u94FE\u8868\u8FDB\u884C\u63D2\u5165\u6392\u5E8F
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode insertionSortList(ListNode head) {
        ListNode root = new ListNode();
        ListNode first = root;
        while (head != null) {
            ListNode r = head;
            head = head.next;
            while (first != null) {
                if (first.next == null || first.next.val > r.val) {
                    r.next = first.next;
                    first.next = r;
                    first = root;
                    break;
                }
                first = first.next;
            }
        }
        return root.next;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=148 lang=java
 *
 * [148] \u6392\u5E8F\u94FE\u8868
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode sortList(ListNode head) {
        if (head == null) {
            return head;
        }
        int nodeLen = 0;
        ListNode node = head;
        while (node != null) {
            nodeLen += 1;
            node = node.next;
        }
        ListNode temp = new ListNode(0, head);
        for (int i = 1; i < nodeLen; i <<= 1) {
            ListNode pre = temp;
            ListNode m = temp.next;
            while(m != null) {
                ListNode head1 = m;
                for (int j = 1; j < i && m != null; j ++) {
                    m = m.next;
                }
                ListNode head2 = null;
                if (m != null) {
                    head2 = m.next;
                    m.next = null;
                    m = head2;
                    for (int j = 1; j < i && m != null; j ++) {
                        m = m.next;
                    }
                }
                if (m != null) {
                    ListNode next = m;
                    m = m.next;
                    next.next = null;
                }
                ListNode n = mergeList(head1, head2);
                pre.next = n.next;
                pre = n;
                n.next = null;
            }
        }
        return temp.next;
    }
    public ListNode mergeList(ListNode head1, ListNode head2) {
        ListNode root = new ListNode();
        ListNode temp = root;
        while(head1 != null && head2 != null) {
            if (head1.val <= head2.val) {
                temp.next = head1;
                temp = head1;
                head1 = head1.next;
            } else {
                temp.next = head2;
                temp = head2;
                head2 = head2.next;
            }
        }
        if (head1 != null) {
            temp.next = head1;
        } else {
            temp.next = head2;
        }
        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = root.next;
        return temp;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] \u4E09\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        if len(nums) < 3:
            return []
        nums = sorted(nums)
        result = []
        ni = None
        for i, n in enumerate(nums):
            if n == ni:
                continue
            ni = n
            k = len(nums) - 1
            j = i + 1
            while j < k:
                while nums[k] + n + nums[j] >= 0 and k > j:
                    if nums[k] + n + nums[j] == 0 and (k == len(nums) - 1 or nums[k] != nums[k + 1]):
                        result.append([n, nums[j], nums[k]])
                    k -= 1
                j += 1
        return result
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=150 lang=java
 *
 * [150] \u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=151 lang=java
 *
 * [151] \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD
 */
// @lc code=start
class Solution {
    public String reverseWords(String s) {
        String result = "";
        String rs =  "";
        for (char ss: s.toCharArray()) {
            if (ss != ' ') {
                rs += ss;
            } else if (!rs.equals("")) {
                result = rs + " " + result;
                rs = "";
            }
        }
        if (!rs.equals("")) {
            result = rs + " " + result;
        }
        return result.substring(0, result.length() - 1);
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=152 lang=java
 *
 * [152] \u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public int maxProduct(int[] nums) {
        int min_ = nums[0];
        int max_ = nums[0];
        int resule = max_;
        for(int i = 1; i < nums.length ; i++) {
            int l = nums[i];
            int m = l * max_;
            int n = l * min_;
            max_ = l > m ? l > n ? l : n : m > n ? m : n;
            resule = resule > max_ ? resule : max_;
            min_ = l > m ? m > n ? n : m : l > n ? n : l;
        }
        return resule;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=153 lang=java
 *
 * [153] \u5BFB\u627E\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C
 */
// @lc code=start
class Solution {
    public int findMin(int[] nums) {
        int s = 0;
        int e = nums.length - 1;
        while (s < e) {
            int m = (s + e) / 2;
            if (nums[m] < nums[(m + 1) % nums.length] && nums[m] < nums[(m - 1 + nums.length) % nums.length]) {
                break;
            }
            if (nums[e] > nums[s]) {
                e = s;
                break;
            }  else {
                if (nums[m] < nums[e]) {
                    e = m - 1;
                } else {
                    s = m + 1;
                }
            }
        }
        return nums[(s + e) / 2];
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=155 lang=python3
#
# [155] \u6700\u5C0F\u6808
#
# @lc code=start
class MinStack:
    def __init__(self):
        self.stack = []
    def push(self, val: int) -> None:
        if len(self.stack) == 0:
            self.stack.append((val, val))
        else:
            self.stack.append((val, min(self.getMin(), val)))
    def pop(self) -> None:
        return self.stack.pop()[0]
    def top(self) -> int:
        return self.stack[-1][0]
    def getMin(self) -> int:
        return self.stack[- 1][1]
# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
# @lc code=end`,`#
# @lc app=leetcode.cn id=16 lang=python3
#
# [16] \u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums = sorted(nums)
        min_r = float('inf')
        min_s = None
        for i, n in enumerate(nums):
            j = i + 1
            k = len(nums) - 1
            while j < k:
                while k > j and (nums[k] + n + nums[j] > target) :
                    k -= 1
                if k < (len(nums) - 1):
                    mid = nums[k + 1] + n + nums[j]
                    if mid - target < min_r:
                        min_r = mid - target
                        min_s = mid
                if k == j:
                    break
                mid = nums[k] + n + nums[j]
                if target - mid< min_r:
                    min_r = target - mid
                    min_s = mid
                if min_r == 0:
                    return target
                j += 1
        return min_s
# @lc code=end`,`#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] \u76F8\u4EA4\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        ha = []
        while headA is not None:
            ha.append(headA)
            headA = headA.next
        while headB is not None:
            if headB in ha:
                return headB
            headB = headB.next
        return None
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=162 lang=java
 *
 * [162] \u5BFB\u627E\u5CF0\u503C
 */
// @lc code=start
class Solution {
    public int findPeakElement(int[] nums) {
        if (nums.length == 1) {
            return 0;
        } else {
            if (nums[0] > nums[1]) {
                return 0;
            } else if (nums[nums.length - 1] > nums[nums.length - 2]) {
                return nums.length - 1;
            }
        }
        int s = 1, e = nums.length - 2;
        while(s < e) {
            int m = (s + e) / 2;
            if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
                return m;
            } 
            if (nums[m] < nums[m + 1]) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
        return s;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=1624 lang=python3
#
# [1624] \u4E24\u4E2A\u76F8\u540C\u5B57\u7B26\u4E4B\u95F4\u7684\u6700\u957F\u5B50\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=165 lang=java
 *
 * [165] \u6BD4\u8F83\u7248\u672C\u53F7
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
        String[] vs1 = version1.split("\\\\.");
        String[] vs2 = version2.split("\\\\.");
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=166 lang=cpp
 *
 * [166] \u5206\u6570\u5230\u5C0F\u6570
 */
#include <string>
#include <vector>
#include <map>
using namespace std;
// @lc code=start
class Solution {
public:
    string fractionToDecimal(int numerator, int denominator) {
        int symbol = 1;
        string integer;
        string x;
        long numeratorLong = numerator;
        long denominatorLong = denominator;
        if (numeratorLong % denominatorLong == 0) {
            return to_string(numeratorLong / denominatorLong);
        }
        if (numeratorLong < 0) {
            symbol *= -1;
        }
        if (denominatorLong < 0) {
            symbol *= -1;
        }
        numeratorLong = abs(numeratorLong);
        denominatorLong = abs(denominatorLong);
        integer += to_string(numeratorLong / denominatorLong);
        numeratorLong %= denominatorLong;
        string decimal;
        vector<int> vs;
        bool is_c = false;
        int i = 0;
        while (numeratorLong != 0) {
            numeratorLong *= 10;
            x = to_string(numeratorLong / denominatorLong);
            numeratorLong %= denominatorLong;
            for (i = 0; i < vs.size(); i++)
            {
                if (decimal.at(i) == x.at(0) && vs[i] == numeratorLong) {
                    is_c = true;
                    break;
                }
            }
            if (is_c) {
                break;
            }
            vs.push_back(numeratorLong);
            decimal += x;
        }
        if (is_c) {
            decimal = decimal.substr(0, i) + "(" + decimal.substr(i) + ")";
        }
        return (symbol == -1 ? "-": "") + integer + "." + decimal;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=167 lang=cpp
 *
 * [167] \u4E24\u6570\u4E4B\u548C II - \u8F93\u5165\u6709\u5E8F\u6570\u7EC4
 */
#include<vector>
using namespace std;
// @lc code=start
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int j = numbers.size() - 1;
        int i = 0;
        for (;i < j;) {
            if (numbers[i] + numbers[j] > target) {
                j--;
            } else if (numbers[i] + numbers[j] < target) {
                i++;
            } else {
                break;
            }
        }
        vector<int> v;
        v.push_back(i + 1);
        v.push_back(j + 1);
        return v;
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=168 lang=python3
#
# [168] Excel\u8868\u5217\u540D\u79F0
#
# @lc code=start
class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        while columnNumber != 0:
            c = columnNumber % 26   
            if c == 0:
                result.insert(0, 'Z')
                columnNumber -= 1
            else:
                result.insert(0, chr(ord('A') + (c - 1)))
            columnNumber = columnNumber // 26
        return ''.join(result)
# @lc code=end`,`#
# @lc app=leetcode.cn id=169 lang=python3
#
# [169] \u591A\u6570\u5143\u7D20
#
# @lc code=start
class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        nums = sorted(nums)
        return nums[len(nums) // 2]
# @lc code=end`,`#
# @lc app=leetcode.cn id=17 lang=python3
#
# [17] \u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408
#
# @lc code=start
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        all_r = []
        if len(digits) == 0:
            return all_r
        num2letter = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz'
        }
        def x(s):
            if len(s) == len(digits):
                all_r.append(s)
                return
            letter = num2letter[digits[len(s)]]
            for c in letter:
                x(s + c)
        x('')
        return all_r 
# @lc code=end`,`#
# @lc app=leetcode.cn id=171 lang=python3
#
# [171] Excel \u8868\u5217\u5E8F\u53F7
#
# @lc code=start
class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum_ = 0
        j = 1
        for i in range(len(columnTitle) - 1, -1, -1):
            sum_ += (ord(columnTitle[i]) - ord('A') + 1) * j
            j *= 26
        return sum_
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=172 lang=cpp
 *
 * [172] \u9636\u4E58\u540E\u7684\u96F6
 */
// @lc code=start
class Solution {
public:
    int trailingZeroes(int n) {
        int sum = 0;
        while (n != 0) {
            n /= 5;
            sum += n;
        }
        return sum;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=173 lang=cpp
 *
 * [173] \u4E8C\u53C9\u641C\u7D22\u6811\u8FED\u4EE3\u5668
 */
#include <list>
using namespace std;
// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class BSTIterator {
public:
    list<TreeNode*> nodes;
    int i = 0;
    BSTIterator(TreeNode* root) {
        nodes.clear();
        md(root);
    }
    void md(TreeNode* root) {
        while (root != nullptr) {
            nodes.push_back(root);
            root = root->left;
        }
    }
    int next() {
        TreeNode* node = nodes.back();
        nodes.pop_back();
        if (node->right != nullptr) {
            md(node->right);
        }
        return node->val;
    }
    bool hasNext() {
        return nodes.size() > 0;
    }
};
/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator* obj = new BSTIterator(root);
 * int param_1 = obj->next();
 * bool param_2 = obj->hasNext();
 */
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=179 lang=cpp
 *
 * [179] \u6700\u5927\u6570
 */
#include <string>
#include <algorithm>
#include <sstream>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    string largestNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end(), [](int x, int y) {
            long sx = 10;
            long sy = 10;
            while (sx <= x) {
                sx *= 10;
            }
            while (sy <= y) {
                sy *= 10;
            }
            return sy * x + y > sx * y + x;
        });
        if (nums[0] == 0) {
            return "0";
        }
        stringstream ss;
        for (int num: nums) {
            ss << to_string(num);
        }
        return ss.str();
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=18 lang=python3
#
# [18] \u56DB\u6570\u4E4B\u548C
#
# @lc code=start
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        if len(nums) < 4:
            return []
        all_r = []
        nums = sorted(nums)
        en = None
        for i, n in enumerate(nums):
            if n == en:
                continue
            en = n
            enn = None
            for j in range(i + 1, len(nums) - 2):
                if nums[j] == enn:
                    continue
                enn = nums[j]
                k = j + 1
                m = len(nums) - 1
                while k < m:
                    rt = (n + nums[j] + nums[k] + nums[m])
                    while m > k and rt >= target:
                        if rt == target and ((m == len(nums) - 1) or nums[m] != nums[m + 1]):
                            all_r.append([n, nums[j], nums[k], nums[m]])
                        m -= 1
                        rt = (n + nums[j] + nums[k] + nums[m])
                    k += 1
        return all_r
# @lc code=end`,`import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=187 lang=java
 *
 * [187] \u91CD\u590D\u7684DNA\u5E8F\u5217
 */
// @lc code=start
class Solution {
    public List<String> findRepeatedDnaSequences(String s) {
        Set<String> ss = new HashSet<>();
        Set<String> ms = new HashSet<>();
        for (int i = 10; i <= s.length(); i++) {
            String m = s.substring(i - 10, i);
            if (ms.contains(m)) {
                ss.add(m);
                ms.remove(m);
            } else if (!ss.contains(m)) {
                ms.add(m);
            }
        }
        List<String> rs = Arrays.asList(ss.toArray(new String[0]));
        return rs;
    }
}
// @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=189 lang=java
 *
 * [189] \u8F6E\u8F6C\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        int i = 0;
        int r = nums[0];
        int m = 0;
        int j = 0;
        Set<Integer> ss = new HashSet<>();
        ss.add(0);
        while(j < nums.length) {
            i = (i + k) % nums.length;
            m = nums[i];
            nums[i] = r;
            r = m;
            j++;
            if (ss.contains(i) && j < nums.length) {
                i++;
                r = nums[i];
                ss.add(i);
                continue;
            } 
            ss.add(i);
        }
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] \u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C N \u4E2A\u7ED3\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        l = [head]
        r = head
        while r.next is not None:
            l.append(r.next)
            r = r.next
        i = len(l) - n
        if i == 0:
            return head.next
        l[i-1].next = l[i].next
        return head
# @lc code=end`,`#
# @lc app=leetcode.cn id=190 lang=python3
#
# [190] \u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D
#
# @lc code=start
class Solution:
    def reverseBits(self, n: int) -> int:
        sum_ = 0
        for i in range(32):
            sum_ |= ((n & 1) << (31 - i))
            n >>= 1
        return sum_
# @lc code=end`,`#
# @lc app=leetcode.cn id=191 lang=python3
#
# [191] \u4F4D1\u7684\u4E2A\u6570
#
# @lc code=start
class Solution:
    def hammingWeight(self, n: int) -> int:
        num = 0
        while n != 0:
            if n & 1:
                num += 1
            n >>= 1
        return num
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=198 lang=java
 *
 * [198] \u6253\u5BB6\u52AB\u820D
 */
// @lc code=start
class Solution {
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        if (nums.length == 2) {
            return Math.max(nums[0], nums[1]);
        }
        int a = nums[0];
        int b = nums[1];
        for (int i = 2; i < nums.length; i++) {
            int d = a + nums[i];
            a = Math.max(a, b);
            b = d;
        }
        return Math.max(a, b);
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
/*
 * @lc app=leetcode.cn id=199 lang=java
 *
 * [199] \u4E8C\u53C9\u6811\u7684\u53F3\u89C6\u56FE
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> rs = new ArrayList<>();
        if (root == null) {
            return rs;
        }
        Deque<TreeNode> ds = new ArrayDeque<>();
        ds.add(root);
        while (!ds.isEmpty()) {
            rs.add(ds.getLast().val);
            Deque<TreeNode> newDs = new ArrayDeque<>(); 
            while(!ds.isEmpty()) {
                TreeNode node = ds.pop();
                if (node.left != null) {
                    newDs.add(node.left);
                }
                if (node.right != null) {
                    newDs.add(node.right);
                }
            }
            ds = newDs;
        }
        return rs;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=2 lang=cpp
 *
 * [2] \u4E24\u6570\u76F8\u52A0
 */
// @lc code=start
// Definition for singly-linked list.
// struct ListNode {
//     int val;
//     ListNode *next;
//     ListNode() : val(0), next(nullptr) {}
//     ListNode(int x) : val(x), next(nullptr) {}
//     ListNode(int x, ListNode *next) : val(x), next(next) {}
// };
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* root = new ListNode();
        ListNode* first = root;
        int carry = 0;
        while (l1 != nullptr &&  l2 != nullptr) {
            int val = l1->val + l2->val + carry;
            first->next = new ListNode(val % 10);
            first = first->next;
            carry = val / 10;
            l1 = l1->next;
            l2 = l2->next;
        }
        ListNode * tmp = l1;
        if (l2 != nullptr) {
            tmp = l2;
        }
        while (tmp != nullptr) {
            int val = tmp->val + carry;
            first->next = new ListNode(val % 10);
            first = first->next;
            carry = val / 10;
            if (carry == 0) {
                first->next = tmp->next;
                break;
            }
            tmp = tmp->next;
        }
        if (carry != 0) {
            first->next = new ListNode(carry);
        }
        return root->next;
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] \u4E24\u6570\u76F8\u52A0
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        root = ListNode()
        f = root
        carry = 0
        while l1 is not None and l2 is not None: 
            val = l1.val + l2.val + carry
            carry = val // 10
            val = val % 10
            f.next = ListNode(val=val)
            f = f.next
            l1 = l1.next
            l2 = l2.next
        l3 = None
        if l1 is not None:
            l3 = l1 
        if l2 is not None:
            l3 = l2
        if carry > 0:
            if l3 is not None:
                while l3 is not None and carry != 0:
                    val = l3.val + carry
                    carry = val // 10
                    val = val % 10
                    f.next = ListNode(val=val)
                    f = f.next
                    l3 = l3.next
                if l3 is None and carry != 0:
                    f.next = ListNode(val=carry)
                else:
                    f.next = l3
            else:
                f.next = ListNode(val=carry)
        else:
            f.next = l3
        return root.next
# @lc code=end`,`#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] \u6709\u6548\u7684\u62EC\u53F7
#
# @lc code=start
class Solution:
    true_symbol = ['(', '[', '{']
    false_symbol = [')', ']', '}']
    obj_symbol = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    def isValid(self, s: str) -> bool:
        symbol = []
        for ss in s:
            if ss in Solution.true_symbol:
                symbol.append(ss)
            if ss in Solution.false_symbol:
                if len(symbol) == 0:
                    return False
                if Solution.obj_symbol[ss] != symbol.pop():
                    return False
        return len(symbol) == 0
# @lc code=end`,`import java.util.HashSet;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=200 lang=java
 *
 * [200] \u5C9B\u5C7F\u6570\u91CF
 */
// @lc code=start
class Solution {
    Set<Integer> ss = new HashSet<>();
    public void ni(char[][] grid, int i, int j) {
        ss.add(getKey(i, j));
        if (i > 0 && grid[i - 1][j] == '1' && !ss.contains(getKey(i - 1, j))) {
            ni(grid, i - 1, j);
        }
        if (i < grid.length - 1 && grid[i + 1][j] == '1' && !ss.contains(getKey(i + 1, j))) {
            ni(grid, i + 1, j);
        }
        if (j > 0 && grid[i][j - 1] == '1' && !ss.contains(getKey(i, j - 1))) {
            ni(grid, i, j - 1);
        }
        if (j < grid[0].length - 1 && grid[i][j + 1] == '1' && !ss.contains(getKey(i, j + 1))) {
            ni(grid, i, j + 1);
        }
    }
    public int getKey(int i, int j) {
        return i * 1000 + j;
    }
    public int numIslands(char[][] grid) {
        ss.clear();
        int sum = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[i].length; j++) {
                if (grid[i][j] == '1' && !ss.contains(getKey(i, j))) {
                    ni(grid, i, j);
                    sum += 1;
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=201 lang=java
 *
 * [201] \u6570\u5B57\u8303\u56F4\u6309\u4F4D\u4E0E
 */
// @lc code=start
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        if (right == left) return left;
        int rl = right - left - 1;
        int sum = 0;
        int i = 0;
        for (int j = 0; j < 32; j++) {
            if ((rl >> j & 1) == 1) {
                i = j;
            }
        }
        i++;
        for (; i < 32; i++) {
            if ((left >> i & 1) == 1 && (right >> i & 1) == 1) {
                sum += Math.pow(2, i);
            }
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=202 lang=python3
#
# [202] \u5FEB\u4E50\u6570
#
# @lc code=start
class Solution:
    def isHappy(self, n: int) -> bool:
        result = []
        def happy_sum(nn):
            sum_ = 0
            while nn != 0:
                x = nn % 10
                sum_ += x * x
                nn = nn // 10
            return sum_
        x = happy_sum(n)
        while x != 1:
            if x in result:
                return False
            result.append(x)
            x = happy_sum(x)
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=203 lang=python3
#
# [203] \u79FB\u9664\u94FE\u8868\u5143\u7D20
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: ListNode, val: int) -> ListNode:
        if head is None:
            return head
        root = ListNode(next=head)
        start = root
        run = head
        while run != None:
            if run.val == val:
                start.next = run.next
                run = run.next
            else:
                start = run
                run = run.next
        return root.next
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=204 lang=cpp
 *
 * [204] \u8BA1\u6570\u8D28\u6570
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int countPrimes(int n) {
        vector<int> prime;
        vector<int> isPrime(n, 1);
        for (size_t i = 2; i < n; i++) {
            if (isPrime[i]) {
                prime.push_back(i);
            }
            for (size_t j = 0; j < prime.size() && i * prime[j] < n; j++) {
                isPrime[i * prime[j]] = 0;
                if (i % prime[j] == 0) {
                    break;
                }
            }
        }
        return prime.size();
    }
};
// @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=204 lang=java
 *
 * [204] \u8BA1\u6570\u8D28\u6570
 */
// @lc code=start
class Solution {
    public int countPrimes(int n) {
        if (n < 3) {
            return 0;
        }
        if (n == 3) {
            return 1;
        }
        List<Integer> all = new ArrayList<>();
        all.add(2);
        for (int i = 3; i < n; i += 2) {
            boolean isOk = true;
            for (int j = 0; j < all.size() && all.get(j) * all.get(j) <= i; j++) {
                if (i % all.get(j) == 0) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                all.add(i);
            }
        }
        return all.size();
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=205 lang=python3
#
# [205] \u540C\u6784\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        table_s_t = {}
        table_t_s = {}
        for i, ss in enumerate(s):
            tt = t[i]
            if ss in table_s_t:
                if tt != table_s_t[ss]:
                    return False
            elif tt in table_t_s:
                if ss != table_t_s[tt]:
                    return False
            else:
                table_s_t[ss] = tt
                table_t_s[tt] = ss
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] \u53CD\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head == None:
            return head
        start = None
        end = None
        def r(h):
            nonlocal start, end
            if h == None:
                return None
            rr = r(h.next)
            if rr != None:
                if start == None:
                    start = rr
                else:
                    end.next = rr 
                end = rr 
            return h
        h = r(head)
        if start == None:
            return head
        end.next = h
        h.next = None
        return start
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=207 lang=java
 *
 * [207] \u8BFE\u7A0B\u8868
 */
// @lc code=start
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> pres = new HashMap<>();
        for (int i = 0; i < prerequisites.length; i++) {
            if (pres.containsKey(prerequisites[i][0])) {
                pres.get(prerequisites[i][0]).add(prerequisites[i][1]);
            } else {
                Set<Integer> ls = new HashSet<>();
                ls.add(prerequisites[i][1]);
                pres.put(prerequisites[i][0], ls);
            }
        }
        for (Integer i : pres.keySet()) {
            Deque<Integer> deque = new ArrayDeque<>(pres.get(i));
            Set<Integer> ss = new HashSet<>();
            while(!deque.isEmpty()) {
                int d = deque.pop();
                if (ss.contains(d)) {
                    for (int js : pres.get(d)) {
                        if (ss.contains(js)) {
                            return false;
                        }
                    }
                }
                if (pres.containsKey(d)) {
                    ss.add(d);
                    deque.addAll(pres.get(d));
                }
            }
        }
        return true;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if list1 is None:
            return list2
        if list2 is None:
            return list1
        start, end = None, None
        while list1 is not None and list2 is not None:
            if list1.val <= list2.val:
                l1 = list1.next
                if start is None:
                    start = list1
                else:
                    end.next = list1
                end = list1
                end.next = None
                list1 = l1
            else:
                l2 = list2.next
                if start is None:
                    start = list2
                else:
                    end.next = list2
                end = list2
                end.next = None
                list2 = l2
        if list1 is not None:
            end.next = list1
        if list2 is not None:
            end.next = list2
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=217 lang=python3
#
# [217] \u5B58\u5728\u91CD\u590D\u5143\u7D20
#
# @lc code=start
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) == 1:
            return False
        # \u5148\u6392\u5E8F\u76F8\u540C\u7684\u5143\u7D20\u5C31\u4F1A\u805A\u5728\u4E00\u8D77
        nums = sorted(nums)
        for i in range(1, len(nums)):
            # \u5224\u65AD\u524D\u4E00\u4E2A\u5143\u7D20\u4E0E\u5F53\u524D\u5143\u7D20\u662F\u5426\u76F8\u540C
            if nums[i] == nums[i - 1]:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=2186 lang=python3
#
# [2186] \u4F7F\u4E24\u5B57\u7B26\u4E32\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u7684\u6700\u5C11\u6B65\u9AA4\u6570
#
# @lc code=start
class Solution:
    def minSteps(self, s: str, t: str) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=219 lang=python3
#
# [219] \u5B58\u5728\u91CD\u590D\u5143\u7D20 II
#
# @lc code=start
class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        # \u7528 Hash \u53EF\u4EE5\u5927\u5927\u7684\u52A0\u5FEB\u7A0B\u5E8F\u8FD0\u884C
        result = {}
        for i, n in enumerate(nums):
            if n in result and i - result[n] <= k:
                return True
            result[n] = i 
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=22 lang=python3
#
# [22] \u62EC\u53F7\u751F\u6210
#
# @lc code=start
class Solution:
    def generateParenthesis(self, n: int)  -> List[str]:
        PS = []
        def gp(c1, c2, end_str):
            if c1 > n: return
            if c1 == n and c2 == n: PS.append(end_str)
            if c1 >= c2:
                gp(c1 + 1, c2, end_str + '(')
                gp(c1, c2 + 1, end_str + ')')
        gp(0, 0, '')    
        return PS
# @lc code=end`,`#
# @lc app=leetcode.cn id=225 lang=python3
#
# [225] \u7528\u961F\u5217\u5B9E\u73B0\u6808
#
# @lc code=start
class MyStack:
    # \u4EE3\u7801\u6709\u95EE\u9898
    def __init__(self):
        self.x1 = []
        self.x2 = []
    def push(self, x: int) -> None:
        self.x2.append(x)
        while len(self.x1) != 0:
            self.x2.append(self.x1[0])
            del self.x1[0]
        self.x2, self.x1 = self.x1, self.x2  
    def pop(self) -> int:
        r = self.x1[0]
        del self.x1[0]
        return r 
    def top(self) -> int:
        return self.x1[0]
    def empty(self) -> bool:
        if len(self.x1) == 0:
            return True
        return False
# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
# @lc code=end`,`#
# @lc app=leetcode.cn id=226 lang=python3
#
# [226] \u7FFB\u8F6C\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return root
        def it(r):
            if r.left != None:
                left, right = it(r.left)
                r.left.left = right
                r.left.right = left
            if r.right != None:
                left, right = it(r.right)
                r.right.left = right
                r.right.right = left
            return r.left, r.right
        left, right = it(root)
        root.left = right
        root.right = left
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=228 lang=python3
#
# [228] \u6C47\u603B\u533A\u95F4
#
# @lc code=start
class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        if len(nums) == 0:
            return []
        result = []
        str_ = nums[0]
        for i in range(1, len(nums)):
            if nums[i] - nums[i - 1] > 1:
                if str_ == nums[i - 1]:
                    result.append(str(str_))
                else:
                    result.append(str(str_) + '->' + str(nums[i - 1]))
                str_ = nums[i]
        if str_ == nums[len(nums) - 1]:
            result.append(str(str_))
        else:
            result.append(str(str_) + '->' + str(nums[len(nums) - 1]))
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=23 lang=python3
#
# [23] \u5408\u5E76K\u4E2A\u5347\u5E8F\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        while True:
            x = True
            for l in lists:
                if l == None:
                    lists.remove(l)
                    x = False
                    break
            if x:
                break
        if len(lists) == 0:
            return None
        start = None
        end = None
        while True:
            if len(lists) == 0:
                break
            min_l = lists[0].val
            j = 0
            for i in range(1, len(lists)):
                if lists[i].val < min_l:
                    min_l = lists[i].val
                    j = i
            l = lists[j]
            if l.next == None:
                lists.remove(l)
            else:
                lists[j] = l.next
            l.next = None
            if start == None:
                start = l
                end = l
            else:
                end.next = l
                end = l
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=231 lang=python3
#
# [231] 2 \u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n == 1:
            return True
        for i in range(32):
            if n == 2 << i:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=232 lang=python3
#
# [232] \u7528\u6808\u5B9E\u73B0\u961F\u5217
#
# @lc code=start
class MyQueue:
    def __init__(self):
        self.f = []
        self.s = []
    def push(self, x: int) -> None:
        self.f.append(x)
    def pop(self) -> int:
        self.__f2s()
        return self.s.pop()
    def __f2s(self):
        if len(self.s) == 0:
            for _ in range(len(self.f)):
                self.s.append(self.f.pop())
    def peek(self) -> int:
        self.__f2s()
        return self.s[len(self.s) - 1]
    def empty(self) -> bool:
        return True if (len(self.s) + len(self.f)) == 0 else False
# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
# @lc code=end`,`import java.util.ArrayList;
/*
 * @lc app=leetcode.cn id=2327 lang=java
 *
 * [2327] \u77E5\u9053\u79D8\u5BC6\u7684\u4EBA\u6570
 */
// @lc code=start
class Solution {
    public int peopleAwareOfSecret(int n, int delay, int forget) {
        int max_ = (int) 1e9 + 7;
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        for (int i = 1; i < n; i++) {
            int s = 0;
            for (int j = list.size() - delay; j >= 0 && j > list.size() - forget; j--) {
                s += list.get(j);
                s %= max_;
            }
            list.add(s);
        }
        int s = 0;
        for (int i = list.size() - 1; i >= 0 && i >= list.size() - forget; i--) {
            s += list.get(i);
            s %= max_;
        }
        return s;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=234 lang=python3
#
# [234] \u56DE\u6587\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        heads = []
        while head != None:
            heads.append(head)
            head = head.next
        for i in range(len(heads) // 2):
            if heads[i].val != heads[len(heads) - 1 - i].val:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=235 lang=python3
#
# [235] \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # \u6CE8\u610F\u4F7F\u7528\u9898\u76EE\u4E2D\u7684\u641C\u7D22\u6811\u6761\u4EF6
        while True:
            if root.val > p.val and root.val > q.val:
                root = root.left
            elif root.val < p.val and root.val < q.val:
                root = root.right
            else:
                break
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=237 lang=python3
#
# [237] \u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class Solution:
    def deleteNode(self, node):
        """
        :type node: ListNode
        :rtype: void Do not return anything, modify node in-place instead.
        """
        node.val = node.next.val
        node.next = node.next.next
# @lc code=end`,`#
# @lc app=leetcode.cn id=24 lang=python3
#
# [24] \u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        hd = head
        s = None
        e = None
        while hd != None:
            if hd.next != None:
                x = hd.next
                hd.next = hd.next.next
                x.next = hd   
                if s == None:
                    s = x
                else:
                    e.next = x
            if s == None:
                s = hd
            e = hd
            hd = hd.next  
        return s       
# @lc code=end`,`#
# @lc app=leetcode.cn id=242 lang=python3
#
# [242] \u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD
#
# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        r = {}
        for ss in s:
            r[ss] = r.get(ss, 0) + 1
        for tt in t:
            if tt not in r:
                return False
            r[tt] -= 1
            if r[tt] < 0:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=25 lang=python3
#
# [25] K \u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        stack = []
        start = None
        end = None
        hd = head
        i = 0
        while hd != None:
            stack.append(hd)
            hd = hd.next
            i += 1
            if i == k:
                i = 0
                for _ in range(k):
                    n = stack.pop()
                    if start == None:
                        start = n
                    else:
                        end.next = n
                    end = n 
        if end != None:
            end.next = None
        if len(stack) != 0:
            if start == None:
                start = stack[0]
            else:
                end.next = stack[0]
        return start
# @lc code=end`,`#
# @lc app=leetcode.cn id=257 lang=python3
#
# [257] \u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        result_mid = []
        result = []
        def btp(r):
            result_mid.append(str(r.val))
            if r.left is None and r.right is None:
                result.append('->'.join(result_mid))
            if r.left is not None:
                btp(r.left)
            if r.right is not None:
                btp(r.right)
            result_mid.pop()
        btp(root)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=258 lang=python3
#
# [258] \u5404\u4F4D\u76F8\u52A0
#
# @lc code=start
class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num
        sum_ = 0
        while num > 0:
            sum_ += num % 10
            num //= 10
        return self.addDigits(sum_)
# @lc code=end`,`#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879
#
# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = 0
        sgin = -10 ** 5
        for i in range(len(nums)):
            if sgin < nums[i]:
                nums[l] = nums[i]
                sgin = nums[i]
                l += 1
        return l
# @lc code=end`,`#
# @lc app=leetcode.cn id=263 lang=python3
#
# [263] \u4E11\u6570
#
# @lc code=start
class Solution:
    def isUgly(self, n: int) -> bool:
        if n <= 0:
            return False
        while n > 1:
            if n % 2 == 0:
                n //= 2
            elif n % 3 == 0:
                n //= 3
            elif n % 5 == 0:
                n //= 5
            else:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=268 lang=python3
#
# [268] \u4E22\u5931\u7684\u6570\u5B57
#
# @lc code=start
from typing import List
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums = sorted(nums)
        s = 0
        e = len(nums) - 1
        while s <= e:
            m = (s + e) // 2
            if nums[m] == m:
                if s == e:
                    return m + 1
                s = m + 1
            elif nums[m] == m + 1:
                if s == e:
                    return m
                e = m - 1
        return e + 1
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=27 lang=java
 *
 * [27] \u79FB\u9664\u5143\u7D20
 */
// @lc code=start
class Solution {
    public int removeElement(int[] nums, int val) {
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] \u79FB\u9664\u5143\u7D20
#
# @lc code=start
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[l] = nums[i]
                l += 1
        return l
# @lc code=end`,`#
# @lc app=leetcode.cn id=278 lang=python3
#
# [278] \u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C
#
# @lc code=start
# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:
class Solution:
    def firstBadVersion(self, n: int) -> int:
        s = 0
        while s < n:
            m = (s + n) // 2
            b = isBadVersion(m)
            if b:
                n = m
            else:
                s = m + 1
        return n
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=279 lang=java
 *
 * [279] \u5B8C\u5168\u5E73\u65B9\u6570
 */
// @lc code=start
class Solution {
    public int numSquares(int n) {
        int[] t = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            int x = Integer.MAX_VALUE;
            for (int j = 1; j * j <= i; j++) {
                x = Integer.min(x, t[i - j * j]);
            }
            t[i] = x + 1;
        }
        return t[n];
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=279 lang=python3
#
# [279] \u5B8C\u5168\u5E73\u65B9\u6570
#
# @lc code=start
class Solution:
    def numSquares(self, n: int) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] \u5B9E\u73B0 strStr()
#
# @lc code=start
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0
        hl = len(haystack) - len(needle) + 1
        i = 0
        while i < hl: 
            if haystack[i] == needle[0]:
                is_s = True
                for j in range(len(needle)):
                    if needle[j] != haystack[i + j]:
                        is_s = False
                        for k in range(len(haystack) - i - j):
                            if needle[j] == haystack[i + j + k]:
                                i = i + k - 1
                                break
                        break
                if is_s:
                    return i
            i += 1
        return -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] \u79FB\u52A8\u96F6
#
# @lc code=start
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        j = 0
        n_len = len(nums)
        while i < n_len and j < n_len:
            nums[i], nums[j] = nums[j], nums[i]
            while i < n_len and nums[i] != 0: i += 1
            j = i + 1
            while j < n_len and nums[j] == 0: j += 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=29 lang=python3
#
# [29] \u4E24\u6570\u76F8\u9664
#
# @lc code=start
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if divisor == 1:
            return dividend
        if divisor == -1:
            if dividend == -2**31:
                return 2**31 -1
            else:
                return -dividend
        d = str(dividend)
        sign = 1
        if d[0] == '-':
            d = d[1:]
            sign = -sign
        if divisor < 0:
            sign = -sign
        r = ''
        s = ''
        for dd in d:
            dd = int(s + dd)
            rr = 0
            while dd > 0:
                if divisor > 0:
                    if dd - divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd -= divisor
                elif divisor < 0:
                    if dd + divisor >= 0:
                        rr += 1
                    else:
                        break
                    dd += divisor
            if r != '' or rr != 0:
                r += str(rr)
            if dd > 0:
                s = str(dd)
            else:
                s = ''
        r = 0 if r == '' else int(r)
        if sign < 0:
            return -r
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=290 lang=python3
#
# [290] \u5355\u8BCD\u89C4\u5F8B
#
# @lc code=start
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        s = s.split(' ')
        if len(s) != len(pattern):
            return False
        table_p_s = {}
        table_s_p = {}
        for i, p in enumerate(pattern):
            ss = s[i]
            if p not in table_p_s:
                table_p_s[p] = ss
            else:
                if table_p_s[p] != ss:
                    return False
            if ss not in table_s_p:
                table_s_p[ss] = p
            else:
                if table_s_p[ss] != p:
                    return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=292 lang=python3
#
# [292] Nim \u6E38\u620F
#
# @lc code=start
class Solution:
    def canWinNim(self, n: int) -> bool:
        return n % 4 != 0
# @lc code=end`,`#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] \u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32
#
# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if s == "":
            return 0
        max_ = 0
        r = {}
        j = 0
        for i in range(len(s)):
            if s[i] in r and r[s[i]] >= j:
                if i - j> max_:
                    max_ = i - j
                j = r[s[i]] + 1
            r[s[i]] = i
        if i + 1 - j > max_:
            max_ = i + 1 - j
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=30 lang=python3
#
# [30] \u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32
#
# @lc code=start
class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        word_len = len(words[0])
        words_len = word_len * len(words)
        if len(s) < words_len:
            return []
        result = []
        for i in range(len(s) - words_len + 1):
            x = s[i: i + word_len]
            if x in words:
                y = words.copy()
                is_start = True
                for j in range(len(words)):
                    sub = s[i + j * word_len: i + (j + 1) * word_len]
                    if sub not in y:
                        is_start = False
                        break
                    y.remove(sub)
                if is_start:
                    result.append(i)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=303 lang=python3
#
# [303] \u533A\u57DF\u548C\u68C0\u7D22 - \u6570\u7EC4\u4E0D\u53EF\u53D8
#
# @lc code=start
class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = nums
    def sumRange(self, left: int, right: int) -> int:
        return sum(self.nums[left: right + 1])
# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end`,`#
# @lc app=leetcode.cn id=31 lang=python3
#
# [31] \u4E0B\u4E00\u4E2A\u6392\u5217
#
# @lc code=start
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        k = 0
        for i in range(len(nums) - 1, 0, -1):
            if nums[i] > nums[i - 1]:
                k = i
                for j in range(len(nums) - 1, i, -1):
                    if nums[j] > nums[i - 1]:
                        k = j
                        break
                x = nums[i - 1]
                nums[i - 1] = nums[k]
                nums[k] = x
                k = i
                break
        for i in range(k, (len(nums) + k) // 2):
            x = nums[i] 
            nums[i] = nums[len(nums) - 1 + k -i]
            nums[len(nums) - 1 + k -i] = x
        return nums
# @lc code=end`,`#
# @lc app=leetcode.cn id=316 lang=python3
#
# [316] \u53BB\u9664\u91CD\u590D\u5B57\u6BCD
#
# @lc code=start
class Solution:
    def removeDuplicateLetters(self, s: str) -> str:
        ar = {}
        for ss in s:
            ar[ss] = ar.get(ss, 0) + 1
        rl = []
        rs = set()
        for ss in s:
            ar[ss] -= 1
            if ss in rs:
                continue
            while len(rl) > 0 and ord(rl[-1]) > ord(ss):
                if ar[rl[-1]] > 0:
                    rs.remove(rl[-1])
                    rl.pop()
                else:
                    break
            rl.append(ss)
            rs.add(ss)
        return ''.join(rl)
# @lc code=end`,`#
# @lc app=leetcode.cn id=32 lang=python3
#
# [32] \u6700\u957F\u6709\u6548\u62EC\u53F7
#
# @lc code=start
class Solution:
    def longestValidParentheses(self, s: str) -> int:
        x = []
        for ss in s:
            if ss == '(':
                x.append(ss)
            else:
                if len(x) > 0:
                    if x[-1] == '(':
                        x.pop()
                        x.append(2)
                    elif x[-1] != ')' and len(x) > 1:
                        if x[-2] == '(':
                            del x[-2]
                            x[-1] += 2
                        else:
                            x.append(ss)
                    else:
                        x.append(ss)
                    while len(x) > 1 and x[-2] != '(' and x[-2] != ')' and x[-1] != '(' and x[-1] != ')':
                        x[-2] += x[-1]
                        del x[-1]                 
                else:
                    x.append(ss)
        max_ = 0
        for xx in x:
            if xx != '(' and xx != ')' and xx > max_:
                max_ = xx
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=322 lang=python3
#
# [322] \u96F6\u94B1\u5151\u6362
#
# @lc code=start
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        max_amount = amount + 1
        all_amount = [max_amount] * max_amount
        all_amount[0] = 0
        for i in range(1, amount + 1):
            for j in coins:
                if i >= j:
                    all_amount[i] = min([all_amount[i],all_amount[i - j] + 1])
        return -1 if all_amount[amount] >= max_amount else all_amount[amount]
# @lc code=end`,`#
# @lc app=leetcode.cn id=326 lang=python3
#
# [326] 3 \u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 0:
            return False
        while n != 1:
            if n % 3 != 0:
                return False
            n //= 3
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=33 lang=python3
#
# [33] \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4
#
# @lc code=start
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > nums[max_]:
                min_ = mid_ + 1
            else:
                max_ = mid_
        max_ = min_ - 1
        min_ = - (len(nums) - min_)
        while min_ <= max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] == target:
                return (mid_ + len(nums)) % len(nums)
            elif nums[mid_] > target:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        return -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=338 lang=python3
#
# [338] \u6BD4\u7279\u4F4D\u8BA1\u6570
#
# @lc code=start
class Solution:
    def countBits(self, n: int) -> List[int]:
        # \u51E1\u662F 2 \u7684 y \u6B21\u65B9\u5176\u7ED3\u679C\u90FD\u4E3A 1
        # 0 [0]
        # 1 [0, 1] 1 \u662F 2 \u7684 0 \u6B21\u65B9
        # 2 [0,1,1]
        # 3 [0,1,1,2]
        # 4 [0,1,1,2,1] 4 \u662F 2 \u7684\u5E73\u65B9
        # 5 [0,1,1,2,1,2]
        # 6 [0,1,1,2,1,2,2]
        # 7 [0,1,1,2,1,2,2,3]
        # 8
        result = [0]
        x = 0
        for i in range(1, n + 1):
            # \u8FD9\u884C\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u662F2\u7684y\u6B21\u65B9
            # \u5982 4 -> 100 4-1 -> 11 \u4E24\u8005\u4E0E\u5FC5\u5B9A\u4E3A 0
            if i & (i - 1) == 0:
                x = i
            # \u8FD9\u884C\u4EE3\u7801\u540E\u9762\u7684\u52A01\u8868\u793A\u7684\u662F\u6700\u8FD1\u7684\u4E00\u4E2A\u4E3A 2\u7684y \u6B21\u65B9\u7684\u6570
            # result[i - x] \u8868\u793A i - \u6700\u8FD1\u4E00\u4E2A\u4E3A 2\u7684y \u6B21\u65B9\u7684\u6570
            # \u6BD4\u5982\uFF1A7 = 3 + 4 \u5176\u542B1\u91CF\u4E3A 3 \u7684\u542B1\u91CF\u52A04\u7684\u542B1\u91CF
            result.append(result[i - x] + 1)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] \u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E
#
# @lc code=start
class Solution:
    def bs(self, nums, target, left):
        min_ = 0
        max_ = len(nums) - 1
        while min_ < max_:
            mid_ = (min_ + max_) // 2
            if nums[mid_] > target:
                max_ = mid_ - 1
            elif nums[mid_] == target and left:
                max_ = mid_ - 1
            else:
                min_ = mid_ + 1
        if left:
            return min_
        return max_
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        l = self.bs(nums, target, True)
        if nums[l] != target:
            l += 1
        r = self.bs(nums, target, False)
        if nums[r] != target:
            r -= 1
        if l == len(nums) or r == -1:
            return [-1, -1]
        if nums[l] != target or nums[r] != target:
            return [-1, -1]
        return [l, r]
# @lc code=end`,`#
# @lc app=leetcode.cn id=342 lang=python3
#
# [342] 4\u7684\u5E42
#
# @lc code=start
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n == 0:
            return False
        while n != 1:
            if n % 4 != 0:
                return False
            n >>= 2
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=344 lang=python3
#
# [344] \u53CD\u8F6C\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        s_l = len(s) - 1
        for i in range(len(s) // 2):
            s[i], s[s_l - i] = s[s_l - i], s[i]
# @lc code=end`,`#
# @lc app=leetcode.cn id=345 lang=python3
#
# [345] \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD
#
# @lc code=start
class Solution:
    def reverseVowels(self, s: str) -> str:
        ss = [s_ for s_ in s]
        sy = {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
        i = 0
        j = len(ss) - 1
        while i < j:
            while i < j and ss[i] not in sy: i += 1
            while i < j and ss[j] not in sy: j -= 1
            if i < j:
                ss[i], ss[j] = ss[j], ss[i]
                i += 1
                j -= 1
        return ''.join(ss)
# @lc code=end`,`#
# @lc app=leetcode.cn id=349 lang=python3
#
# [349] \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6
#
# @lc code=start
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = set()
        r = {n for n in nums1}
        for n in nums2:
            if n in r:
                result.add(n)
        return list(result)
# @lc code=end`,`#
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] \u641C\u7D22\u63D2\u5165\u4F4D\u7F6E
#
# @lc code=start
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        for i in range(len(nums)):
            if nums[i] >= target:
                return i
        return len(nums)
# @lc code=end`,`#
# @lc app=leetcode.cn id=350 lang=python3
#
# [350] \u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6 II
#
# @lc code=start
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        r1 = {}
        for n in nums1:
            r1[n] = r1.get(n, 0) + 1
        r2 = {}
        for n in nums2:
            r2[n] = r2.get(n, 0) + 1
        result = []
        for r in r1:
            if r in r2:
                result.extend([r] * min([r1[r], r2[r]]))
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=36 lang=python3
#
# [36] \u6709\u6548\u7684\u6570\u72EC
#
# @lc code=start
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        x = {}
        v = {}
        for i in range(9):
            h = []
            if i % 3 == 0:
                x = {}
            for j in range(9):
                if board[i][j] == '.':
                    continue
                if board[i][j] not in h :
                    h.append(board[i][j])
                else:
                    return False
                y = v.get(j, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    v[j] = y
                else:
                    return False
                y = x.get(j // 3, [])
                if board[i][j] not in y:
                    y.append(board[i][j])
                    x[j // 3] = y
                else:
                    return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=367 lang=python3
#
# [367] \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570
#
# @lc code=start
class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        for i in range(num + 1):
            ii = i * i
            if ii == num:
                return True
            elif ii > num:
                return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=37 lang=python3
#
# [37] \u89E3\u6570\u72EC
#
# @lc code=start
class Solution:
    def sSudoku(self, board, i, j, x, y, z):
        if board[i][j] == '.':
            for k in range(1, 10):
                k = str(k)
                l = x.get(i, [])
                m = y.get(j, [])
                n = z.get(str(i // 3) + str(j // 3), [])
                if k not in l and k not in m and k not in n:
                    board[i][j] = k
                    l.append(k)
                    m.append(k)
                    n.append(k)
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
                    if i == 8 and j == 8:
                        return board
                    elif j == 8:
                        s = self.sSudoku(board, i + 1, 0, x, y, z)              
                    else:
                        s = self.sSudoku(board, i, j + 1, x, y, z)
                    if s != None:
                        return s
                    l.pop()
                    m.pop()
                    n.pop()
                    x[i] = l
                    y[j] = m
                    z[str(i // 3) + str(j // 3)] = n
            board[i][j] = '.'
            return None
        else:        
            if i == 8 and j == 8:
                return board
            elif j == 8:
                return self.sSudoku(board, i + 1, 0, x, y, z)
            else:
                return self.sSudoku(board, i, j + 1, x, y, z)
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        x = {}
        y = {}
        z = {}
        for i in range(9):
            for j in range(9):
                k = board[i][j]
                if k == '.':
                    continue
                l = x.get(i, [])
                l.append(k)
                x[i] = l
                l = y.get(j, [])
                l.append(k)
                y[j] = l
                s = str(i // 3) + str(j // 3)
                l = z.get(s, [])
                l.append(k)
                z[s] = l
        return self.sSudoku(board, 0, 0, x, y, z)
# @lc code=end`,`#
# @lc app=leetcode.cn id=374 lang=python3
#
# [374] \u731C\u6570\u5B57\u5927\u5C0F
#
# @lc code=start
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:
class Solution:
    def guessNumber(self, n: int) -> int:
        i = 1
        while i <= n:
            m = (i + n) // 2
            r = guess(m)
            if r == 0:
                return m
            elif r == -1:
                n = m - 1
            else:
                i = m + 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=38 lang=python3
#
# [38] \u5916\u89C2\u6570\u5217
#
# @lc code=start
class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        s = '1'
        for _ in range(1, n):
            i = 0
            sss = ''
            r = ''
            for ss in s:
                if sss == '':
                    sss = ss
                    i += 1
                elif sss == ss:
                    i += 1
                else:
                    r = r + str(i) + sss
                    sss = ss
                    i = 1
            s =r + str(i) + sss
        return s
# @lc code=end`,`#
# @lc app=leetcode.cn id=383 lang=python3
#
# [383] \u8D4E\u91D1\u4FE1
#
# @lc code=start
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        r = {}
        m = {}
        for rn in ransomNote:
            r[rn] = r.get(rn, 0) + 1
        for mz in magazine:
            m[mz] = m.get(mz, 0) + 1
        for rr in r:
            if rr not in m or r[rr] > m[rr]:
                return False
        return True
# @lc code=end`,`#
# @lc app=leetcode.cn id=387 lang=python3
#
# [387] \u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26
#
# @lc code=start
class Solution:
    def firstUniqChar(self, s: str) -> int:
        ss = {}
        for i, s_ in enumerate(s):
            if s_ in ss:
                ss[s_] = -1
            else:
                ss[s_] = i 
        i = len(s) + 1
        for s_ in ss:
            if ss[s_] != -1 and ss[s_] < i:
                i = ss[s_]
        return i if i != (len(s) + 1) else -1
# @lc code=end`,`#
# @lc app=leetcode.cn id=389 lang=python3
#
# [389] \u627E\u4E0D\u540C
#
# @lc code=start
class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        ss = {}
        tt = {}
        for s_ in s:
            ss[s_] = ss.get(s_, 0) + 1
        for t_ in t:
            tt[t_] = tt.get(t_, 0) + 1
        for t_ in tt:
            if t_ not in ss or tt[t_] != ss[t_]:
                return t_
# @lc code=end`,`#
# @lc app=leetcode.cn id=39 lang=python3
#
# [39] \u7EC4\u5408\u603B\u548C
#
# @lc code=start
class Solution:
    result = []
    def cs(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
            return
        for j in range(i, len(candidates)):
            if candidates[j] + a > target:
                return
            x.append(candidates[j])
            self.cs(candidates, j, x, a + candidates[j], target)
            x.pop()
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        for i, c in enumerate(candidates):
            if c > target:
                break
            self.cs(candidates,i, [c], c, target)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=392 lang=python3
#
# [392] \u5224\u65AD\u5B50\u5E8F\u5217
#
# @lc code=start
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i = 0 
        j = 0
        while i < len(s) and j < len(t):
            while j < len(t) and t[j] != s[i]: j += 1
            j += 1
            if j > len(t):
                return False
            i += 1
        return len(s) == i
# @lc code=end`,`#
# @lc app=leetcode.cn id=395 lang=python3
#
# [395] \u81F3\u5C11\u6709 K \u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestSubstring(self, s: str, k: int) -> int:
# @lc code=end`,`#
# @lc app=leetcode.cn id=40 lang=python3
#
# [40] \u7EC4\u5408\u603B\u548C II
#
# @lc code=start
from select import select
class Solution:
    result = []
    def cs2(self, candidates, i, x, a, target):
        if a == target:
            Solution.result.append(x.copy())
        y = []
        for j in range(i + 1, len(candidates)):
            c = candidates[j]
            if c + a > target:
                return
            if c in y:
                continue
            y.append(c)
            x.append(c)
            self.cs2(candidates, j, x, a + c, target)
            x.pop()
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        Solution.result = []
        candidates = sorted(candidates)
        y = []
        for i, c in enumerate(candidates):
            if c > target:
                break
            if c in y:
                continue
            y.append(c)
            self.cs2(candidates, i, [c], c, target)
        return Solution.result
# @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=401 lang=java
 *
 * [401] \u4E8C\u8FDB\u5236\u624B\u8868
 */
// @lc code=start
class Solution {
    public int[] hours = {1, 2, 4, 8};
    public int[] minutes = {1, 2, 4, 8, 16, 32};
    public void getHours(int s, int num, int sum, List<String> hour_list) {
        if (num == 0) {
            if (sum < 12)
                hour_list.add(sum + "");
            return;
        }
        for (int i = s; i < this.hours.length - num + 1; i++) {
            getHours(i + 1, num - 1, sum + this.hours[i], hour_list);    
        }
    }
    public List<String> getHours(int num) {
        List<String> hour_list = new ArrayList<>();
        getHours(0, num, 0, hour_list);
        return hour_list;
    }
    public void getMinutes(int s, int num, int sum, List<String> minute_list) {
        if(num == 0) {
            if (sum < 60)
                minute_list.add(sum < 10 ? "0"+sum : "" + sum);
            return;
        }
        for (int i = s; i < this.minutes.length - num + 1; i++) {
           getMinutes(i + 1, num - 1, sum + this.minutes[i], minute_list); 
        }
    }
    public List<String> getMinutes(int num) {
        List<String> minute_list = new ArrayList<>();
        getMinutes(0, num, 0, minute_list);
        return minute_list;
    }
    public List<String> readBinaryWatch(int turnedOn) {
        List<String> results = new ArrayList<>();
        if (turnedOn > 8) {
            return results;
        }
        for (int i = 0; i < 4 && i <= turnedOn; i++) {
            List<String> hours = getHours(i);
            List<String> minutes = getMinutes(turnedOn - i);
            for (String hour : hours) {
                for (String minute : minutes) {
                    results.add(hour + ':' + minute);
                }
            }
        }
        return results;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=401 lang=python3
#
# [401] \u4E8C\u8FDB\u5236\u624B\u8868
#
# @lc code=start
class Solution:
    def readBinaryWatch(self, turnedOn: int) -> List[str]:
        if turnedOn > 8:
            return []
        ms = {}
        for i in range(min([turnedOn, 5])):
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=404 lang=java
 *
 * [404] \u5DE6\u53F6\u5B50\u4E4B\u548C
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int sum = 0;
        if (root.left != null) {
            if (root.left.left == null && root.left.right == null)
                sum += root.left.val;
            sum += sumOfLeftLeaves(root.left);
        } 
        sum += sumOfLeftLeaves(root.right);
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] \u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570
 */
// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) {
        return "0"
    }
    const th = []
    for (let i = 7; i >= 0; i--) {
        var v = (num >> (4 * i)) & 0xf
        if (th.length > 0 || v > 0) {
            th.push(v < 10 ? String.fromCharCode('0'.charCodeAt() + v) : String.fromCharCode('a'.charCodeAt() + (v - 10)))
        }
    }
    return th.join('')
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] \u6700\u957F\u56DE\u6587\u4E32
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let rs = {}
    for (const ss of s) {
        let i = rs[ss]
        if (i === undefined) {
            i = 1
        } else {
            i += 1
        }
        rs[ss] = i
    }
    let is_ = false
    let j = 0
    for (const r in rs) {
        if (rs[r] % 2 === 1) {
            is_ = true
        }
        j += parseInt(rs[r] / 2)
    }
    return is_ ? j * 2 + 1: j * 2
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=41 lang=python3
#
# [41] \u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570
#
# @lc code=start
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = n + 1
        for i in range(n):
            num = abs(nums[i])
            if num <= n:
                nums[num  - 1] = - abs(nums[num - 1])
        for i in range(n):
            if nums[i] > 0:
                return i + 1
        return len(nums) + 1
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */
// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push('FizzBuzz')
        } else if (i % 3 === 0) {
            res.push('Fizz')
        } else if (i % 5 === 0) {
            res.push('Buzz')
        } else {
            res.push("" + i)
        }
    }
    return res
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] \u7B2C\u4E09\u5927\u7684\u6570
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let third = null
    let two = null
    let one = null
    for (let n of nums) {
        if (one === null || n >= one) {
            if (n === one) {
                continue
            }
            third = two
            two = one
            one = n
        } else if (two === null || n >= two) {
            if (n === two) {
                continue
            }
            third = two
            two = n
        } else if (third === null || n >= third) {
            third = n
        }
    }
    return third === null ? one : third
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] \u5B57\u7B26\u4E32\u76F8\u52A0
 */
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = 0
    let f = 0
    let n1_len = num1.length
    let n2_len = num2.length
    let rs = ''
    while (i < n1_len || i < n2_len) {
        let n1 = i < n1_len ? parseInt(num1[n1_len - 1 - i]): 0
        let n2 = i < n2_len ? parseInt(num2[n2_len - 1 - i]) : 0
        let p = n1 + n2  + f
        if (p >= 10) {
            f = 1
            p = p % 10
        } else {
            f = 0
        }
        rs = p + rs
        i ++
    }
    if (f === 1) {
        rs = f + rs
    }
    return rs
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] \u63A5\u96E8\u6C34
#
# @lc code=start
class Solution:
    def trap(self, height: List[int]) -> int:
        if len(height) == 0 or len(height) == 1 or len(height) == 2:
            return 0
        x = 0 if height[0] > height[1] else 1
        y = [0, 0]
        for i in range(2, len(height)):
            if height[i] > height[i - 1]:
                hm = min(height[i], height[x])
                a = 0
                j = x
                for j in range(i - 1, x - 1, -1):
                    if height[j] >= height[i]:
                        break
                    a += hm - height[j]
                y.append(y[j] + a)
                if height[i] >= height[x]:
                    x = i
            else:
                y.append(y[-1])
        return y[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=43 lang=python3
#
# [43] \u5B57\u7B26\u4E32\u76F8\u4E58
#
# @lc code=start
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        x = []
        max_ = 1
        for i in range(len(num1) - 1, -1, -1):
            n1 = num1[i]
            s = '0' * (len(num1) - 1 - i)
            y = 0
            for j in range(len(num2) - 1, -1, -1):
                n2 = num2[j]
                n = int(n1) * int(n2) + y
                y = n // 10
                s = s + str(n % 10)
            s =  s + str(y)
            x.append(s)
            if len(s) > max_:
                max_ = len(s)
        y = 0
        r = ''
        for i in range(max_):
            s = 0
            for j in range(len(x)):
                if len(x[j]) > i:
                    s += int(x[j][i])
            s += y
            y = s // 10
            r = str(s % 10) + r
        r = str(y) + r 
        j = 0
        for i in range(len(r) - 1):
            if r[i] != '0':
                break
            j += 1
        return r[j:]
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] \u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570
 */
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let sl = s.split(' ')
    let len = sl.length
    for (const ss of sl) {
        if (ss === '') {
            len -= 1
        }
    }
    return len
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=44 lang=python3
#
# [44] \u901A\u914D\u7B26\u5339\u914D
#
# @lc code=start
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        s = ' ' + s
        p = ' ' + p
        x = [[False] for _ in range(len(s))]
        x[0][0] = True
        for j in range(1, len(p)):
            if (p[j] == '*' and x[0][j - 1]):
                x[0].append(True)
            else:
                x[0].append(False)
        for i in range(1, len(s)):
            for j in range(1, len(p)):
                if p[j] == '*':
                    if x[i - 1][j] or x[i][j - 1] or x[i - 1][j - 1]:
                        x[i].append(True)
                    else:
                        x[i].append(False)
                elif p[j] == '?' or p[j] == s[i]:
                    x[i].append(x[i - 1][j - 1])
                else:
                    x[i].append(False)
        return x[len(s) - 1][len(p) - 1]
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] \u6392\u5217\u786C\u5E01
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let sum_ = 0
    for(let i = 1; i <= n; i ++) {
        if ((sum_ += i) >= n) {
            if (sum_ === n) {
                return i
            } 
            return i - 1
        }
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=442 lang=python3
#
# [442] \u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u636E
#
# @lc code=start
class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        l = len(nums)
        for n in nums:
            nums[(n - 1) % l] += l
        r = []
        for i in range(l):
            if nums[i] > 2 * l:
                r.append(i + 1)
        return r
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] \u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0
    while (i < nums.length) {
        let n = nums[i]
        if (nums[i] !== i + 1) {            
            nums[i] = nums[n - 1]
            nums[n - 1] = n
        }
        if (nums[i] == n) {
            i++
        }
    }
    let rs = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] -= (i + 1)
        if (nums[i] !== 0) {
            rs.push(i + 1)
        }
    }
    return rs
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=45 lang=python3
#
# [45] \u8DF3\u8DC3\u6E38\u620F II
#
# @lc code=start
class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        x = {0: 0}
        for i, n in enumerate(nums):
            if n == 0:
                continue
            k = x[i]
            if i + n + 1 >= len(nums):
                return k + 1
            for j in range(1, n + 1):
                if (j + i) not in x:
                    x[j + i] = k + 1
        return 0   
# @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=455 lang=java
 *
 * [455] \u5206\u53D1\u997C\u5E72
 */
// @lc code=start
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int sum = 0;
        int i = 0;
        for(int gg: g) {
            while (i < s.length && gg > s[i]) {
                i++;
            }
            if (i == s.length) {
                continue;
            } else {
                sum += 1;
                i++;
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=459 lang=java
 *
 * [459] \u91CD\u590D\u7684\u5B50\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        for (int i = 1; i <= s.length() / 2; i++) {
            if (s.length() % i != 0) {
                continue;
            }
            boolean is_ok = true;
            String sub = s.substring(0, i);
            for (int j = i; j < s.length(); j += i) {
                if (j + i > s.length() || !s.substring(j, j + i).equals(sub)) {
                    is_ok = false;
                    break;
                }
            }
            if (is_ok) {
                return true;
            }
        }
        return false;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=46 lang=python3
#
# [46] \u5168\u6392\u5217
#
# @lc code=start
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        x = [[n] for n in nums]
        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for n in nums:
                    if n not in x[i]:
                        z = x[i].copy()
                        z.append(n)
                        x.append(z)
            x = x[y:]
        return x
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=461 lang=java
 *
 * [461] \u6C49\u660E\u8DDD\u79BB
 */
// @lc code=start
class Solution {
    public int hammingDistance(int x, int y) {
        int sum = 0;
        for (int i = 0; i < 32; i++) {
            if (((x >> i) & 1) != ((y >> i) & 1)) {
                sum++;
            }
        }
        return sum;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=463 lang=java
 *
 * [463] \u5C9B\u5C7F\u7684\u5468\u957F
 */
// @lc code=start
class Solution {
    public int islandPerimeter(int[][] grid) {
        int sum = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    if (i - 1 >= 0) {
                        if (grid[i - 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (i + 1 < grid.length) {
                        if (grid[i + 1][j] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j - 1 >= 0) {
                        if (grid[i][j - 1] == 0) sum++;
                    } else {
                        sum++;
                    }
                    if (j + 1 < grid[i].length) {
                        if (grid[i][j + 1] == 0) sum ++;
                    } else {
                        sum++;
                    }
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=47 lang=python3
#
# [47] \u5168\u6392\u5217 II
#
# @lc code=start
class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        x = [[i] for i, n in enumerate(nums) if n not in nums[:i]]
        for _ in range(len(nums) - 1):
            y = len(x)
            for i in range(y):
                for j in range(len(nums)):
                    if j not in x[i]:
                        z = x[i].copy()
                        z.append(j)
                        x.append(z)
            x = x[y:]
        y = []
        i = 0
        z = []
        for xx in x:
            s = 0
            zz = []
            for j in range(len(xx)):
                s += 10 ** j * nums[xx[j]]
                zz.append(nums[xx[j]])
            if s not in y:
                z.append(zz)
                y.append(s)
        return z
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=476 lang=java
 *
 * [476] \u6570\u5B57\u7684\u8865\u6570
 */
// @lc code=start
class Solution {
    public int findComplement(int num) {
        int x = 0;
        int i = 0;
        while(num != 0) {
            if (num % 2 == 0) {
                x += Math.pow(2, i);
            }
            i++;
            num /= 2;
        }
        return x;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=48 lang=python3
#
# [48] \u65CB\u8F6C\u56FE\u50CF
#
# @lc code=start
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        for i in range(n):
            for j in range(n // 2):
                x = matrix[i][j]
                matrix[i][j] = matrix[i][n - 1 - j]
                matrix[i][n - 1 - j] = x
        for i in range(n):
            for j in range(n - i - 1):
                x = matrix[i][j]
                matrix[i][j] = matrix[n - 1 - j][n - 1 - i]
                matrix[n - 1 - j][n - 1 - i] = x
        return matrix
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=482 lang=java
 *
 * [482] \u5BC6\u94A5\u683C\u5F0F\u5316
 */
// @lc code=start
class Solution {
    public String licenseKeyFormatting(String s, int k) {
        StringBuffer sb = new StringBuffer();
        int j = 0;
        for (int i = s.length() - 1; i > -1; i--) {
            if (s.charAt(i) != '-') {
                if (j == k) {
                    j = 0;
                    sb.insert(0, '-');
                }
                j++;
                sb.insert(0, s.charAt(i));
            }
        }
        return sb.toString().toUpperCase();
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=485 lang=java
 *
 * [485] \u6700\u5927\u8FDE\u7EED 1 \u7684\u4E2A\u6570
 */
// @lc code=start
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max_ = 0;
        int j = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                if (j > max_) {
                    max_ = j;
                }
                j = 0;
            } else if (nums[i] == 1) {
                j++;
            }
        }
        if (j > max_) 
            return j;
        return max_;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=49 lang=python3
#
# [49] \u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5206\u7EC4
#
# @lc code=start
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        x = {}
        for s in strs:
            ss = ''.join(sorted(s))
            y = x.get(ss, [])
            y.append(s)
            x[ss] = y
        return list(x.values())
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=492 lang=java
 *
 * [492] \u6784\u9020\u77E9\u5F62
 */
// @lc code=start
class Solution {
    public int[] constructRectangle(int area) {
        int i = new Double(Math.sqrt(area)).intValue();
        int[] r = new int[2];
        for (int j = 0; j < i; j++) {
            if (area % (i - j) == 0) {
                r[0] = area / (i - j);
                r[1] = i - j;
                break;
            }
        }
        return r;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=495 lang=java
 *
 * [495] \u63D0\u83AB\u653B\u51FB
 */
// @lc code=start
class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        if (timeSeries.length == 0) {
            return duration;
        }
        int sum = 0;
        for (int i = 1; i < timeSeries.length; i++) {
            if (timeSeries[i] - timeSeries[i - 1] < duration) {
                sum += timeSeries[i] - timeSeries[i - 1];
            } else {
                sum += duration;
            }
        }
        sum += duration;
        return sum;
    }
}
// @lc code=end`,`import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=496 lang=java
 *
 * [496] \u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20 I
 */
// @lc code=start
class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer> ls = new ArrayList<>();
        for (int i = 0; i < nums2.length; i++) {
            map.put(nums2[i], -1);
            Iterator<Integer> iterator = ls.iterator();
            while(iterator.hasNext()) {
                Integer it = iterator.next();
                if (it < nums2[i]) {
                    map.put(it, nums2[i]);
                    iterator.remove();
                }
            }
            ls.add(nums2[i]);
        }
        int[] rs = new int[nums1.length];
        for (int i = 0; i < nums1.length; i++) {
            rs[i] = map.get(nums1[i]);
        }
        return rs;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] \u6700\u957F\u56DE\u6587\u5B50\u4E32
#
# @lc code=start
class Solution:
    def longestPalindrome(self, s: str) -> str:
        max_str = s[0]
        s_len = len(s)
        for i in range(s_len):
            if i + 1 < s_len and s[i] == s[i + 1]:
                if len(max_str) < 2:
                    max_str = s[i: i + 2]
                for j in range(1, s_len):
                    if i - j < 0 or i + 1 + j > s_len - 1 or s[i - j] != s[i + 1 + j]:
                        ss = s[i - j + 1: i + 1 + j]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break
            if i + 2 < s_len and s[i] == s[i + 2]:
                if len(max_str) < 3:
                    max_str = s[i: i + 3]
                for j in range(1, s_len):
                    if i - j < 0 or i + 2 + j > s_len - 1 or s[i - j] != s[i + 2 + j]:
                        ss = s[i - j + 1: i + j + 2]  
                        if len(ss) > len(max_str):
                            max_str = ss
                        break
        return max_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=50 lang=python3
#
# [50] Pow(x, n)
#
# @lc code=start
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if x == 0:
            return 0
        if n == 0:
            return 1
        if n < 0:
            x = 1 / x
        n = abs(n)
        r = x
        n -= 1
        while n > 0:
            s = x
            i = 1
            while n - i >= 0: 
                i = i * 2
                if n - i > 0:
                    s = s * s
                else:
                    n -= (i // 2)
            r *= s
        return r
# @lc code=end`,`import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=500 lang=java
 *
 * [500] \u952E\u76D8\u884C
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
// @lc code=end`,`#
# @lc app=leetcode.cn id=51 lang=python3
#
# [51] N \u7687\u540E
#
# @lc code=start
class Solution:
    result = []
    def snq(self, n, x, k):
        if k == n:
            Solution.result.append(x.copy())
            return
        for i in range(n):
            is_ok = True
            for xx in x:
                if xx[i] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            for j in range(len(x)):
                if i - len(x) + j >= 0 and x[j][i - len(x) + j] == 'Q':
                    is_ok = False
                    break
                if i + len(x) - j < n and x[j][i + len(x) - j] == 'Q':
                    is_ok = False
                    break
            if not is_ok:
                continue
            y = ['.'] * n
            y[i] = 'Q'
            x.append(''.join(y))
            self.snq(n, x, k + 1)
            x.pop()
    def solveNQueens(self, n: int) -> List[List[str]]:
        Solution.result = []
        self.snq(n, [], 0)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=52 lang=python3
#
# [52] N\u7687\u540E II
#
# @lc code=start
class Solution:
    result = 0
    def tnq(self, n, x, k):
        if k == n:
            Solution.result += 1
            return
        for i in range(n):
            is_ok = True
            for xx in x:
                if i == xx:
                    is_ok = False
                    break
            if not is_ok:
                continue
            for j in range(len(x)):
                if i - len(x) + j == x[j] or i + len(x) - j == x[j]:
                    is_ok = False
                    break
            if not is_ok:
                continue
            x.append(i)
            self.tnq(n, x, k + 1)
            x.pop()
    def totalNQueens(self, n: int) -> int:
        Solution.result = 0
        self.tnq(n, [], 0)
        return Solution.result
# @lc code=end`,`#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] \u6700\u5927\u5B50\u6570\u7EC4\u548C
#
# @lc code=start
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_ = nums[0]
        k = nums[0]
        for i in range(1, len(nums)):
            if nums[i] + k < nums[i]:
                k = nums[i]
            else:
                k = nums[i] + k
            if max_ < k:
                max_ = k
        return max_
# @lc code=end`,`#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] \u87BA\u65CB\u77E9\u9635
#
# @lc code=start
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        r = []
        i = 0
        while len(matrix) > 0 and len(matrix[0]) > 0:
            if i == 0:
                m = matrix[0]
                r.extend(m)
                del matrix[0]
            elif i == 1:
                for j in range(len(matrix)):
                    m = matrix[j][-1]
                    r.append(m)
                    del matrix[j][-1]
            elif i == 2:
                m = matrix[-1]
                del matrix[-1]
                for j in range(len(m) - 1, -1, -1):
                    r.append(m[j])
            elif i == 3:
                for j in range(len(matrix) - 1, -1, -1):
                    m = matrix[j][0]
                    r.append(m)
                    del matrix[j][0]
            i = (i + 1) % 4 
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=55 lang=python3
#
# [55] \u8DF3\u8DC3\u6E38\u620F
#
# @lc code=start
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        max_ = 0
        for i, n in enumerate(nums):
            if max_ < i:
                return False
            if i + n >= len(nums) - 1:
                return True
            if max_ == i and n == 0:
                return False
            if i + n > max_:
                max_ = i + n
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=56 lang=python3
#
# [56] \u5408\u5E76\u533A\u95F4
#
# @lc code=start
class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort(key=lambda x:x[0])
        merge = []
        for interval in intervals:
            if not merge or merge[-1][1] < interval[0]:
                merge.append(interval)
            else:
                merge[-1][1] = max(merge[-1][1], interval[1])
        return merge
# @lc code=end`,`#
# @lc app=leetcode.cn id=57 lang=python3
#
# [57] \u63D2\u5165\u533A\u95F4
#
# @lc code=start
class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        i = 0
        j = len(intervals) - 1
        while i <= j:
            k = (i + j) // 2
            if newInterval[0] == intervals[k][0]:
                i = k + 1
                break
            elif newInterval[0] > intervals[k][0]:
                i = k + 1
            else:
                j = k - 1
        intervals.insert(i, newInterval)
        insert = []
        for interval in intervals:
            if not insert or insert[-1][1] < interval[0]:
                insert.append(interval)
            else:
                insert[-1][1] = max(insert[-1][1], interval[1])
        return insert
# @lc code=end`,`#
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] \u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6
#
# @lc code=start
class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        end_word_len = 0
        sign = False
        for ss in s:
            if ss == ' ':
                sign = True
            elif sign:
                sign = False
                end_word_len = 1
            else:
                end_word_len += 1
        return end_word_len
# @lc code=end`,`#
# @lc app=leetcode.cn id=59 lang=python3
#
# [59] \u87BA\u65CB\u77E9\u9635 II
#
# @lc code=start
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        x = [[0] * n for _ in range(n)]
        k = n * n
        i = n // 2
        j = (n - 1) // 2
        x[i][j] = k
        k -= 1
        m = 2
        if n % 2 == 0:
            x[i][j + 1] = k
            k -= 1
            j += 1
            x[i - 1][j] = k
            k -= 1
            i -= 1
            x[i][j - 1] = k
            k -= 1
            j -= 1
            m += 1
        while k > 0:
            j -= 1
            for n in range(m):
                x[i + n][j] = k
                k -= 1
            i += n
            for n in range(m):
                x[i][j + n + 1] = k
                k -= 1
            j = j + n + 1
            for n in range(m):
                x[i - n - 1][j] = k
                k -= 1
            i = i - n - 1
            for n in range(m):
                x[i][j - n - 1] = k
                k -= 1
            j = j - n - 1
            m += 2
        return x                
# @lc code=end`,`#
# @lc app=leetcode.cn id=6 lang=python3
#
# [6] Z \u5B57\u5F62\u53D8\u6362
#
# @lc code=start
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        end_str = ''
        for i in range(numRows):
            sl = len(s) / (2 * numRows - 2) 
            sl = int(sl) + 1 if sl > int(sl) else int(sl)
            for j in range(sl):
                k = i + j * (2 * numRows - 2)
                if k >= len(s):
                    break
                end_str += s[k]
                if i != 0 and i != (numRows - 1):
                    k1 = (numRows - i) * 2 - 2 + k
                    if k1 >= len(s):
                        break
                    end_str += s[k1]   
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=60 lang=python3
#
# [60] \u6392\u5217\u5E8F\u5217
#
# @lc code=start
class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        sum_ = 1
        for i in range(1, n):
            sum_ *= i
        i = 1
        s = ''
        x = [str(i) for i in range(1, n + 1)]
        while i < n:
            j = (k - 1) // sum_
            s += x[j]
            del x[j]
            k = k % sum_
            sum_ //= (n - i)
            i += 1
        return s + x[0]
# @lc code=end`,`#
# @lc app=leetcode.cn id=61 lang=python3
#
# [61] \u65CB\u8F6C\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head == None:
            return None
        i = k
        while i != 0:
            l = 0
            x = ListNode(next=head)
            hd = x
            start = None
            while hd.next != None:
                i -= 1
                if i <= 0:
                    if start == None:
                        start = x
                    else:
                        start = start.next
                l += 1
                hd = hd.next
            if start == x:
                return head
            if i <= 0:
                hd.next = head
                s = start.next
                start.next = None
                return s
            else:
                i %= l
        return head
# @lc code=end`,`#
# @lc app=leetcode.cn id=62 lang=python3
#
# [62] \u4E0D\u540C\u8DEF\u5F84
#
# @lc code=start
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        x = [1] * n
        for _ in range(1, m):
            for j in range(1, n):
                x[j] = x[j] + x[j - 1]
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=63 lang=python3
#
# [63] \u4E0D\u540C\u8DEF\u5F84 II
#
# @lc code=start
class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        x = [0] * len(obstacleGrid[0])
        if obstacleGrid[0][0] == 0:
            x[0] = 1
        else:
            return 0
        for i, o in enumerate(obstacleGrid):
            for j in range(len(o)):
                if obstacleGrid[i][j] == 0:
                    if j == 0:
                        continue
                    x[j] = x[j - 1] + x[j]
                else:
                    x[j] = 0
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=64 lang=python3
#
# [64] \u6700\u5C0F\u8DEF\u5F84\u548C
#
# @lc code=start
class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        x = {}
        def mps(i, j):
            g = grid[i][j]
            if i == 0 and j == 0:
                return g
            s1 = str(i * 200 + (j - 1))
            if s1 not in x and j > 0:
                x[s1] = mps(i, j - 1)
            if i == 0:
                return x[s1] + g
            s2 = str((i - 1) * 200 + j)
            if s2 not in x:
                x[s2] = mps(i - 1, j)
            if j == 0:
                return x[s2] + g
            return g + (x[s1] if x[s1] < x[s2] else x[s2])
        return mps(len(grid) - 1, len(grid[0]) - 1)
# @lc code=end`,`#
# @lc app=leetcode.cn id=65 lang=python3
#
# [65] \u6709\u6548\u6570\u5B57
#
# @lc code=start
class Solution:
    def isNumber(self, s: str) -> bool:
        is_e = False
        is_f = False
        is_i = False
        is_s = False
        for ss in s:
            if (ss  == '-' or ss == '+') and not is_s and not is_i and not is_f:
                is_s = True
                continue
            if ss == '.' and not is_f and not is_e:
                is_f = True
                continue
            if (ss == 'e' or ss == 'E') and not is_e and is_i:
                is_i = False
                is_e = True
                is_f = False
                is_s = False
                continue
            if ord(ss) >= ord('0') and ord(ss) <= ord('9'):
                is_i = True
            else:
                return False
        return is_i
# @lc code=end`,`#
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] \u52A0\u4E00
#
# @lc code=start
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        j = 1
        for i in range(len(digits) - 1, -1, -1):
            if j == 0:
                break
            if digits[i] + j == 10:
                digits[i] = 0
            else:
                digits[i] += j
                j = 0
        if j == 1:
            digits.insert(0, 1)
        return digits
# @lc code=end`,`#
# @lc app=leetcode.cn id=67 lang=python3
#
# [67] \u4E8C\u8FDB\u5236\u6C42\u548C
#
# @lc code=start
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        if len(b) > len(a):
            c = b
            b = a
            a = c
        i = len(a) - len(b)
        k = 0
        end_str = ''
        for j in range(len(b) - 1, -1, -1):
            x = int(b[j]) + int(a[j + i]) + k
            if x <= 1:
                end_str = str(x) + end_str
                k = 0
            else:
                if x == 2:
                    end_str = '0' + end_str
                elif x == 3:
                    end_str = '1' + end_str
                k = 1
        for j in range(i - 1, -1, -1):
            x = int(a[j]) + k
            if x == 2:
                end_str = '0' + end_str
                k = 1
            else:
                end_str = str(x) + end_str
                k = 0
        if k == 1:
            end_str = '1' + end_str
        return end_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=68 lang=python3
#
# [68] \u6587\u672C\u5DE6\u53F3\u5BF9\u9F50
#
# @lc code=start
class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        i = 0
        x = []
        while i < len(words):
            sum_ = 0
            xx = []
            while i < len(words):
                w_l = len(words[i])
                if sum_ + len(xx) + w_l <= maxWidth:
                    xx.append(words[i])
                    i += 1
                    sum_ += w_l
                else:
                    break
            x.append((xx, sum_))
        for i in range(len(x) - 1):
            if len(x[i][0]) == 1:
                x[i] = x[i][0][0] + (' ' * (maxWidth - x[i][1]))
                continue
            j = len(x[i][0]) - 1
            ss = maxWidth - x[i][1]
            s = ''
            while j > 0:
                s = x[i][0][j] + s
                sm = ss // j
                s = ' ' * sm + s
                ss = ss - sm
                j -= 1
            s = x[i][0][0] + s
            x[i] = s
        x[-1] = ' '.join(x[-1][0])
        x[-1] = x[-1] + (' ' * (maxWidth - len(x[-1])))
        return x
# @lc code=end`,`#
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] Sqrt(x)
#
# @lc code=start
class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 1:
            return 1
        xx = 0
        yy = x
        while True:
            zz = (xx + yy) // 2
            zz2 = zz * zz
            zz12 = (zz + 1) * (zz + 1)
            if zz2 <= x and zz12 > x:
                return zz
            if zz12 == x:
                return zz + 1
            if zz2 > x:
                yy = zz
            else:
                xx = zz
# @lc code=end`,`#
# @lc app=leetcode.cn id=7 lang=python3
#
# [7] \u6574\u6570\u53CD\u8F6C
#
# @lc code=start
class Solution:
    MAX_VALUE = 2 ** 31 - 1
    MIN_VALUE = - 2 ** 31
    def reverse(self, x: int) -> int:
        r_x = 0
        symbol = -1 if x < 0 else 1
        x = symbol * x
        while x != 0:
            a = x % 10
            x = x // 10
            if symbol > 0:
                c = Solution.MAX_VALUE % 10
                d = Solution.MAX_VALUE // 10
            else:
                c = (-1 * Solution.MIN_VALUE) % 10
                d = -1 * Solution.MIN_VALUE // 10
            if (r_x == d and a > c) or (r_x > d):
                return 0 
            r_x = r_x * 10 + a
        return symbol * r_x
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] \u722C\u697C\u68AF
 */
// @lc code=start
class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        if (n == 2) {
            return 2;
        }
        int s = 1;
        int e = 2;
        for (int i = 3; i <= n; i++) {
            int a = s + e;
            s = e;
            e = a;
        }
        return e;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] \u722C\u697C\u68AF
#
# @lc code=start
class Solution:
    def climbStairs(self, n: int) -> int:
        if n < 3:
            return n
        a = 1
        b = 2
        for _ in range(n - 2):
            b = a + b
            a = b - a
        return b
# @lc code=end`,`#
# @lc app=leetcode.cn id=71 lang=python3
#
# [71] \u7B80\u5316\u8DEF\u5F84
#
# @lc code=start
class Solution:
    def simplifyPath(self, path: str) -> str:
        ps = path.split('/')
        x = []
        for p in ps:
            if p == '' or p == '.':
                continue
            elif p == '..':
                if len(x) > 0:
                    x.pop()
            else:
                x.append(p)
        return '/' + '/'.join(x)
# @lc code=end`,`#
# @lc app=leetcode.cn id=72 lang=python3
#
# [72] \u7F16\u8F91\u8DDD\u79BB
#
# @lc code=start
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        word2 = ' ' + word2
        x = [i for i in range(len(word2))]
        y = [0] * len(word2)
        for w1 in word1:
            for i, w2 in enumerate(word2):
                if i == 0:
                    y[i] = x[i] + 1
                elif w1 == w2:
                    y[i] = x[i - 1]
                else:
                    y[i] = min([x[i - 1], x[i], y[i - 1]]) + 1
            x, y = y, x
        return x[-1]
# @lc code=end`,`#
# @lc app=leetcode.cn id=73 lang=python3
#
# [73] \u77E9\u9635\u7F6E\u96F6
#
# @lc code=start
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        is_c = False
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    if j == 0:
                        is_c = True
                    else:
                        matrix[0][j] = 0
                    matrix[i][0] = 0
        for i in range(len(matrix) - 1, -1, -1):
            for j in range(len(matrix[0]) - 1, -1, -1):
                if j != 0:
                    if matrix[0][j] == 0 or matrix[i][0] == 0:
                        matrix[i][j] = 0
                elif is_c:
                    matrix[i][0] = 0
# @lc code=end`,`#
# @lc app=leetcode.cn id=74 lang=python3
#
# [74] \u641C\u7D22\u4E8C\u7EF4\u77E9\u9635
#
# @lc code=start
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        i = len(matrix) - 1
        j = 0
        while j < len(matrix[0]) and i >= 0:
            if matrix[i][j] == target:
                return True
            elif matrix[i][j] > target:
                i -= 1
            else:
                j += 1
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=75 lang=python3
#
# [75] \u989C\u8272\u5206\u7C7B
#
# @lc code=start
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i, j, k = 0, 0, 0
        for n in nums:
            if n == 0:
                i += 1
            elif n == 1:
                j += 1
            else:
                k += 1
        for l in range(i):
            nums[l] = 0
        for l in range(j):
            nums[l + i] = 1
        for l in range(k):
            nums[l + i + j] = 2
# @lc code=end`,`#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] \u6700\u5C0F\u8986\u76D6\u5B50\u4E32
#
# @lc code=start
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        t_map = {}
        for tt in t:
            t_map[tt] = t_map.get(tt, 0) + 1
        j = 0
        t_sum = 0
        min_sub_str = ''
        for i in range(len(s)):
            if s[i] in t_map:
                t_map[s[i]] -= 1
                if t_map[s[i]] >= 0:
                    t_sum += 1
            if t_sum == len(t):
                while j < len(s) and t_sum == len(t):
                    if s[j] in t_map:
                        t_map[s[j]] += 1
                        if t_map[s[j]] > 0:
                            t_sum -= 1
                    j += 1
                if min_sub_str is '' or len(min_sub_str) > (i + 1 - j):
                    min_sub_str = s[j-1: i + 1]
        return min_sub_str
# @lc code=end`,`#
# @lc app=leetcode.cn id=77 lang=python3
#
# [77] \u7EC4\u5408
#
# @lc code=start
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        if k > n:
            return []
        r = [[i + 1] for i in range(n + 1 - k)]
        for l in range(k - 1):
            lr = len(r)
            for m in range(lr):
                rr = r[m]
                for nn in range(rr[-1] + 1,n + 3 - k + l):
                    rrr = rr.copy()
                    rrr.append(nn)
                    r.append(rrr)
            r = r[lr:]
        return r
# @lc code=end`,`#
# @lc app=leetcode.cn id=78 lang=python3
#
# [78] \u5B50\u96C6
#
# @lc code=start
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = [[n] for n in nums]
        result.append([])
        rm = [[i] for i in range(len(nums))]
        while len(rm) > 0:
            r = rm[0]
            del rm[0]
            for i in range(r[-1] + 1, len(nums)):
                rn = r.copy()
                rn.append(i)
                rm.append(rn)
                r_m = []
                for j in rn:
                    r_m.append(nums[j])
                result.append(r_m)
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=79 lang=python3
#
# [79] \u5355\u8BCD\u641C\u7D22
#
# @lc code=start
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        exit_ = False
        def is_exit(i, j, ls):
            nonlocal exit_
            k = len(ls) - 1
            if exit_:
                return
            if board[i][j] == word[k]:
                if k == len(word) - 1:
                    exit_ = True
                    return
                for ii, jj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                    if ii >= 0 and ii < len(board) and jj >= 0 and jj < len(board[ii]) and (ii, jj) not in ls:
                        ls.append((ii, jj))
                        is_exit(ii, jj, ls)
                        ls.pop()
        for i in range(len(board)):
            for j in range(len(board[i])):
                is_exit(i, j, [(i, j)])
        return exit_
# @lc code=end`,`#
# @lc app=leetcode.cn id=796 lang=python3
#
# [796] \u65CB\u8F6C\u5B57\u7B26\u4E32
#
# @lc code=start
class Solution:
    def rotateString(self, s: str, goal: str) -> bool:
        if len(s) != len(goal):
            return False
        if len(s) == 1:
            return s == goal
        for _ in range(0, len(s)):
            s = s[1:]+s[0]
            if s == goal:
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=8 lang=python3
#
# [8] \u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570 (atoi)
#
# @lc code=start
class Solution:
    MAX_VALUE = 2 ** 31 -1
    MIN_VALUE = -2 ** 31
    a = MAX_VALUE // 10
    b = MAX_VALUE % 10
    c = - MIN_VALUE // 10
    d = (- MIN_VALUE) % 10
    def myAtoi(self, s: str) -> int:
        sum_num = 0
        sign = False
        symbol = 1
        for ss in s:
            if '0' <= ss and ss <= '9':
                sign = True
                i = int(ss)
                if symbol > 0 and ((sum_num == Solution.a and i > Solution.b) or sum_num > Solution.a):
                    return Solution.MAX_VALUE
                if symbol < 0 and ((sum_num == Solution.c and i > Solution.d) or sum_num > Solution.c):
                    return Solution.MIN_VALUE
                sum_num = sum_num * 10 + i
            else:
                if sign:
                    break
                if ss == '-' or ss == '+':
                    symbol = -1 if ss == '-' else 1
                    sign = True
                    continue
                if ss != ' ':
                    break
        return symbol * sum_num
# @lc code=end`,`#
# @lc app=leetcode.cn id=80 lang=python3
#
# [80] \u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879 II
#
# @lc code=start
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return len(nums)
        i = 2
        while i < len(nums):
            if nums[i] == nums[i - 1] and nums[i] == nums[i - 2]:
                del nums[i]
            else:
                i += 1
        return len(nums)
# @lc code=end`,`#
# @lc app=leetcode.cn id=81 lang=python3
#
# [81] \u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4 II
#
# @lc code=start
from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        s = 0
        e = len(nums) - 1
        while s <= e:
            m = (s + e) // 2
            if nums[m] == target:
                return True
            if nums[s] == nums[m] and nums[m] == nums[e]:
                s += 1
                e -= 1
            elif nums[s] <= nums[m]:
                if nums[s] <= target and target <= nums[m]:
                    e = m - 1
                else:
                    s = m + 1
            else:
                if nums[m] < target and target <= nums[-1]:
                    s = m + 1
                else:
                    e = m - 1
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=82 lang=python3
#
# [82] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20 II
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        root = head
        f = head
        is_i = False
        while head is not None:
            if head.next is not None and head.val == head.next.val:
                head.next = head.next.next
                is_i = True
                continue
            if is_i:
                if f == head:
                    f = head.next
                    head = head.next
                    root = f
                else:
                    f.next = head.next
                    head = head.next
                is_i = False
            else:
                f = head
                head = head.next
        return root
# @lc code=end`,`#
# @lc app=leetcode.cn id=83 lang=python3
#
# [83] \u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        values = []
        if head == None:
            return head
        hsc = head
        values.append(hsc.val)
        hc = head.next
        while hc != None:
            if hc.val not in values:
                values.append(hc.val)
                hsc = hc
                hc = hc.next
            else:
                hsc.next = hc.next
                hc = hsc.next
        return head
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=84 lang=cpp
 *
 * [84] \u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62
 */
#include <vector>
#include <stack>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int ans = 0;
        heights.push_back(0);
        heights.insert(heights.begin(), 0);
        stack<int> s;
        s.push(0);
        for (size_t i = 1; i < heights.size(); i++) {
            while (!s.empty() && heights[i] < heights[s.top()]) {
                int j = s.top();
                s.pop();
                int a = heights[j] * (i - s.top() - 1);
                ans = max(ans, a);
            }
            s.push(i);
        }
        return ans;
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=84 lang=python3
#
# [84] \u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62
#
# @lc code=start
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        left = [0] * n
        right = [n] * n
        l = []
        for i in range(n):
            while len(l) > 0 and heights[l[-1]] >= heights[i]:
                right[l[-1]] = i
                l.pop()
            left[i] = l[-1] if len(l) > 0 else -1
            l.append(i)
        return max([(right[i] - left[i] - 1) * heights[i] for i in range(n)]) if len(heights) > 0 else 0 
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=85 lang=cpp
 *
 * [85] \u6700\u5927\u77E9\u5F62
 */
#include <vector>
#include <tuple>
#include <stack>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int largestRectangleArea(vector<int> heights) {
        int area = 0;
        heights.push_back(0);
        heights.insert(heights.begin(), 0);
        stack<int> s;
        s.push(0);
        for (size_t i = 1; i < heights.size(); i++) {
            while (!s.empty() && heights[i] < heights[s.top()]) {
                int j = s.top();
                s.pop();
                int a = heights[j] * (i - s.top() - 1);
                area = max(area, a);
            }
            s.push(i);
        }
        return area;
    }
    int maximalRectangle(vector<vector<char>>& matrix) {
        int area;
        vector<int> heights;
        for (size_t i = 0; i < matrix[0].size(); i++) {
            heights.push_back(0);
        }
        for (size_t i = 0; i < matrix.size(); i++) {
            for (size_t j = 0; j < matrix[i].size(); j++) {
                if (matrix[i][j] == '0') {
                    heights[j] = 0;
                } else {
                    heights[j] += 1;
                }
            }
            area = max(area, largestRectangleArea(heights));
        }
        return area;
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=86 lang=python3
#
# [86] \u5206\u9694\u94FE\u8868
#
# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        root = ListNode()
        root.next = head
        front = root
        hf = root
        while head is not None:
            if head.val < x:
                r = head
                hf.next = head.next
                head = head.next
                if hf == front:
                    hf = r
                r.next = front.next 
                front.next = r
                front = r
            else:
                hf = head
                head = head.next
        return root.next
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=87 lang=cpp
 *
 * [87] \u6270\u4E71\u5B57\u7B26\u4E32
 */
#include <string>
#include <unordered_map>
using namespace std;
// @lc code=start
class Solution {
private:
    unordered_map<string, bool> cache;
public:
    bool isSame(string s1, string s2) {
        if (s1.length() != s2.length()) {
            return false;
        }
        unordered_map<char, int> maps;
        for (size_t i = 0; i < s1.length(); i++) {
            if (maps.count(s1.at(i)) > 0) {
                maps[s1.at(i)] += 1;
            } else {
                maps.emplace(s1.at(i), 1);
            }
        }
        for (size_t i = 0; i < s2.length(); i++) {
            if (maps.count(s2.at(i)) == 0) {
                return false;
            }
            maps[s2.at(i)] -= 1;
            if (maps[s2.at(i)] < 0) {
                return false;
            }
        }
        return true;
    }
    bool isS(string s1, string s2) {
        if (cache.count(s1 + s2) > 0) {
            return cache[s1 + s2];
        }
        if (s1 == s2) {
            return true;
        }
        bool r1 = false;
        bool r2 = false;
        for (size_t i = 1; i < s1.length(); i++) {
            string s11 = s1.substr(0, i);
            string s22 = s2.substr(0, i);
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(i, s1.length()), s2.substr(i, s2.length()));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(i, s1.length()) + s2.substr(i, s2.length()), r2);
                if (r1 && r2) return true;
            }
            s22 = s2.substr(s2.length() - i, s2.length());
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(i, s1.length()), s2.substr(0, s2.length() - i));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(i, s1.length()) + s2.substr(0, s2.length() - i), r2);
                if (r1 && r2) return true;
            }
            s11 = s1.substr(s1.length() - i, s1.length());
            s22 = s2.substr(0, i);
            if (isSame(s11, s22)) {
                r1 = isS(s11, s22);
                r2 = isS(s1.substr(0, s1.length() - i), s2.substr(i, s2.length()));
                cache.emplace(s11 + s22, r1);
                cache.emplace(s1.substr(0, s1.length() - i) + s2.substr(i, s2.length()), r2);
                if (r1 && r2) return true;
            }
        }
        return false;
    }
    bool isScramble(string s1, string s2) {
        cache.clear();
        return isS(s1, s2);
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] \u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast = head
    let slow = head
    while (true) {
        if (fast === null || fast.next === null) {
            return slow
        }
        slow = slow.next
        fast = fast.next.next
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=88 lang=python3
#
# [88] \u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4
#
# @lc code=start
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        while m > 0 and n > 0:
            if nums1[m - 1] < nums2[n - 1]:
                nums1[m + n - 1] = nums2[n - 1]
                n -= 1
            else:
                nums1[m + n - 1] = nums1[m - 1]
                m -= 1
        if n > 0:
            while n > 0:
                nums1[n - 1] = nums2[n - 1]
                n -= 1
# @lc code=end`,`#
# @lc app=leetcode.cn id=89 lang=python3
#
# [89] \u683C\u96F7\u7F16\u7801
#
# @lc code=start
class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = [0, 1]
        for i in range(1, n):
            j = 1 << i
            for k in range(len(result) - 1, -1, -1):
                result.append(result[k] + j) 
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=9 lang=python3
#
# [9] \u56DE\u6587\u6570
#
# @lc code=start
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        y = x
        x_sum = 0
        while y != 0:
            z = y % 10
            y = y // 10
            x_sum = x_sum * 10 + z
        return x == x_sum
# @lc code=end`,`#
# @lc app=leetcode.cn id=90 lang=python3
#
# [90] \u5B50\u96C6 II
#
# @lc code=start
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        result = []
        rm = set()
        def swd(r):
            if len(r) == len(nums):
                s = []
                a = ''
                for i, rr in enumerate(r):
                    if rr == 1:
                        s.append(nums[i])
                        a +=str(nums[i])
                if a not in rm:
                    result.append(s)
                    rm.add(a)
                return
            r.append(1)
            swd(r)
            r.pop()
            r.append(0)
            swd(r)
            r.pop()
        swd([])
        return result
# @lc code=end`,`#
# @lc app=leetcode.cn id=91 lang=python3
#
# [91] \u89E3\u7801\u65B9\u6CD5
#
# @lc code=start
class Solution:
    def numDecodings(self, s: str) -> int:
        a = 0
        b = 1
        c = 0
        for i in range(1, len(s) + 1):
            c = 0
            if s[i - 1] != '0':
                c += b
            if i > 1 and s[i - 2] != '0' and int(s[i - 2: i]) <= 26:
                c += a
            a, b = b, c
        return c
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=92 lang=java
 *
 * [92] \u53CD\u8F6C\u94FE\u8868 II
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode root = new ListNode();
        root.next = head;
        ListNode first = root;
        boolean hasLeft = false;
        ListNode middle = null;
        ListNode end = null;
        int i = 1;
        while(head != null) {
            if (i == left) {
                hasLeft = true;
            } 
            ListNode x = head.next;
            if (!hasLeft) {
                first = head;
            } else {
                if (i == left) {
                    end = head;
                }
                head.next = middle;
                middle = head;
            }
            if (i == right) {
                first.next = middle;
                end.next = x;
                break;
            }
            i ++;
            head = x;
        }
        return root.next;
    }
}
// @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=93 lang=java
 *
 * [93] \u590D\u539F IP \u5730\u5740
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
// @lc code=end`,`#
# @lc app=leetcode.cn id=94 lang=python3
#
# [94] \u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def it(r):
            if r != None:
                it(r.left)
                result.append(r.val)
                it(r.right)
        it(root)
        return result
# @lc code=end`,`import java.util.LinkedList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=95 lang=java
 *
 * [95] \u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811 II
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<TreeNode>  gt(int s, int e) {
        List<TreeNode> allTrees = new LinkedList<>();
        if (s > e) {
            allTrees.add(null);
            return allTrees;
        }
        for (int i = s; i <=e; i++) {
            List<TreeNode> leftTrees = gt(s, i - 1);
            List<TreeNode> rightTrees = gt(i + 1, e);
            for (TreeNode leftNode : leftTrees) {
                for (TreeNode rightNode : rightTrees) {
                    allTrees.add(new TreeNode(i, leftNode, rightNode));
                }
            }
        }
        return allTrees;
    }
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new LinkedList();
        }
        return gt(1, n);
    }
}
// @lc code=end`,`import java.util.HashMap;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=96 lang=java
 *
 * [96] \u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
class Solution {
    static Map<Integer, Integer> map = new HashMap<>();
    public int nt(int s, int e) {
        int es = (e * 100) + s;
        if (map.containsKey(es)) {
            return map.get(es);
        }
        if (s > e) {
            return 1;
        }
        int a = 0;
        for (int i = s; i <= e; i++) {
            int l = nt(s, i - 1);
            int r = nt(i + 1, e);
            a += (l * r);
        }
        map.put(es, a);
        return a;
    }
    public int numTrees(int n) {
        if (n == 0) {
            return 0;
        }
        return nt(1, n);
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=97 lang=java
 *
 * [97] \u4EA4\u9519\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        int a = s1.length();
        int b = s2.length();
        boolean[] m = new boolean[b + 1];
        m[0] = true;
        for (int i = 0; i <= a; i++) {
            for (int j = 0; j <= b; j++) {
                int p = i + j - 1;
                if (i > 0) {
                    m[j] = (m[j] && s1.charAt(i - 1) == s3.charAt(p));
                } 
                if (j > 0) {
                    m[j] |= (m[j - 1] && s2.charAt(j - 1) == s3.charAt(p));
                }
            }
        }
        return m[b];
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=98 lang=java
 *
 * [98] \u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    static Integer min = null;
    public boolean iVBST(TreeNode r) {
        if (r == null) {
            return false;
        }
        boolean l= iVBST(r.left);
        if (min != null && r.val <= min) {
            return true;
        } else {
            min = r.val;
        }
        boolean rr = iVBST(r.right);
        return l | rr;
    }
    public boolean isValidBST(TreeNode root) {
        min = null;
        return !iVBST(root);
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
import javax.swing.tree.TreeNode;
/*
 * @lc app=leetcode.cn id=99 lang=java
 *
 * [99] \u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public void recoverTree(TreeNode root) {
        Deque<TreeNode> stack = new ArrayDeque<>();
        TreeNode x = null, y = null, f = null;
        while (!stack.isEmpty() || root != null) {
            while (root != null) {
                stack.push(root);
                root = root.left;
            }
            root = stack.pop();
            if (f != null && f.val > root.val) {
                y = root;
                if (x == null) {
                    x = f;
                } else {
                    // \u627E\u5230\u4E24\u6B21
                    break;
                }
            }
            f = root;
            root = root.right;
        }
        swap(x, y);
    }
    public void swap(TreeNode x, TreeNode y) {
        int tmp = x.val;
        x.val = y.val;
        y.val = tmp;
    }
}
// @lc code=end`],re=["\u4E24\u6570\u4E4B\u548C","\u4E24\u6570\u4E4B\u548C","\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D","\u76F8\u540C\u7684\u6811","\u5BF9\u79F0\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u952F\u9F7F\u5F62\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","\u6700\u957F\u91CD\u590D\u5B50\u4E32","\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386-ii","\u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811","\u6709\u5E8F\u94FE\u8868\u8F6C\u6362\u4E8C\u53C9\u641C\u7D22\u6811","\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668","\u5E73\u8861\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6","\u8DEF\u5F84\u603B\u548C","\u8DEF\u5F84\u603B\u548C-ii","\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868","\u4E0D\u540C\u7684\u5B50\u5E8F\u5217","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488-ii","\u6768\u8F89\u4E09\u89D2","\u6768\u8F89\u4E09\u89D2-ii","\u4EA4\u66FF\u6253\u5370\u5B57\u7B26\u4E32","\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57","\u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-iii","\u9A8C\u8BC1\u56DE\u6587\u4E32","\u6700\u957F\u8FDE\u7EED\u5E8F\u5217","\u6C42\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u6570\u5B57\u4E4B\u548C","\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570","\u88AB\u56F4\u7ED5\u7684\u533A\u57DF","\u5206\u5272\u56DE\u6587\u4E32","\u5206\u5272\u56DE\u6587\u4E32-ii","\u514B\u9686\u56FE","\u52A0\u6CB9\u7AD9","\u5206\u53D1\u7CD6\u679C","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-ii","\u590D\u5236\u5E26\u968F\u673A\u6307\u9488\u7684\u94FE\u8868","\u5355\u8BCD\u62C6\u5206","\u6700\u957F\u516C\u5171\u524D\u7F00","\u73AF\u5F62\u94FE\u8868","\u73AF\u5F62\u94FE\u8868-ii","\u91CD\u6392\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386","lru-\u7F13\u5B58","\u5BF9\u94FE\u8868\u8FDB\u884C\u63D2\u5165\u6392\u5E8F","\u6392\u5E8F\u94FE\u8868","\u4E09\u6570\u4E4B\u548C","\u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD","\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4","\u5BFB\u627E\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C","\u6700\u5C0F\u6808","\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C","\u76F8\u4EA4\u94FE\u8868","\u5BFB\u627E\u5CF0\u503C","\u4E24\u4E2A\u76F8\u540C\u5B57\u7B26\u4E4B\u95F4\u7684\u6700\u957F\u5B50\u5B57\u7B26\u4E32","\u6BD4\u8F83\u7248\u672C\u53F7","\u5206\u6570\u5230\u5C0F\u6570","\u4E24\u6570\u4E4B\u548C-ii-\u8F93\u5165\u6709\u5E8F\u6570\u7EC4","excel\u8868\u5217\u540D\u79F0","\u591A\u6570\u5143\u7D20","\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408","excel-\u8868\u5217\u5E8F\u53F7","\u9636\u4E58\u540E\u7684\u96F6","\u4E8C\u53C9\u641C\u7D22\u6811\u8FED\u4EE3\u5668","\u6700\u5927\u6570","\u56DB\u6570\u4E4B\u548C","\u91CD\u590D\u7684dna\u5E8F\u5217","\u8F6E\u8F6C\u6570\u7EC4","\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9","\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D","\u4F4D-1-\u7684\u4E2A\u6570","\u6253\u5BB6\u52AB\u820D","\u4E8C\u53C9\u6811\u7684\u53F3\u89C6\u56FE","\u4E24\u6570\u76F8\u52A0","\u4E24\u6570\u76F8\u52A0","\u6709\u6548\u7684\u62EC\u53F7","\u5C9B\u5C7F\u6570\u91CF","\u6570\u5B57\u8303\u56F4\u6309\u4F4D\u4E0E","\u5FEB\u4E50\u6570","\u79FB\u9664\u94FE\u8868\u5143\u7D20","\u8BA1\u6570\u8D28\u6570","\u8BA1\u6570\u8D28\u6570","\u540C\u6784\u5B57\u7B26\u4E32","\u53CD\u8F6C\u94FE\u8868","\u8BFE\u7A0B\u8868","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","\u5B58\u5728\u91CD\u590D\u5143\u7D20","\u4F7F\u4E24\u5B57\u7B26\u4E32\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u7684\u6700\u5C11\u6B65\u9AA4\u6570","\u5B58\u5728\u91CD\u590D\u5143\u7D20-ii","\u62EC\u53F7\u751F\u6210","\u7528\u961F\u5217\u5B9E\u73B0\u6808","\u7FFB\u8F6C\u4E8C\u53C9\u6811","\u6C47\u603B\u533A\u95F4","\u5408\u5E76k\u4E2A\u5347\u5E8F\u94FE\u8868","2-\u7684\u5E42","\u7528\u6808\u5B9E\u73B0\u961F\u5217","\u77E5\u9053\u79D8\u5BC6\u7684\u4EBA\u6570","\u56DE\u6587\u94FE\u8868","\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84","\u5404\u4F4D\u76F8\u52A0","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879","\u4E11\u6570","\u4E22\u5931\u7684\u6570\u5B57","\u79FB\u9664\u5143\u7D20","\u79FB\u9664\u5143\u7D20","\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B9E\u73B0-str-str","\u79FB\u52A8\u96F6","\u4E24\u6570\u76F8\u9664","\u5355\u8BCD\u89C4\u5F8B","nim-\u6E38\u620F","\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","\u533A\u57DF\u548C\u68C0\u7D22-\u6570\u7EC4\u4E0D\u53EF\u53D8","\u4E0B\u4E00\u4E2A\u6392\u5217","\u53BB\u9664\u91CD\u590D\u5B57\u6BCD","\u6700\u957F\u6709\u6548\u62EC\u53F7","\u96F6\u94B1\u5151\u6362","3-\u7684\u5E42","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4","\u6BD4\u7279\u4F4D\u8BA1\u6570","\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E","4-\u7684\u5E42","\u53CD\u8F6C\u5B57\u7B26\u4E32","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6-ii","\u6709\u6548\u7684\u6570\u72EC","\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570","\u89E3\u6570\u72EC","\u731C\u6570\u5B57\u5927\u5C0F","\u5916\u89C2\u6570\u5217","\u8D4E\u91D1\u4FE1","\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","\u627E\u4E0D\u540C","\u7EC4\u5408\u603B\u548C","\u5224\u65AD\u5B50\u5E8F\u5217","\u81F3\u5C11\u6709-k-\u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u7EC4\u5408\u603B\u548C-ii","\u4E8C\u8FDB\u5236\u624B\u8868","\u4E8C\u8FDB\u5236\u624B\u8868","\u5DE6\u53F6\u5B50\u4E4B\u548C","\u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570","\u6700\u957F\u56DE\u6587\u4E32","\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570","fizz-buzz","\u7B2C\u4E09\u5927\u7684\u6570","\u5B57\u7B26\u4E32\u76F8\u52A0","\u63A5\u96E8\u6C34","\u5B57\u7B26\u4E32\u76F8\u4E58","\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570","\u901A\u914D\u7B26\u5339\u914D","\u6392\u5217\u786C\u5E01","\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u636E","\u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57","\u8DF3\u8DC3\u6E38\u620F-ii","\u5206\u53D1\u997C\u5E72","\u91CD\u590D\u7684\u5B50\u5B57\u7B26\u4E32","\u5168\u6392\u5217","\u6C49\u660E\u8DDD\u79BB","\u5C9B\u5C7F\u7684\u5468\u957F","\u5168\u6392\u5217-ii","\u6570\u5B57\u7684\u8865\u6570","\u65CB\u8F6C\u56FE\u50CF","\u5BC6\u94A5\u683C\u5F0F\u5316","\u6700\u5927\u8FDE\u7EED-1-\u7684\u4E2A\u6570","\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5206\u7EC4","\u6784\u9020\u77E9\u5F62","\u63D0\u83AB\u653B\u51FB","\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-i","\u6700\u957F\u56DE\u6587\u5B50\u4E32","pow-x-n","\u952E\u76D8\u884C","n-\u7687\u540E","n\u7687\u540E-ii","\u6700\u5927\u5B50\u6570\u7EC4\u548C","\u87BA\u65CB\u77E9\u9635","\u8DF3\u8DC3\u6E38\u620F","\u5408\u5E76\u533A\u95F4","\u63D2\u5165\u533A\u95F4","\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6","\u87BA\u65CB\u77E9\u9635-ii","z-\u5B57\u5F62\u53D8\u6362","\u6392\u5217\u5E8F\u5217","\u65CB\u8F6C\u94FE\u8868","\u4E0D\u540C\u8DEF\u5F84","\u4E0D\u540C\u8DEF\u5F84-ii","\u6700\u5C0F\u8DEF\u5F84\u548C","\u6709\u6548\u6570\u5B57","\u52A0\u4E00","\u4E8C\u8FDB\u5236\u6C42\u548C","\u6587\u672C\u5DE6\u53F3\u5BF9\u9F50","sqrt-x","\u6574\u6570\u53CD\u8F6C","\u722C\u697C\u68AF","\u722C\u697C\u68AF","\u7B80\u5316\u8DEF\u5F84","\u7F16\u8F91\u8DDD\u79BB","\u77E9\u9635\u7F6E\u96F6","\u641C\u7D22\u4E8C\u7EF4\u77E9\u9635","\u989C\u8272\u5206\u7C7B","\u6700\u5C0F\u8986\u76D6\u5B50\u4E32","\u7EC4\u5408","\u5B50\u96C6","\u5355\u8BCD\u641C\u7D22","\u65CB\u8F6C\u5B57\u7B26\u4E32","\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570-atoi","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879-ii","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4-ii","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20-ii","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20","\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","\u6700\u5927\u77E9\u5F62","\u5206\u9694\u94FE\u8868","\u6270\u4E71\u5B57\u7B26\u4E32","\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4","\u683C\u96F7\u7F16\u7801","\u56DE\u6587\u6570","\u5B50\u96C6-ii","\u89E3\u7801\u65B9\u6CD5","\u53CD\u8F6C\u94FE\u8868-ii","\u590D\u539F-ip-\u5730\u5740","\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811-ii","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811","\u4EA4\u9519\u5B57\u7B26\u4E32","\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","\u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811"],se=["js","py","py","py","py","java","java","py","py","java","java","java","py","java","py","py","py","py","java","java","cpp","java","java","py","py","java","py","java","py","java","java","py","java","java","py","java","js","java","py","js","java","py","js","py","js","py","py","js","js","py","py","js","java","java","py","java","java","java","java","py","py","py","java","py","java","cpp","cpp","py","py","py","py","cpp","cpp","cpp","py","java","java","py","py","py","java","java","cpp","py","py","java","java","py","py","cpp","java","py","py","java","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","py","py","py","py","py","py","java","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","java","js","js","py","js","js","js","py","py","js","py","js","py","js","py","java","java","py","java","java","py","java","py","java","java","py","java","java","java","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","cpp","py","cpp","py","cpp","js","py","py","py","py","py","java","java","py","java","java","java","java","java"],le=[[0,1],[1,1],[82,2],[83,2],[127,3],[187,5],[199,6],[210,7],[223,8],[236,9],[2,10],[14,11],[26,12],[34,13],[45,14],[54,15],[60,16],[69,17],[74,18],[77,19],[84,20],[94,21],[98,22],[102,23],[109,24],[111,25],[114,26],[117,27],[118,27],[122,28],[124,29],[128,30],[130,31],[132,32],[135,33],[137,34],[142,35],[144,36],[146,37],[148,38],[152,39],[155,40],[161,41],[165,42],[166,43],[168,44],[172,45],[175,46],[178,47],[180,48],[183,49],[188,50],[190,51],[191,52],[192,53],[193,54],[194,55],[195,56],[196,57],[197,58],[198,59],[200,60],[201,61],[202,62],[203,63],[204,64],[205,65],[206,66],[207,67],[208,68],[209,69],[211,70],[212,70],[213,71],[214,72],[215,73],[216,74],[217,75],[218,76],[219,77],[220,78],[221,79],[224,80],[225,81],[226,82],[227,83],[228,84],[229,84],[230,85],[231,86],[232,87],[234,88],[235,89],[237,90],[238,91],[239,92],[240,93],[241,94],[242,95],[243,96],[244,97],[245,98],[246,99],[3,100],[4,101],[5,102],[6,103],[7,104],[9,105],[10,106],[11,107],[12,108],[13,109],[15,110],[16,111],[17,112],[18,113],[19,114],[20,115],[21,116],[22,117],[23,118],[24,119],[27,120],[28,121],[29,122],[30,123],[31,125],[32,128],[33,129],[35,130],[36,131],[37,132],[38,133],[39,134],[40,135],[41,136],[42,137],[43,138],[44,139],[46,141],[47,142],[48,143],[49,144],[50,145],[51,146],[52,147],[53,148],[55,150],[56,151],[57,152],[58,153],[59,155],[61,160],[62,162],[64,165],[65,166],[66,167],[67,168],[68,169],[70,171],[71,172],[72,173],[73,179],[75,187],[76,189],[78,190],[79,191],[80,198],[81,199],[85,200],[86,201],[87,202],[88,203],[89,204],[90,204],[91,205],[92,206],[93,207],[95,217],[97,219],[99,225],[100,226],[101,228],[103,231],[104,232],[106,234],[107,235],[108,237],[110,242],[112,257],[113,258],[115,263],[116,268],[119,278],[120,279],[121,279],[123,283],[125,290],[126,292],[129,303],[131,316],[133,322],[134,326],[136,338],[138,342],[139,344],[140,345],[141,349],[143,350],[145,367],[147,374],[149,383],[150,387],[151,389],[153,392],[154,395],[156,401],[157,401],[158,404],[159,405],[160,409],[162,412],[163,414],[164,415],[167,434],[169,441],[170,442],[171,448],[173,455],[174,459],[176,461],[177,463],[179,476],[181,482],[182,485],[184,492],[185,495],[186,496],[189,500],[222,796],[233,876],[8,1044],[25,1195],[63,1624],[96,2186],[105,2327]],ae=["js","py","java","cpp"],oe=[[0,1],[36,131],[39,134],[42,137],[44,139],[47,142],[48,143],[51,146],[159,405],[160,409],[162,412],[163,414],[164,415],[167,434],[169,441],[171,448],[233,876]],ce=[[1,1],[83,2],[127,3],[187,5],[199,6],[210,7],[223,8],[236,9],[2,10],[14,11],[26,12],[34,13],[45,14],[54,15],[60,16],[69,17],[74,18],[77,19],[84,20],[94,21],[98,22],[102,23],[109,24],[111,25],[114,26],[118,27],[122,28],[124,29],[128,30],[130,31],[132,32],[135,33],[137,34],[142,35],[144,36],[146,37],[148,38],[152,39],[155,40],[161,41],[165,42],[166,43],[168,44],[172,45],[175,46],[178,47],[180,48],[183,49],[188,50],[190,51],[191,52],[192,53],[193,54],[194,55],[195,56],[196,57],[197,58],[198,59],[200,60],[201,61],[202,62],[203,63],[204,64],[205,65],[206,66],[207,67],[208,68],[209,69],[212,70],[213,71],[214,72],[215,73],[216,74],[217,75],[218,76],[219,77],[220,78],[221,79],[224,80],[225,81],[226,82],[227,83],[229,84],[231,86],[234,88],[235,89],[237,90],[238,91],[241,94],[3,100],[4,101],[7,104],[12,108],[15,110],[16,111],[17,112],[23,118],[24,119],[28,121],[31,125],[38,133],[41,136],[43,138],[46,141],[49,144],[50,145],[59,155],[61,160],[67,168],[68,169],[70,171],[78,190],[79,191],[87,202],[88,203],[91,205],[92,206],[95,217],[97,219],[99,225],[100,226],[101,228],[103,231],[104,232],[106,234],[107,235],[108,237],[110,242],[112,257],[113,258],[115,263],[116,268],[119,278],[121,279],[123,283],[125,290],[126,292],[129,303],[131,316],[133,322],[134,326],[136,338],[138,342],[139,344],[140,345],[141,349],[143,350],[145,367],[147,374],[149,383],[150,387],[151,389],[153,392],[154,395],[157,401],[170,442],[222,796],[8,1044],[63,1624],[96,2186]],de=[[117,27],[211,70],[239,92],[240,93],[242,95],[243,96],[244,97],[245,98],[246,99],[5,102],[6,103],[9,105],[10,106],[11,107],[13,109],[18,113],[19,114],[21,116],[22,117],[27,120],[29,122],[30,123],[32,128],[33,129],[35,130],[37,132],[40,135],[52,147],[53,148],[55,150],[56,151],[57,152],[58,153],[62,162],[64,165],[75,187],[76,189],[80,198],[81,199],[85,200],[86,201],[90,204],[93,207],[120,279],[156,401],[158,404],[173,455],[174,459],[176,461],[177,463],[179,476],[181,482],[182,485],[184,492],[185,495],[186,496],[189,500],[25,1195],[105,2327]],ue=[[82,2],[228,84],[230,85],[232,87],[20,115],[65,166],[66,167],[71,172],[72,173],[73,179],[89,204]],fe={code:ie,name:re,type:se,number:le,allTypes:ae,js:oe,py:ce,java:de,cpp:ue},pe={github:"https://github.com/ncdhz/leetcode/",codeMessage:{java:{name:"Java"},py:{name:"Python"},js:{name:"JavaScript"},c:{name:"C Language"},cpp:{name:"C++"},cs:{name:"C#"},ts:{name:"TypeScript"},rb:{name:"Ruby"},swift:{name:"Swift"},scala:{name:"Scala"},kt:{name:"Kotlin"},rust:{name:"Rust"},php:{name:"PHP"},rkt:{name:"Racket"},elixir:{name:"Elixir"},dart:{name:"Dart"},go:{name:"Go"}},itemSpace:10,menuSpace:5,authorImg:"./logo.png",startFlag:"code=start",endFlag:"code=end"};var me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright-circle",theme:"outlined"};const ge=me;function wn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){he(o,c,i[c])})}return o}function he(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var hn=function(s,i){var r=wn({},s,i.attrs);return F(sn,wn({},r,{icon:ge}),null)};hn.displayName="CopyrightCircleOutlined";hn.inheritAttrs=!1;const In=hn;var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const ve=ye;function Sn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){_e(o,c,i[c])})}return o}function _e(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var yn=function(s,i){var r=Sn({},s,i.attrs);return F(sn,Sn({},r,{icon:ve}),null)};yn.displayName="GithubOutlined";yn.inheritAttrs=!1;const xe=yn;var be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};const je=be;function kn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Ne(o,c,i[c])})}return o}function Ne(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var vn=function(s,i){var r=kn({},s,i.attrs);return F(sn,kn({},r,{icon:je}),null)};vn.displayName="MenuOutlined";vn.inheritAttrs=!1;const we=vn;var Se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z"}}]},name:"ordered-list",theme:"outlined"};const ke=Se;function Ln(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Le(o,c,i[c])})}return o}function Le(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var _n=function(s,i){var r=Ln({},s,i.attrs);return F(sn,Ln({},r,{icon:ke}),null)};_n.displayName="OrderedListOutlined";_n.inheritAttrs=!1;const Te=_n;var Ae={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"};const ze=Ae;function Tn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Fe(o,c,i[c])})}return o}function Fe(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var xn=function(s,i){var r=Tn({},s,i.attrs);return F(sn,Tn({},r,{icon:ze}),null)};xn.displayName="UnorderedListOutlined";xn.inheritAttrs=!1;const Ce=xn,Ie=K("Home"),Dn=W({__name:"CodeMainMenu",props:{theme:{type:String,default:"dark",require:!1},mode:{type:String,default:"horizontal",require:!1},inlineCollapsed:{type:Boolean,default:!1}},setup(o){var d;const s=(d=en())==null?void 0:d.proxy,i=P([0]);function r({key:t}){t!==i.value[0]&&(s==null||s.$bus.emit("menuItemId",t))}const c=s==null?void 0:s.$config;return(t,n)=>{const e=q("a-menu-item"),v=q("a-menu");return L(),D(v,{theme:o.theme,mode:o.mode,inlineCollapsed:o.inlineCollapsed,selectedKeys:i.value,"onUpdate:selectedKeys":n[0]||(n[0]=u=>i.value=u),style:{lineHeight:"64px"},onClick:r},{default:z(()=>{var u;return[(L(),D(e,{key:0},{default:z(()=>[Ie]),_:1})),(L(!0),X(Q,null,dn((u=t.$db)==null?void 0:u.allTypes,(g,h)=>(L(),D(e,{key:h+1},{default:z(()=>{var j;return[K(J((j=N(c))==null?void 0:j.codeMessage[g].name),1)]}),_:2},1024))),128))]}),_:1},8,["theme","mode","inlineCollapsed","selectedKeys"])}}}),On=W({__name:"CodeSearch",setup(o){const s=en(),i=s==null?void 0:s.proxy,r=i==null?void 0:i.$bus,c=i==null?void 0:i.$db,d=i==null?void 0:i.$config,t=P(""),n=P([]);function e(u,g){r==null||r.emit("searchId",g.id)}function v(u){const g=new RegExp(u);let h=[];for(const j of c==null?void 0:c.number)(g.test(c==null?void 0:c.name[j[0]])||g.test(""+j[1]))&&h.push({value:`${j[1]}.${c==null?void 0:c.name[j[0]]} ${d==null?void 0:d.codeMessage[c==null?void 0:c.type[j[0]]].name}`,id:j});h.length>6&&(h=h.slice(0,6)),n.value=h}return(u,g)=>{const h=q("a-auto-complete");return L(),D(h,{value:t.value,"onUpdate:value":g[0]||(g[0]=j=>t.value=j),style:{width:"150px"},placeholder:"number or name",onSelect:e,onSearch:v,options:n.value,"dropdown-match-select-width":210},null,8,["value","options"])}}}),De={class:"logo"},Oe=["href"],qe=W({__name:"CodeHeader",setup(o){var r;const s=(r=en())==null?void 0:r.proxy,i=s==null?void 0:s.$config;return(c,d)=>{const t=q("a-space"),n=q("a-layout-header");return L(),D(n,{class:"header"},{default:z(()=>[nn("div",De,[F(t,{align:"center",size:20},{default:z(()=>{var e;return[F(On),nn("a",{href:(e=N(i))==null?void 0:e.github},[F(N(xe),{class:"logo_icon"})],8,Oe)]}),_:1})]),F(Dn)]),_:1})}}});var qn={exports:{}};(function(o){var s=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(r){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,t={},n={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function a(l){return l instanceof e?new e(l.type,a(l.content),l.alias):Array.isArray(l)?l.map(a):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++d}),a.__id},clone:function a(l,m){m=m||{};var p,y;switch(n.util.type(l)){case"Object":if(y=n.util.objId(l),m[y])return m[y];p={},m[y]=p;for(var b in l)l.hasOwnProperty(b)&&(p[b]=a(l[b],m));return p;case"Array":return y=n.util.objId(l),m[y]?m[y]:(p=[],m[y]=p,l.forEach(function(C,f){p[f]=a(C,m)}),p);default:return l}},getLanguage:function(a){for(;a;){var l=c.exec(a.className);if(l)return l[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,l){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+l)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(p){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(p.stack)||[])[1];if(a){var l=document.getElementsByTagName("script");for(var m in l)if(l[m].src==a)return l[m]}return null}},isActive:function(a,l,m){for(var p="no-"+l;a;){var y=a.classList;if(y.contains(l))return!0;if(y.contains(p))return!1;a=a.parentElement}return!!m}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(a,l){var m=n.util.clone(n.languages[a]);for(var p in l)m[p]=l[p];return m},insertBefore:function(a,l,m,p){p=p||n.languages;var y=p[a],b={};for(var C in y)if(y.hasOwnProperty(C)){if(C==l)for(var f in m)m.hasOwnProperty(f)&&(b[f]=m[f]);m.hasOwnProperty(C)||(b[C]=y[C])}var _=p[a];return p[a]=b,n.languages.DFS(n.languages,function(x,S){S===_&&x!=a&&(this[x]=b)}),b},DFS:function a(l,m,p,y){y=y||{};var b=n.util.objId;for(var C in l)if(l.hasOwnProperty(C)){m.call(l,C,l[C],p||C);var f=l[C],_=n.util.type(f);_==="Object"&&!y[b(f)]?(y[b(f)]=!0,a(f,m,null,y)):_==="Array"&&!y[b(f)]&&(y[b(f)]=!0,a(f,m,C,y))}}},plugins:{},highlightAll:function(a,l){n.highlightAllUnder(document,a,l)},highlightAllUnder:function(a,l,m){var p={callback:m,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",p),p.elements=Array.prototype.slice.apply(p.container.querySelectorAll(p.selector)),n.hooks.run("before-all-elements-highlight",p);for(var y=0,b;b=p.elements[y++];)n.highlightElement(b,l===!0,p.callback)},highlightElement:function(a,l,m){var p=n.util.getLanguage(a),y=n.languages[p];n.util.setLanguage(a,p);var b=a.parentElement;b&&b.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(b,p);var C=a.textContent,f={element:a,language:p,grammar:y,code:C};function _(S){f.highlightedCode=S,n.hooks.run("before-insert",f),f.element.innerHTML=f.highlightedCode,n.hooks.run("after-highlight",f),n.hooks.run("complete",f),m&&m.call(f.element)}if(n.hooks.run("before-sanity-check",f),b=f.element.parentElement,b&&b.nodeName.toLowerCase()==="pre"&&!b.hasAttribute("tabindex")&&b.setAttribute("tabindex","0"),!f.code){n.hooks.run("complete",f),m&&m.call(f.element);return}if(n.hooks.run("before-highlight",f),!f.grammar){_(n.util.encode(f.code));return}if(l&&r.Worker){var x=new Worker(n.filename);x.onmessage=function(S){_(S.data)},x.postMessage(JSON.stringify({language:f.language,code:f.code,immediateClose:!0}))}else _(n.highlight(f.code,f.grammar,f.language))},highlight:function(a,l,m){var p={code:a,grammar:l,language:m};if(n.hooks.run("before-tokenize",p),!p.grammar)throw new Error('The language "'+p.language+'" has no grammar.');return p.tokens=n.tokenize(p.code,p.grammar),n.hooks.run("after-tokenize",p),e.stringify(n.util.encode(p.tokens),p.language)},tokenize:function(a,l){var m=l.rest;if(m){for(var p in m)l[p]=m[p];delete l.rest}var y=new g;return h(y,y.head,a),u(a,y,l,y.head,0),I(y)},hooks:{all:{},add:function(a,l){var m=n.hooks.all;m[a]=m[a]||[],m[a].push(l)},run:function(a,l){var m=n.hooks.all[a];if(!(!m||!m.length))for(var p=0,y;y=m[p++];)y(l)}},Token:e};r.Prism=n;function e(a,l,m,p){this.type=a,this.content=l,this.alias=m,this.length=(p||"").length|0}e.stringify=function a(l,m){if(typeof l=="string")return l;if(Array.isArray(l)){var p="";return l.forEach(function(_){p+=a(_,m)}),p}var y={type:l.type,content:a(l.content,m),tag:"span",classes:["token",l.type],attributes:{},language:m},b=l.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(y.classes,b):y.classes.push(b)),n.hooks.run("wrap",y);var C="";for(var f in y.attributes)C+=" "+f+'="'+(y.attributes[f]||"").replace(/"/g,"&quot;")+'"';return"<"+y.tag+' class="'+y.classes.join(" ")+'"'+C+">"+y.content+"</"+y.tag+">"};function v(a,l,m,p){a.lastIndex=l;var y=a.exec(m);if(y&&p&&y[1]){var b=y[1].length;y.index+=b,y[0]=y[0].slice(b)}return y}function u(a,l,m,p,y,b){for(var C in m)if(!(!m.hasOwnProperty(C)||!m[C])){var f=m[C];f=Array.isArray(f)?f:[f];for(var _=0;_<f.length;++_){if(b&&b.cause==C+","+_)return;var x=f[_],S=x.inside,A=!!x.lookbehind,w=!!x.greedy,O=x.alias;if(w&&!x.pattern.global){var $=x.pattern.toString().match(/[imsuy]*$/)[0];x.pattern=RegExp(x.pattern.source,$+"g")}for(var H=x.pattern||x,B=p.next,V=y;B!==l.tail&&!(b&&V>=b.reach);V+=B.value.length,B=B.next){var Y=B.value;if(l.length>a.length)return;if(!(Y instanceof e)){var ln=1,U;if(w){if(U=v(H,V,a,A),!U||U.index>=a.length)break;var an=U.index,Bn=U.index+U[0].length,G=V;for(G+=B.value.length;an>=G;)B=B.next,G+=B.value.length;if(G-=B.value.length,V=G,B.value instanceof e)continue;for(var tn=B;tn!==l.tail&&(G<Bn||typeof tn.value=="string");tn=tn.next)ln++,G+=tn.value.length;ln--,Y=a.slice(V,G),U.index-=V}else if(U=v(H,0,Y,A),!U)continue;var an=U.index,on=U[0],un=Y.slice(0,an),bn=Y.slice(an+on.length),fn=V+Y.length;b&&fn>b.reach&&(b.reach=fn);var cn=B.prev;un&&(cn=h(l,cn,un),V+=un.length),j(l,cn,ln);var Rn=new e(C,S?n.tokenize(on,S):on,O,on);if(B=h(l,cn,Rn),bn&&h(l,B,bn),ln>1){var pn={cause:C+","+_,reach:fn};u(a,l,m,B.prev,V,pn),b&&pn.reach>b.reach&&(b.reach=pn.reach)}}}}}}function g(){var a={value:null,prev:null,next:null},l={value:null,prev:a,next:null};a.next=l,this.head=a,this.tail=l,this.length=0}function h(a,l,m){var p=l.next,y={value:m,prev:l,next:p};return l.next=y,p.prev=y,a.length++,y}function j(a,l,m){for(var p=l.next,y=0;y<m&&p!==a.tail;y++)p=p.next;l.next=p,p.prev=l,a.length-=y}function I(a){for(var l=[],m=a.head.next;m!==a.tail;)l.push(m.value),m=m.next;return l}if(!r.document)return r.addEventListener&&(n.disableWorkerMessageHandler||r.addEventListener("message",function(a){var l=JSON.parse(a.data),m=l.language,p=l.code,y=l.immediateClose;r.postMessage(n.highlight(p,n.languages[m],m)),y&&r.close()},!1)),n;var k=n.util.currentScript();k&&(n.filename=k.src,k.hasAttribute("data-manual")&&(n.manual=!0));function T(){n.manual||n.highlightAll()}if(!n.manual){var E=document.readyState;E==="loading"||E==="interactive"&&k&&k.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return n}(s);o.exports&&(o.exports=i),typeof gn<"u"&&(gn.Prism=i)})(qn);const mn=qn.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(o){var s=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,i=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};o.languages.java=o.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+i+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:s,function:[o.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),o.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),o.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:s,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+i+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+i+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(o){var s=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,i=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return s.source});o.languages.cpp=o.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:s,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),o.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return i})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),o.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o.languages.cpp}}}}),o.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),o.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:o.languages.extend("cpp",{})}}),o.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},o.languages.cpp["base-clause"])})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var o="line-numbers",s=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,n){if(!(t.tagName!=="PRE"||!t.classList.contains(o))){var e=t.querySelector(".line-numbers-rows");if(!!e){var v=parseInt(t.getAttribute("data-start"),10)||1,u=v+(e.children.length-1);n<v&&(n=v),n>u&&(n=u);var g=n-v;return e.children[g]}}},resize:function(t){r([t])},assumeViewportIndependence:!0};function r(t){if(t=t.filter(function(e){var v=c(e),u=v["white-space"];return u==="pre-wrap"||u==="pre-line"}),t.length!=0){var n=t.map(function(e){var v=e.querySelector("code"),u=e.querySelector(".line-numbers-rows");if(!(!v||!u)){var g=e.querySelector(".line-numbers-sizer"),h=v.textContent.split(s);g||(g=document.createElement("span"),g.className="line-numbers-sizer",v.appendChild(g)),g.innerHTML="0",g.style.display="block";var j=g.getBoundingClientRect().height;return g.innerHTML="",{element:e,lines:h,lineHeights:[],oneLinerHeight:j,sizer:g}}}).filter(Boolean);n.forEach(function(e){var v=e.sizer,u=e.lines,g=e.lineHeights,h=e.oneLinerHeight;g[u.length-1]=void 0,u.forEach(function(j,I){if(j&&j.length>1){var k=v.appendChild(document.createElement("span"));k.style.display="block",k.textContent=j}else g[I]=h})}),n.forEach(function(e){for(var v=e.sizer,u=e.lineHeights,g=0,h=0;h<u.length;h++)u[h]===void 0&&(u[h]=v.children[g++].getBoundingClientRect().height)}),n.forEach(function(e){var v=e.sizer,u=e.element.querySelector(".line-numbers-rows");v.style.display="none",v.innerHTML="",e.lineHeights.forEach(function(g,h){u.children[h].style.height=g+"px"})})}}function c(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}var d=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&d===window.innerWidth||(d=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),Prism.hooks.add("complete",function(t){if(!!t.code){var n=t.element,e=n.parentNode;if(!(!e||!/pre/i.test(e.nodeName))&&!n.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(n,o)){n.classList.remove(o),e.classList.add(o);var v=t.code.match(s),u=v?v.length+1:1,g,h=new Array(u+1).join("<span></span>");g=document.createElement("span"),g.setAttribute("aria-hidden","true"),g.className="line-numbers-rows",g.innerHTML=h,e.hasAttribute("data-start")&&(e.style.counterReset="linenumber "+(parseInt(e.getAttribute("data-start"),10)-1)),t.element.appendChild(g),r([e]),Prism.hooks.run("line-numbers",t)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})})();const Ee=["innerHTML"],rn=W({__name:"CodeContent",props:{code:{type:String,require:!0},type:{type:String,require:!0},lineNumbers:{type:Boolean,default:!1}},setup(o){return zn(()=>{mn.highlightAll()}),(s,i)=>(L(),X("div",{class:jn(o.lineNumbers?"line-numbers":"")},[nn("pre",{style:{background:"#fff"},class:jn(`language-${o.type}`)},[nn("code",{innerHTML:N(mn).highlight(o.code,N(mn).languages[o.type],o.type)},null,8,Ee)],2)],2))}}),Pe=W({__name:"CodeItem",props:["data"],emits:["openCode"],setup(o,{emit:s}){const i=o,r=en(),c=r==null?void 0:r.proxy,d=c==null?void 0:c.$config,t=c==null?void 0:c.$db,n=P((t==null?void 0:t.type)[i.data[0]]);function e(j){let I=j.split(`
`),k=0,T=I.length-1,E=RegExp(d==null?void 0:d.startFlag),a=RegExp(d==null?void 0:d.endFlag);for(;k<I.length&&!E.test(I[k]);)k++;for(k++;T>=0&&!a.test(I[T]);)T--;return I.slice(k,T)}function v(){s("openCode")}function u(j){return j.length>6?j.slice(0,6).join(`
`)+`
...
`:j.join(`
`)}function g(){c.$copyText((t==null?void 0:t.code)[i.data[0]]).then(()=>{Z.success("Copy all succeeded.")},()=>{Z.error("Copy all failed.")})}function h(){c.$copyText(e((t==null?void 0:t.code)[i.data[0]]).join(`
`)).then(()=>{Z.success("Copy key succeeded.")},()=>{Z.error("Copy key failed.")})}return(j,I)=>{const k=q("a-avatar"),T=q("a-card-meta"),E=q("a-card");return L(),D(E,{hoverable:"",style:{"margin-bottom":"20px"}},{cover:z(()=>{var a;return[nn("div",{style:{margin:"0px 2%",width:"96%"},onClick:v},[F(rn,{type:n.value,code:u(e(((a=N(t))==null?void 0:a.code)[i.data[0]]))},null,8,["type","code"])])]}),actions:z(()=>[F(N(Fn),{key:"eye",onClick:v}),F(N(In),{key:"copy_key",onClick:h}),F(N(Cn),{key:"copy",onClick:g})]),default:z(()=>[F(T,{title:`Number: ${i.data[1]}`,description:N(t).name[i.data[0]]},{avatar:z(()=>[F(k,{src:N(d).authorImg},null,8,["src"])]),_:1},8,["title","description"])]),_:1})}}}),Me={style:{margin:"0px 2%",width:"96%"}},Be=W({__name:"CodeShow",props:["data"],setup(o){const s=o,i=en(),r=i==null?void 0:i.proxy,c=r==null?void 0:r.$config,d=r==null?void 0:r.$db,t=P((d==null?void 0:d.type)[s.data[0]]),n=P(!0),e=P(!0);function v(){n.value=!n.value}function u(){e.value=!e.value}function g(I){let k=I.split(`
`),T=0,E=k.length-1,a=RegExp(c==null?void 0:c.startFlag),l=RegExp(c==null?void 0:c.endFlag);for(;T<k.length&&!a.test(k[T]);)T++;for(T++;E>=0&&!l.test(k[E]);)E--;return k.slice(T,E).join(`
`)}function h(){r.$copyText((d==null?void 0:d.code)[s.data[0]]).then(()=>{Z.success("Copy all succeeded.")},()=>{Z.error("Copy all failed.")})}function j(){r.$copyText(g((d==null?void 0:d.code)[s.data[0]])).then(()=>{Z.success("Copy key succeeded.")},()=>{Z.error("Copy key failed.")})}return(I,k)=>{const T=q("a-space"),E=q("a-card");return L(),D(E,null,{title:z(()=>[F(T,{size:15},{default:z(()=>[n.value?(L(),D(N(Fn),{key:"eye",onClick:v})):M("",!0),n.value?M("",!0):(L(),D(N($n),{key:1,onClick:v})),e.value?(L(),D(N(Te),{key:2,onClick:u})):M("",!0),e.value?M("",!0):(L(),D(N(Ce),{key:3,onClick:u})),F(N(In),{key:"copy_key",onClick:j}),F(N(Cn),{key:"copy",onClick:h})]),_:1})]),cover:z(()=>{var a,l,m,p;return[nn("div",Me,[!n.value&&!e.value?(L(),D(rn,{key:0,type:t.value,code:g(((a=N(d))==null?void 0:a.code)[s.data[0]])},null,8,["type","code"])):M("",!0),n.value&&!e.value?(L(),D(rn,{key:1,type:t.value,code:((l=N(d))==null?void 0:l.code)[s.data[0]]},null,8,["type","code"])):M("",!0),!n.value&&e.value?(L(),D(rn,{key:2,"line-numbers":e.value,type:t.value,code:g(((m=N(d))==null?void 0:m.code)[s.data[0]])},null,8,["line-numbers","type","code"])):M("",!0),n.value&&e.value?(L(),D(rn,{key:3,"line-numbers":e.value,type:t.value,code:((p=N(d))==null?void 0:p.code)[s.data[0]]},null,8,["line-numbers","type","code"])):M("",!0)])]}),_:1})}}}),An=W({__name:"CodeMenu",props:{menuData:null,selectedKeys:null,openKeys:null},emits:["selectedKeysUpdate"],setup(o,{emit:s}){const i=o,r=P(i.menuData),c=P(i.selectedKeys),d=P(i.openKeys);Nn(i,async e=>{r.value=e.menuData,c.value=e.selectedKeys,d.value=e.openKeys}),Nn(c,async e=>{s("selectedKeysUpdate",e[0])});function t(e){return e.length===1?"Number: "+e[0][1]:"Number: "+e[0][1]+"-"+e[e.length-1][1]}function n(e){return e.length===1&&e[0].length==1?"Title No.:"+e[0][0]:"Title No.:"+e[0][0][1]+"-"+e[e.length-1][e[e.length-1].length-1][1]}return(e,v)=>{const u=q("a-menu-item"),g=q("a-sub-menu"),h=q("a-menu");return L(),D(h,{mode:"inline",selectedKeys:c.value,"onUpdate:selectedKeys":v[0]||(v[0]=j=>c.value=j),openKeys:d.value,"onUpdate:openKeys":v[1]||(v[1]=j=>d.value=j)},{default:z(()=>[(L(!0),X(Q,null,dn(r.value,j=>(L(),D(g,{key:j},{title:z(()=>[K(J(n(j)),1)]),default:z(()=>[(L(!0),X(Q,null,dn(j,I=>(L(),D(u,{key:I},{default:z(()=>[K(J(t(I)),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["selectedKeys","openKeys"])}}}),Re=K("Search"),$e=W({__name:"CodeDrawerMenu",emits:["closeDrawerMenu"],setup(o,{emit:s}){const i=P(!0);function r(){s("closeDrawerMenu")}return(c,d)=>{const t=q("a-menu-item"),n=q("a-sub-menu"),e=q("a-menu"),v=q("a-drawer");return L(),D(v,{placement:"left",closable:!1,visible:i.value,onClose:r,width:"280"},{default:z(()=>[F(Dn,{theme:"light"}),F(e,{mode:"inline"},{default:z(()=>[F(n,null,{title:z(()=>[Re]),default:z(()=>[F(t,null,{default:z(()=>[F(On)]),_:1})]),_:1})]),_:1}),Hn(c.$slots,"default")]),_:3},8,["visible"])}}}),He=K("Home"),Ue=K("All"),Ve=W({__name:"CodeMain",emits:["resize"],setup(o,{emit:s}){const i=en(),r=i==null?void 0:i.proxy,c=r==null?void 0:r.$bus,d=r==null?void 0:r.$config,t=r==null?void 0:r.$db,n=P(!1);function e(){n.value=!n.value}let v=P(0),u=P(!1),g=P([0,0]),h=P(!1);function j(p){let y="number";p!==0&&(y=t==null?void 0:t.allTypes[p-1]);let b=t==null?void 0:t[y],C=[],f=d==null?void 0:d.menuSpace,_=d==null?void 0:d.itemSpace,x=0;for(;x*f*_<b.length;){let S=[],A=0;for(;x*f*_+A*_<b.length&&A<f;){let w=0,O=[];for(;x*f*_+A*_+w<b.length&&w<_;)O.push(b[x*f*_+A*_+w]),w++;A++,S.push(O)}x++,C.push(S)}return C}const I=p=>{v.value=p,T.value=j(p),E.value=T.value[0][0],u.value=!1};function k(){const p=document.body.clientWidth;p<650&&!h.value?(h.value=!0,n.value=!1,I(0)):p>=650&&h.value&&(h.value=!1,n.value=!1,I(0)),s("resize",h.value)}window.onresize=k;let T=P(j(v.value));const E=P(T.value[0][0]);function a(p){E.value=p}zn(()=>{k()}),c==null||c.on("menuItemId",I),c==null||c.on("searchId",p=>{l(p)});function l(p){g.value=p,u.value=!0}function m(){u.value=!1}return(p,y)=>{const b=q("a-breadcrumb-item"),C=q("a-breadcrumb"),f=q("a-layout-sider"),_=q("a-button"),x=q("a-affix"),S=q("a-layout-content"),A=q("a-layout"),w=q("a-page-header"),O=q("a-layout-footer");return L(),X(Q,null,[F(S,{style:Un(N(h)?"padding: 0;":"padding: 0 50px;")},{default:z(()=>[N(h)?M("",!0):(L(),D(C,{key:0,style:{margin:"16px 0"}},{default:z(()=>[F(b,null,{default:z(()=>[He]),_:1}),N(u)?(L(),X(Q,{key:1},[F(b,null,{default:z(()=>[K(J(N(d).codeMessage[N(t).type[N(g)[0]]].name),1)]),_:1}),F(b,null,{default:z(()=>[K(J(N(t).name[N(g)[0]]),1)]),_:1})],64)):(L(),X(Q,{key:0},[N(v)==0?(L(),D(b,{key:0},{default:z(()=>[Ue]),_:1})):M("",!0),N(v)!=0?(L(),D(b,{key:1},{default:z(()=>[K(J(N(d).codeMessage[N(t).allTypes[N(v)-1]].name),1)]),_:1})):M("",!0)],64))]),_:1})),N(u)?M("",!0):(L(),D(A,{key:1,style:{padding:"24px 0",background:"#fff"}},{default:z(()=>[N(h)?M("",!0):(L(),D(f,{key:0,width:"200",style:{background:"#fff"}},{default:z(()=>[F(An,{"menu-data":N(T),"selected-keys":[N(T)[0][0]],"open-keys":[N(T)[0]],onSelectedKeysUpdate:a},null,8,["menu-data","selected-keys","open-keys"])]),_:1})),n.value?(L(),D($e,{key:1,onCloseDrawerMenu:e},{default:z(()=>[F(An,{"menu-data":N(T),"selected-keys":[N(T)[0][0]],"open-keys":[N(T)[0]],onSelectedKeysUpdate:a},null,8,["menu-data","selected-keys","open-keys"])]),_:1})):M("",!0),N(h)?(L(),D(x,{key:2,"offset-top":50},{default:z(()=>[F(_,{onClick:e},{icon:z(()=>[F(N(we))]),_:1})]),_:1})):M("",!0),F(S,{style:{padding:"0 24px",minHeight:"280px"}},{default:z(()=>[(L(!0),X(Q,null,dn(E.value,($,H)=>(L(),D(Pe,{key:H,onOpenCode:B=>l($),data:$},null,8,["onOpenCode","data"]))),128))]),_:1})]),_:1})),N(u)?(L(),D(A,{key:2,style:{background:"#fff",padding:"0px 24px 24px 24px"}},{default:z(()=>[F(w,{title:N(t).name[N(g)[0]],"sub-title":`Number: ${N(g)[1]}`,onBack:m},null,8,["title","sub-title"]),F(Be,{data:N(g)},null,8,["data"])]),_:1})):M("",!0)]),_:1},8,["style"]),N(h)?M("",!0):(L(),D(O,{key:0,style:{"text-align":"center"}}))],64)}}}),Ke=W({__name:"App",setup(o){let s=P(!1);function i(r){s.value=r}return(r,c)=>{const d=q("a-layout");return L(),D(d,null,{default:z(()=>[N(s)?M("",!0):(L(),D(qe,{key:0})),F(Ve,{onResize:i})]),_:1})}}});function We(o){return{all:o=o||new Map,on:function(s,i){var r=o.get(s);r?r.push(i):o.set(s,[i])},off:function(s,i){var r=o.get(s);r&&(i?r.splice(r.indexOf(i)>>>0,1):o.set(s,[]))},emit:function(s,i){var r=o.get(s);r&&r.slice().map(function(c){c(i)}),(r=o.get("*"))&&r.slice().map(function(c){c(s,i)})}}}const Ze=We();var En={exports:{}},Pn={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(o,s){(function(i,r){o.exports=r()})(gn,function(){return r={686:function(d,u,n){n.d(u,{default:function(){return C}});var u=n(279),e=n.n(u),u=n(370),v=n.n(u),u=n(817),g=n.n(u);function h(f){try{return document.execCommand(f)}catch{return}}var j=function(f){return f=g()(f),h("cut"),f};function I(A,_){var x,S,A=(x=A,S=document.documentElement.getAttribute("dir")==="rtl",(A=document.createElement("textarea")).style.fontSize="12pt",A.style.border="0",A.style.padding="0",A.style.margin="0",A.style.position="absolute",A.style[S?"right":"left"]="-9999px",S=window.pageYOffset||document.documentElement.scrollTop,A.style.top="".concat(S,"px"),A.setAttribute("readonly",""),A.value=x,A);return _.container.appendChild(A),_=g()(A),h("copy"),A.remove(),_}var k=function(f){var _=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},x="";return typeof f=="string"?x=I(f,_):f instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(f==null?void 0:f.type)?x=I(f.value,_):(x=g()(f),h("copy")),x};function T(f){return(T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _})(f)}var E=function(){var S=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},x=S.action,f=x===void 0?"copy":x,_=S.container,x=S.target,S=S.text;if(f!=="copy"&&f!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(x!==void 0){if(!x||T(x)!=="object"||x.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(f==="copy"&&x.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(f==="cut"&&(x.hasAttribute("readonly")||x.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return S?k(S,{container:_}):x?f==="cut"?j(x):k(x,{container:_}):void 0};function a(f){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _})(f)}function l(f,_){for(var x=0;x<_.length;x++){var S=_[x];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(f,S.key,S)}}function m(f,_){return(m=Object.setPrototypeOf||function(x,S){return x.__proto__=S,x})(f,_)}function p(f){var _=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var x,S=y(f);return x=_?(x=y(this).constructor,Reflect.construct(S,arguments,x)):S.apply(this,arguments),S=this,!(x=x)||a(x)!=="object"&&typeof x!="function"?function(A){if(A!==void 0)return A;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(S):x}}function y(f){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(_){return _.__proto__||Object.getPrototypeOf(_)})(f)}function b(f,_){if(f="data-clipboard-".concat(f),_.hasAttribute(f))return _.getAttribute(f)}var C=function(){(function(w,O){if(typeof O!="function"&&O!==null)throw new TypeError("Super expression must either be null or a function");w.prototype=Object.create(O&&O.prototype,{constructor:{value:w,writable:!0,configurable:!0}}),O&&m(w,O)})(A,e());var f,_,x,S=p(A);function A(w,O){var $;return function(H){if(!(H instanceof A))throw new TypeError("Cannot call a class as a function")}(this),($=S.call(this)).resolveOptions(O),$.listenClick(w),$}return f=A,x=[{key:"copy",value:function(w){var O=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(w,O)}},{key:"cut",value:function(w){return j(w)}},{key:"isSupported",value:function(){var w=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],w=typeof w=="string"?[w]:w,O=!!document.queryCommandSupported;return w.forEach(function($){O=O&&!!document.queryCommandSupported($)}),O}}],(_=[{key:"resolveOptions",value:function(){var w=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof w.action=="function"?w.action:this.defaultAction,this.target=typeof w.target=="function"?w.target:this.defaultTarget,this.text=typeof w.text=="function"?w.text:this.defaultText,this.container=a(w.container)==="object"?w.container:document.body}},{key:"listenClick",value:function(w){var O=this;this.listener=v()(w,"click",function($){return O.onClick($)})}},{key:"onClick",value:function(H){var O=H.delegateTarget||H.currentTarget,$=this.action(O)||"copy",H=E({action:$,container:this.container,target:this.target(O),text:this.text(O)});this.emit(H?"success":"error",{action:$,text:H,trigger:O,clearSelection:function(){O&&O.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(w){return b("action",w)}},{key:"defaultTarget",value:function(w){if(w=b("target",w),w)return document.querySelector(w)}},{key:"defaultText",value:function(w){return b("text",w)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&l(f.prototype,_),x&&l(f,x),A}()},828:function(d){var t;typeof Element>"u"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),d.exports=function(n,e){for(;n&&n.nodeType!==9;){if(typeof n.matches=="function"&&n.matches(e))return n;n=n.parentNode}}},438:function(d,t,n){var e=n(828);function v(u,g,h,j,I){var k=function(T,E,a,l){return function(m){m.delegateTarget=e(m.target,E),m.delegateTarget&&l.call(T,m)}}.apply(this,arguments);return u.addEventListener(h,k,I),{destroy:function(){u.removeEventListener(h,k,I)}}}d.exports=function(u,g,h,j,I){return typeof u.addEventListener=="function"?v.apply(null,arguments):typeof h=="function"?v.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(k){return v(k,g,h,j,I)}))}},879:function(d,t){t.node=function(n){return n!==void 0&&n instanceof HTMLElement&&n.nodeType===1},t.nodeList=function(n){var e=Object.prototype.toString.call(n);return n!==void 0&&(e==="[object NodeList]"||e==="[object HTMLCollection]")&&"length"in n&&(n.length===0||t.node(n[0]))},t.string=function(n){return typeof n=="string"||n instanceof String},t.fn=function(n){return Object.prototype.toString.call(n)==="[object Function]"}},370:function(d,t,n){var e=n(879),v=n(438);d.exports=function(u,g,h){if(!u&&!g&&!h)throw new Error("Missing required arguments");if(!e.string(g))throw new TypeError("Second argument must be a String");if(!e.fn(h))throw new TypeError("Third argument must be a Function");if(e.node(u))return E=g,a=h,(T=u).addEventListener(E,a),{destroy:function(){T.removeEventListener(E,a)}};if(e.nodeList(u))return j=u,I=g,k=h,Array.prototype.forEach.call(j,function(l){l.addEventListener(I,k)}),{destroy:function(){Array.prototype.forEach.call(j,function(l){l.removeEventListener(I,k)})}};if(e.string(u))return u=u,g=g,h=h,v(document.body,u,g,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var j,I,k,T,E,a}},817:function(d){d.exports=function(t){var n,e=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((n=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),e=window.getSelection(),(n=document.createRange()).selectNodeContents(t),e.removeAllRanges(),e.addRange(n),e.toString());return e}},279:function(d){function t(){}t.prototype={on:function(n,e,v){var u=this.e||(this.e={});return(u[n]||(u[n]=[])).push({fn:e,ctx:v}),this},once:function(n,e,v){var u=this;function g(){u.off(n,g),e.apply(v,arguments)}return g._=e,this.on(n,g,v)},emit:function(n){for(var e=[].slice.call(arguments,1),v=((this.e||(this.e={}))[n]||[]).slice(),u=0,g=v.length;u<g;u++)v[u].fn.apply(v[u].ctx,e);return this},off:function(n,e){var v=this.e||(this.e={}),u=v[n],g=[];if(u&&e)for(var h=0,j=u.length;h<j;h++)u[h].fn!==e&&u[h].fn._!==e&&g.push(u[h]);return g.length?v[n]=g:delete v[n],this}},d.exports=t,d.exports.TinyEmitter=t}},c={},i.n=function(d){var t=d&&d.__esModule?function(){return d.default}:function(){return d};return i.d(t,{a:t}),t},i.d=function(d,t){for(var n in t)i.o(t,n)&&!i.o(d,n)&&Object.defineProperty(d,n,{enumerable:!0,get:t[n]})},i.o=function(d,t){return Object.prototype.hasOwnProperty.call(d,t)},i(686).default;function i(d){if(c[d])return c[d].exports;var t=c[d]={exports:{}};return r[d](t,t.exports,i),t.exports}var r,c})})(Pn);(function(o,s){var i=Pn.exports,r={autoSetContainer:!1,appendToBody:!0},c={install:function(d){var t=d.version.slice(0,2)==="3."?d.config.globalProperties:d.prototype;t.$clipboardConfig=r,t.$copyText=function(n,e){return new Promise(function(v,u){var g=document.createElement("button"),h=new i(g,{text:function(){return n},action:function(){return"copy"},container:typeof e=="object"?e:document.body});h.on("success",function(j){h.destroy(),v(j)}),h.on("error",function(j){h.destroy(),u(j)}),r.appendToBody&&document.body.appendChild(g),g.click(),r.appendToBody&&document.body.removeChild(g)})},d.directive("clipboard",{bind:function(n,e,v){if(e.arg==="success")n._vClipboard_success=e.value;else if(e.arg==="error")n._vClipboard_error=e.value;else{var u=new i(n,{text:function(){return e.value},action:function(){return e.arg==="cut"?"cut":"copy"},container:r.autoSetContainer?n:void 0});u.on("success",function(g){var h=n._vClipboard_success;h&&h(g)}),u.on("error",function(g){var h=n._vClipboard_error;h&&h(g)}),n._vClipboard=u}},update:function(n,e){e.arg==="success"?n._vClipboard_success=e.value:e.arg==="error"?n._vClipboard_error=e.value:(n._vClipboard.text=function(){return e.value},n._vClipboard.action=function(){return e.arg==="cut"?"cut":"copy"})},unbind:function(n,e){!n._vClipboard||(e.arg==="success"?delete n._vClipboard_success:e.arg==="error"?delete n._vClipboard_error:(n._vClipboard.destroy(),delete n._vClipboard))}})},config:r};o.exports=c})(En);const Mn=En.exports,R=Vn(Ke);R.config.globalProperties.$bus=Ze;R.config.globalProperties.$db=fe;R.config.globalProperties.$config=pe;Mn.config.autoSetContainer=!0;R.config.globalProperties.$message=Z;R.use(Mn);R.use(Kn);R.use(Wn);R.use(Zn);R.use(Gn);R.use(Xn);R.use(Qn);R.use(Yn);R.use(Jn);R.use(ne);R.use(ee);R.use(te);R.mount("#app");
