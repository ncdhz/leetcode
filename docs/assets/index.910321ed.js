import{c as A,A as sn,d as $,g as en,r as R,a as M,o as k,b as D,w as E,e as V,f as X,h as dn,F as Y,t as J,u as N,i as nn,j as gn,k as En,n as jn,E as An,C as On,m as G,l as F,p as Bn,q as Nn,s as Hn,v as Wn,x as Kn,M as Vn,D as $n,y as Gn,B as Qn,S as Xn,L as Yn,z as Zn,G as Jn,H as ne,I as ee,P as te}from"./ant-design-vue.596c721c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const d of c)if(d.type==="childList")for(const t of d.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function i(c){const d={};return c.integrity&&(d.integrity=c.integrity),c.referrerpolicy&&(d.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?d.credentials="include":c.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(c){if(c.ep)return;c.ep=!0;const d=i(c);fetch(c.href,d)}})();const ie=[`/*
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
// @lc code=end`,`--
-- @lc app=leetcode.cn id=1050 lang=mysql
--
-- [1050] \u5408\u4F5C\u8FC7\u81F3\u5C11\u4E09\u6B21\u7684\u6F14\u5458\u548C\u5BFC\u6F14
--
-- @lc code=start
# Write your MySQL query statement below
select
    actor_id, director_id
from
    (select
        actor_id, director_id, count(\`timestamp\`) as c
    from
        ActorDirector
    group by
        actor_id, director_id) f
where
    c >= 3
-- @lc code=end`,`import java.util.Arrays;
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=1084 lang=mysql
--
-- [1084] \u9500\u552E\u5206\u6790III
--
-- @lc code=start
# Write your MySQL query statement below
select
    p.product_id, p.product_name
from
    Product p, (select
        product_id, max(sale_date) as max_sale_date,
        min(sale_date) as min_sale_date
    from
        Sales
    group by
        product_id
    ) s
where
    p.product_id = s.product_id
    and min_sale_date between "2019-01-01" and "2019-03-31"
    and max_sale_date between "2019-01-01" and "2019-03-31"
-- @lc code=end`,`/*
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
// @lc code=end`,`--
-- @lc app=leetcode.cn id=1141 lang=mysql
--
-- [1141] \u67E5\u8BE2\u8FD130\u5929\u6D3B\u8DC3\u7528\u6237\u6570
--
-- @lc code=start
# Write your MySQL query statement below
select
    activity_date as \`day\`, count(\`user_id\`) as active_users
from
    (select
        activity_date, \`user_id\`
    from
        Activity
    where
        activity_date between "2019-06-28" and "2019-07-27"
    group by
        \`user_id\`, activity_date) f
group by
    activity_date
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=1148 lang=mysql
--
-- [1148] \u6587\u7AE0\u6D4F\u89C8 I
--
-- @lc code=start
# Write your MySQL query statement below
select
    distinct author_id as id
from 
    Views
where
    author_id = viewer_id
order by
    author_id
-- @lc code=end`,`/*
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
// @lc code=end`,`--
-- @lc app=leetcode.cn id=1158 lang=mysql
--
-- [1158] \u5E02\u573A\u5206\u6790 I
--
-- @lc code=start
# Write your MySQL query statement below
select
    u.user_id as buyer_id, join_date, if(isnull(orders_in_2019), 0, orders_in_2019) as orders_in_2019
from
    Users u
left join    
    (select
        count(order_date) as orders_in_2019, buyer_id
    from
        Orders o
    where
        order_date between "2019-01-01" and "2019-12-31"
    group by
        buyer_id) f
on
    u.user_id = buyer_id
-- @lc code=end`,`import java.util.ArrayDeque;
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
// @lc code=end`,`--
-- @lc app=leetcode.cn id=1179 lang=mysql
--
-- [1179] \u91CD\u65B0\u683C\u5F0F\u5316\u90E8\u95E8\u8868
--
-- @lc code=start
# Write your MySQL query statement below
select
    id,
    sum(case when month="Jan" then revenue end) as Jan_Revenue,
    sum(case when month="Feb" then revenue end) as Feb_Revenue,
    sum(case when month="Mar" then revenue end) as Mar_Revenue,
    sum(case when month="Apr" then revenue end) as Apr_Revenue,
    sum(case when month="May" then revenue end) as May_Revenue,
    sum(case when month="Jun" then revenue end) as Jun_Revenue,
    sum(case when month="Jul" then revenue end) as Jul_Revenue,
    sum(case when month="Aug" then revenue end) as Aug_Revenue,
    sum(case when month="Sep" then revenue end) as Sep_Revenue,
    sum(case when month="Oct" then revenue end) as Oct_Revenue,
    sum(case when month="Nov" then revenue end) as Nov_Revenue,
    sum(case when month="Dec" then revenue end) as Dec_Revenue
from 
    Department
group by
    id
-- @lc code=end`,`#
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
        int buy1 = -prices[0];
        int buy2 = -prices[0];
        int sell1 = 0;
        int sell2 = 0;
        for (int i = 1; i < prices.length; i++) {
            buy1 = Math.max(buy1, -prices[i]);
            sell1 = Math.max(sell1, buy1 + prices[i]);
            buy2 = Math.max(buy2, sell1 - prices[i]);
            sell2 = Math.max(sell2, buy2 + prices[i]);
        }
        return sell2;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] \u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A III
 */
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
};
// @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=1235 lang=java
 *
 * [1235] \u89C4\u5212\u517C\u804C\u5DE5\u4F5C
 */
// @lc code=start
class Solution {
    class Data {
        int startTime;
        int endTime;
        int profit;
        Data(int startTime, int endTime, int profit) {
            this.startTime = startTime;
            this.endTime = endTime;
            this.profit = profit;
        }
    }
    public int binarySearch(Data[] jobs, int right, int target) {
        int left = 0;
        while(left < right) {
            int mid = (left + right) / 2;
            if (jobs[mid].endTime > target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    public int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        Data[] ds = new Data[startTime.length];
        for (int i = 0; i < ds.length; i++) {
            ds[i] = new Data(startTime[i], endTime[i], profit[i]);
        }
        Arrays.sort(ds, (a, b) -> {return a.endTime - b.endTime;});
        int[] dp = new int[startTime.length + 1];
        for (int i = 1; i < dp.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[binarySearch(ds, i, ds[i - 1].startTime)] + ds[i - 1].profit);
        }
        return dp[startTime.length];
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=126 lang=java
 *
 * [126] \u5355\u8BCD\u63A5\u9F99 II
 */
// @lc code=start
class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
    }
}
// @lc code=end`,`import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=127 lang=java
 *
 * [127] \u5355\u8BCD\u63A5\u9F99
 */
// @lc code=start
class Solution {
    int idNumber = 0;
    Map<String, Integer> ids = new HashMap<>();
    List<Set<Integer>> edges = new ArrayList<>();
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        if (!wordList.contains(endWord)) {
            return 0;
        }
        addEdge(beginWord);
        for (String word : wordList) {
            addEdge(word);
        }
        // \u4ECE\u5F00\u59CB\u8282\u70B9\u5411\u7EC8\u6B62\u8282\u70B9\u5FAA\u73AF
        int[] ss = new int[idNumber];
        Arrays.fill(ss, Integer.MAX_VALUE);
        int beginId = ids.get(beginWord);
        ss[beginId] = 0;
        Queue<Integer> qb = new LinkedList<>();
        qb.add(beginId);
        // \u4ECE\u7EC8\u6B62\u8282\u70B9\u5411\u5F00\u59CB\u8282\u70B9\u5FAA\u73AF
        int[] es = new int[idNumber];
        Arrays.fill(es, Integer.MAX_VALUE);
        int endId = ids.get(endWord);
        es[endId] = 0;
        Queue<Integer> qe = new LinkedList<>();
        qe.add(endId);
        while (!qb.isEmpty() && !qe.isEmpty()) {
            // \u4ECE\u4E0A\u5F80\u4E0B
            int bs = qb.size();
            for (int i = 0; i < bs; i++) {
                int bid = qb.poll();
                if (es[bid] != Integer.MAX_VALUE) {
                    return (es[bid] + ss[bid]) / 2 + 1;
                }
                for (Integer j: edges.get(bid)) {
                    if (ss[j] == Integer.MAX_VALUE) {
                        ss[j] = ss[bid] + 1;
                        qb.add(j);
                    }
                }
            }
            // \u4ECE\u4E0B\u5F80\u4E0A
            bs = qe.size();
            for (int i = 0; i < bs; i++) {
                int eid = qe.poll();
                if (ss[eid] != Integer.MAX_VALUE) {
                    return (es[eid] + ss[eid]) / 2 + 1;
                }
                for (Integer j: edges.get(eid)) {
                    if (es[j] == Integer.MAX_VALUE) {
                        es[j] = es[eid] + 1;
                        qe.add(j);
                    }
                }
            }
        }
        return 0;
    }
    private void addEdge(String word) {
        int id = getId(word);
        char[] cs = word.toCharArray();
        for (int i = 0; i < word.length(); i++) {
            char tmp = cs[i];
            cs[i] = '_';
            int cid = getId(new String(cs));
            edges.get(id).add(cid);
            edges.get(cid).add(id);
            cs[i] = tmp;
        }
    }
    private int getId(String word) {
        if (!ids.containsKey(word)) {
            ids.put(word, idNumber ++);
            edges.add(new HashSet<>());
        }
        return ids.get(word);
    }
}
// @lc code=end`,`import java.util.HashSet;
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=1620 lang=java
 *
 * [1620] \u7F51\u7EDC\u4FE1\u53F7\u6700\u597D\u7684\u5750\u6807
 */
// @lc code=start
class Solution {
    public int[] bestCoordinate(int[][] towers, int radius) {
        int xMax = Integer.MIN_VALUE;
        int yMax = Integer.MIN_VALUE;
        for (int[] tower: towers) {
            xMax = xMax > tower[0] ? xMax : tower[0];
            yMax = yMax > tower[1] ? yMax : tower[1];
        }
        int sum = 0;
        int[] r = {0, 0};
        for (int x = 0; x < xMax + 1; x++) {
            for (int y = 0; y < yMax + 1; y++) {
                int s = 0;
                for (int j = 0; j < towers.length; j++) {
                    int xx = x - towers[j][0];
                    int yy = y - towers[j][1];
                    double z = Math.sqrt(xx * xx + yy * yy);
                    if (z <= radius) {
                        s += Math.floor(towers[j][2] / (1 + z));
                    }
                }
                if (s > sum) {
                    sum = s;
                    r[0] = x;
                    r[1] = y;
                } 
            }
        }
        return r;
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
 * @lc app=leetcode.cn id=1662 lang=java
 *
 * [1662] \u68C0\u67E5\u4E24\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u662F\u5426\u76F8\u7B49
 */
// @lc code=start
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        int i = 0;
        int j = 0;
        int m = 0;
        int n = 0;
        while (i < word1.length && m < word2.length) {
            if (j >= word1[i].length()) {
                j = 0;
                i++;
            }
            if (n >= word2[m].length()) {
                n = 0;
                m++;
            }
            if (m >= word2.length || i >= word1.length) {
                break;
            }
            if (word1[i].charAt(j) != word2[m].charAt(n)) {
                break;
            }
            j++;
            n++;
        }
        if (word1.length == i  && word2.length ==  m) {
            return true;
        }
        return false;
    }
}
// @lc code=end`,`#include <string>
#include <algorithm>
using namespace std;
/*
 * @lc app=leetcode.cn id=1668 lang=cpp
 *
 * [1668] \u6700\u5927\u91CD\u590D\u5B50\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
public:
    int maxRepeating(string sequence, string word) {
        if (sequence.size() < word.size()) {
            return 0;
        }
        int rM = 0;
        int r = 0;
        for (int k = 0; k < sequence.size() - word.size() + 1; k++){
            for (int i = k; i < sequence.size() - word.size() + 1; i++) {
                bool isS = true;
                for (int j = 0; j < word.size(); j++) {
                    if (sequence[i + j] != word[j]) {
                        isS = false;
                        break;
                    }
                }
                if (isS) {
                    r++;
                    i += word.size() - 1;
                } else {
                    break;
                }
            }
            rM = max(rM, r);
            r = 0;
        }
        return rM;
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=1678 lang=cpp
 *
 * [1678] \u8BBE\u8BA1 Goal \u89E3\u6790\u5668
 */
#include <stack>
#include <sstream>
using namespace std;
// @lc code=start
class Solution {
public:
    string interpret(string command) {
        stack<char> sc;
        stringstream s;
        char c;
        for (size_t i = 0; i < command.size(); i++) {
            if (command[i] == 'G') {
                s << "G";
            } else if (command[i] == ')') {
                int j = 0;
                while ((c = sc.top()) != '(') {
                    sc.pop();
                    j++;
                }
                sc.pop();
                if (j == 0) {
                    s << "o";
                } else {
                    s << "al";
                }
            } else {
                sc.push(command[i]);
            }
        }
        return s.str();
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=1684 lang=cpp
 *
 * [1684] \u7EDF\u8BA1\u4E00\u81F4\u5B57\u7B26\u4E32\u7684\u6570\u76EE
 */
#include <set>
#include <string>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int countConsistentStrings(string allowed, vector<string>& words) {
        set<char> s;
        for (size_t i = 0; i < allowed.size(); i++) {
            s.insert(allowed[i]);
        }
        int sum = 0;
        for (size_t i = 0; i < words.size(); i++) {
            bool is_ok = true;
            for (size_t j = 0; j < words[i].size(); j++) {
                if (s.count(words[i][j]) == 0) {
                    is_ok = false;
                    break;
                }
            }
            if (is_ok) {
                sum++;
            }            
        }
        return sum;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=1700 lang=java
 *
 * [1700] \u65E0\u6CD5\u5403\u5348\u9910\u7684\u5B66\u751F\u6570\u91CF
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=1704 lang=cpp
 *
 * [1704] \u5224\u65AD\u5B57\u7B26\u4E32\u7684\u4E24\u534A\u662F\u5426\u76F8\u4F3C
 */
#include <vector>
#include <string>
#include <set>
using namespace std;
// @lc code=start
class Solution {
public:
    bool halvesAreAlike(string s) {
        set<char> cache;
        cache.insert('A');
        cache.insert('E');
        cache.insert('I');
        cache.insert('O');
        cache.insert('U');
        cache.insert('a');
        cache.insert('e');
        cache.insert('i');
        cache.insert('o');
        cache.insert('u');
        int l1 = 0;
        int l2 = 0;
        for (size_t i = 0; i < s.size() / 2; i++) {
            if (cache.count(s[i]) > 0) {
                l1++;
            }
            if (cache.count(s[s.size() - 1 - i]) > 0) {
                l2++;
            }
        }
        return l1 == l2;
    }
};
// @lc code=end`,`#
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
// @lc code=end`,`import java.util.Arrays;
/*
 * @lc app=leetcode.cn id=174 lang=java
 *
 * [174] \u5730\u4E0B\u57CE\u6E38\u620F
 */
// @lc code=start
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        int[][] ds = new int[m + 1][n  + 1];
        for (int i = 0; i <= m; i++) {
            Arrays.fill(ds[i], Integer.MAX_VALUE);
        }
        ds[m - 1][n] = 1;
        ds[m][n - 1] = 1;
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                ds[i][j] =Math.max(Math.min(ds[i][j + 1], ds[i + 1][j]) - dungeon[i][j], 1);
            }
        }
        return ds[0][0];
    }
}
// @lc code=end`,`--
-- @lc app=leetcode.cn id=175 lang=mysql
--
-- [175] \u7EC4\u5408\u4E24\u4E2A\u8868
--
-- @lc code=start
# Write your MySQL query statement below
select firstName, lastName, city, state from Person left join Address on Person.PersonId = Address.PersonId
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=176 lang=mysql
--
-- [176] \u7B2C\u4E8C\u9AD8\u7684\u85AA\u6C34
--
-- @lc code=start
# Write your MySQL query statement below
select ifnull((select max(salary) from Employee where salary < (select max(salary) from Employee)), NULL) as SecondHighestSalary;
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=1768 lang=java
 *
 * [1768] \u4EA4\u66FF\u5408\u5E76\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public String mergeAlternately(String word1, String word2) {
        int i = 0;
        int j = 0;
        int k = 0;
        char[] s = new char[word1.length() + word2.length()];
        while (i < word1.length() || j < word2.length()) {
            if (i < word1.length()) {
                s[k] = word1.charAt(i);
                i++;
                k++;
            }
            if (j < word2.length()) {
                s[k] = word2.charAt(j);
                j++;
                k++;
            }
        }
        return new String(s);
    }
}
// @lc code=end`,`--
-- @lc app=leetcode.cn id=177 lang=mysql
--
-- [177] \u7B2CN\u9AD8\u7684\u85AA\u6C34
--
-- @lc code=start
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE N_1 int DEFAULT N - 1;
  RETURN (
    # Write your MySQL query statement below.
    select salary from Employee group by salary order by salary desc limit N_1, 1
  );
END
-- @lc code=end`,`import java.util.List;
/*
 * @lc app=leetcode.cn id=1773 lang=java
 *
 * [1773] \u7EDF\u8BA1\u5339\u914D\u68C0\u7D22\u89C4\u5219\u7684\u7269\u54C1\u6570\u91CF
 */
// @lc code=start
class Solution {
    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {
        int ri = 0;
        if (ruleKey.equals("color")) {
            ri = 1;
        } else if (ruleKey.equals("name")) {
            ri = 2;
        }
        int sum = 0;
        for (List<String> l : items) {
            if (l.get(ri).equals(ruleValue)) {
                sum++;
            }
        }
        return sum;
    }
}
// @lc code=end`,`--
-- @lc app=leetcode.cn id=178 lang=mysql
--
-- [178] \u5206\u6570\u6392\u540D
--
-- @lc code=start
# Write your MySQL query statement below
select Scores.score, \`rank\` from Scores, (select row_number() over(order by score desc) as \`rank\`, score from Scores group by score) as s where s.score = Scores.score order by \`rank\`;
-- @lc code=end`,`/*
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=180 lang=mysql
--
-- [180] \u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57
--
-- @lc code=start
# Write your MySQL query statement below
select distinct t.Num as ConsecutiveNums from 
(select 
    case @nn when Num then
        @n := @n + 1
    else
        @n := 1
    end as n,
    @nn := Num,
    Num
from Logs a, (select @n := 1, @nn := '') b) as t 
where t.n >= 3;
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=181 lang=mysql
--
-- [181] \u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5
--
-- @lc code=start
# Write your MySQL query statement below
select e1.name as Employee from Employee e1, Employee e2 where e1.managerId = e2.id and e1.salary > e2.salary;
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=182 lang=mysql
--
-- [182] \u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1
--
-- @lc code=start
# Write your MySQL query statement below
 select Email from  (select count(Email) as n, Email from Person group by Email) t where n > 1;
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=1822 lang=java
 *
 * [1822] \u6570\u7EC4\u5143\u7D20\u79EF\u7684\u7B26\u53F7
 */
// @lc code=start
class Solution {
    public int arraySign(int[] nums) {
        int n = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                return 0;
            } else if (nums[i] < 0) {
                n++;
            }
        }
        return n % 2 == 1 ? -1 : 1;
    }
}
// @lc code=end`,`--
-- @lc app=leetcode.cn id=183 lang=mysql
--
-- [183] \u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237
--
-- @lc code=start
# Write your MySQL query statement below
select Name as Customers from Customers where Customers.id not in (select CustomerId from Orders);
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=184 lang=mysql
--
-- [184] \u90E8\u95E8\u5DE5\u8D44\u6700\u9AD8\u7684\u5458\u5DE5
--
-- @lc code=start
# Write your MySQL query statement below
-- select dname as Department, name as Employee, Salary 
select e.name Employee, d.name as Department, Salary from Employee e, Department d where departmentId = d.id and (e.departmentId, Salary) in (select departmentId, max(Salary) from Employee group by Employee.departmentId);
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=185 lang=mysql
--
-- [185] \u90E8\u95E8\u5DE5\u8D44\u524D\u4E09\u9AD8\u7684\u6240\u6709\u5458\u5DE5
--
-- @lc code=start
# Write your MySQL query
select
    d.name as Department, e.name as Employee, Salary
from 
    Employee e, Department d
where
    3 > (
        select 
            count(distinct salary) 
        from 
            Employee e1
        where
            e1.salary > e.salary and e1.departmentId = e.departmentId
    ) and e.departmentId = d.id
-- @lc code=end`,`import java.util.Arrays;
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=196 lang=mysql
--
-- [196] \u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1
--
-- @lc code=start
# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below
delete from
    Person 
where
    id not in (select id from
            (select min(id) as id from Person group by email) t)
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=197 lang=mysql
--
-- [197] \u4E0A\u5347\u7684\u6E29\u5EA6
--
-- @lc code=start
# Write your MySQL query statement below
select
    w.id
from
    Weather w, Weather w1
where
    w.Temperature > w1.Temperature and dateDiff(w.recordDate, w1.recordDate) = 1
-- @lc code=end`,`/*
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
# @lc code=end`,`import java.util.HashMap;
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
    static Map<Integer, Boolean> isS = new HashMap<>();
    public boolean cF(Map<Integer, Set<Integer>> pres, Integer key, Set<Integer> sets) {
        if (isS.containsKey(key)) {
            return isS.get(key);
        }
        if (!pres.containsKey(key)) {
            isS.put(key, true);
            return true;
        }
        Set<Integer> ps = pres.get(key);
        for (Integer p : ps) {
            if (sets.contains(p)) {
                isS.put(key, false);
                return false;
            }
            sets.add(p);
            if (!cF(pres, p, sets)) {
                return false;
            }
            sets.remove(p);
        }
        isS.put(key, true);
        return true;
    }
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        isS.clear();
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
        for (int i = 0; i < numCourses; i++) {
            if (!cF(pres, i, new HashSet<>())) {
                return false;
            }
        }
        return true;
    }
}
// @lc code=end`,`import java.util.HashMap;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=208 lang=java
 *
 * [208] \u5B9E\u73B0 Trie (\u524D\u7F00\u6811)
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=209 lang=java
 *
 * [209] \u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int sum_ = 0;
        int j = 0;
        int min_ = 0;
        for (int i = 0; i < nums.length; i++) {
            sum_ += nums[i];
            while (sum_ >= target) {
                if (min_ == 0 || min_ > i - j + 1) {
                    min_ = i - j + 1;
                }
                sum_-= nums[j];
                j++;
            }
        }
        return min_;
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
# @lc code=end`,`import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/*
 * @lc app=leetcode.cn id=210 lang=java
 *
 * [210] \u8BFE\u7A0B\u8868 II
 */
// @lc code=start
class Solution {
    static Map<Integer, Boolean> isS = new HashMap<>();
    static int ri;
    public boolean fO(Map<Integer, Set<Integer>> pres, Integer key, Set<Integer> sets, int[] rs) {
        if (isS.containsKey(key)) {
            return isS.get(key);
        }
        for (Integer p: pres.get(key)) {
            if (sets.contains(p)) {
                isS.put(p, false);
                return false;
            }
            sets.add(p);
            if (!fO(pres, p, sets, rs)) {
                return false;
            }
            sets.remove(p);
        }
        rs[ri] = key;
        ri--;
        isS.put(key, true);
        return true;
    }
    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> pres = new HashMap<>();
        isS.clear();
        for (int i = 0; i < numCourses; i++) {
            pres.put(i, new HashSet<>());
        }
        for (int i = 0; i < prerequisites.length; i++) {
            pres.get(prerequisites[i][1]).add(prerequisites[i][0]);
        }
        int[] rs = new int[numCourses];
        ri = numCourses - 1;
        for (int i = 0; i < numCourses; i++) {
            if (!isS.containsKey(i)) {
                if (!fO(pres, i, new HashSet<>(), rs)) {
                    return new int[0];
                }
            }
        }
        return rs;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=211 lang=java
 *
 * [211] \u6DFB\u52A0\u4E0E\u641C\u7D22\u5355\u8BCD - \u6570\u636E\u7ED3\u6784\u8BBE\u8BA1
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=213 lang=java
 *
 * [213] \u6253\u5BB6\u52AB\u820D II
 */
// @lc code=start
class Solution {
    public int rr(int[] nums, int start, int end) {
        int a = nums[start];
        int b = nums[start + 1];
        int c;
        for (int i = start + 2; i <= end; i++) {
            c = a + nums[i];
            a = Math.max(a, b);
            b = c;
        }
        return a > b ? a : b;
    }
    public int rob(int[] nums) {
        if (nums.length == 1) {
            return nums[0];
        }
        if (nums.length == 2) {
            return Math.max(nums[0], nums[1]);
        }
        return Math.max(rr(nums, 0, nums.length - 2), rr(nums, 1, nums.length - 1));
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=215 lang=cpp
 *
 * [215] \u6570\u7EC4\u4E2D\u7684\u7B2CK\u4E2A\u6700\u5927\u5143\u7D20
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int fkl(vector<int> nums, int s, int e, int k) {
        int n = nums[s];
        int j = s;
        int i = s + 1;
        while (i < nums.size()) {
            if (nums[i] < n) {
                nums[j] = nums[i];
                j++;
                nums[i] = nums[j];
            }
            i++;
        }
        nums[j] = n;
        if (k > j) {
            return fkl(nums, j + 1, e, k);
        } else if ( k < j) {
            return fkl(nums, s, j - 1, k);
        }
        return n;
    }
    int findKthLargest(vector<int>& nums, int k) {
        return fkl(nums, 0, nums.size() - 1, nums.size() - k);
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=216 lang=cpp
 *
 * [216] \u7EC4\u5408\u603B\u548C III
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
private:
    vector<vector<int>> rs;
    void cS3(vector<int> r, int i, int sum_, int k, int n) {
        if (r.size() == k) {
            if (sum_ == n) {
                vector<int> x(r);
                rs.push_back(x);
            }
            return;
        }
        if (sum_ > n) {
            return;
        }
        for (; i <= 9; i++) {
            r.push_back(i);
            cS3(r, i + 1, sum_ + i, k, n);
            r.pop_back();
        }
    }
public:
    vector<vector<int>> combinationSum3(int k, int n) {
        rs.clear();
        vector<int> r;
        cS3(r, 1, 0, k, n);
        return rs;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=221 lang=cpp
 *
 * [221] \u6700\u5927\u6B63\u65B9\u5F62
 */
#include <vector>
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int maximalSquare(vector<vector<char>>& matrix) {
        vector<int> s(matrix[0].size() + 1, 0);
        int max_ = 0;
        int e = 0;
        for (size_t i = 0; i < matrix.size(); i++) {
            for (size_t j = 0; j < matrix[i].size(); j++) {
                int a = 0;
                if (matrix[i][j] == '1') {
                    a = min(s[j + 1], min(e, s[j])) + 1;
                }
                e = s[j + 1];
                s[j + 1] = a;
                if (s[j + 1] > max_) {
                    max_ = s[j + 1];
                }
            }
            e = 0;
        }
        return max_ * max_;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=222 lang=cpp
 *
 * [222] \u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570
 */
#include <cmath>
#include <iostream>
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
class Solution {
private:
    int min;
    bool isR;
    int k;
    void cN(TreeNode* r, int i) {
        if (isR) return;
        if (r->left == nullptr && r->right == nullptr) {
            if (i == k) { 
                isR = true;
            } else {
                min += 2;
            }
            return;
        }
        if (r->right != nullptr) {
            cN(r->right, i + 1);
        } else {
            min++;
        }
        if (r->left != nullptr) {
            cN(r->left, i + 1);
        }
    }
public:
    int countNodes(TreeNode* root) {
        if (root == nullptr) return 0;
        TreeNode * r = root;
        min = 0;
        isR = false;
        k = 0;
        while (r != nullptr) {
            k++;
            r = r->left;
        }
        cN(root, 1);
        return pow(2, k) - 1 - min;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=223 lang=cpp
 *
 * [223] \u77E9\u5F62\u9762\u79EF
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int computeArea(int ax1, int ay1, int ax2, int ay2, int bx1, int by1, int bx2, int by2) {
        int a = (ax2 - ax1) * (ay2 - ay1);
        int b = (bx2 - bx1) * (by2 - by1);
        if (bx1 >= ax2 || bx2 <= ax1 || by2 <= ay1 || by1 >= ay2) {
            return a + b;
        }
        int x;
        if (ax2 >= bx2) {
            if (ax1 <= bx1) {
                x = bx2 - bx1;
            } else {
                x = bx2 - ax1;
            }
        } else {
            if (ax1 <= bx1) {
                x = ax2 - bx1;
            } else {
                x = ax2 - ax1;
            }
        }
        int y;
        if (ay2 >= by2) {
            if (ay1 <= by1) {
                y = by2 - by1;
            } else {
                y = by2 - ay1;
            }
        } else {
            if (ay1 <= by1) {
                y = ay2 - by1;
            } else {
                y = ay2 - ay1;
            }
        }
        return a + b - x * y;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=227 lang=cpp
 *
 * [227] \u57FA\u672C\u8BA1\u7B97\u5668 II
 */
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int calculate(string s) {
        vector<int> ds;
        vector<char> cs;
        int sum = 0;
        for (size_t i = 0; i < s.length(); i++) {
            if (s[i] == ' ') {
                continue;
            }
            if (s[i] == '-' || s[i] == '+' || s[i] == '/' || s[i] == '*') {
                if (!cs.empty()) {
                    char c = cs.back();
                    if (c == '*' || c == '/') {
                        if (c == '*') {
                            sum = sum * ds.back();
                        } else if (c == '/') {
                            sum = ds.back() / sum;
                        }
                        ds.pop_back();
                        cs.pop_back();
                    }
                }
                ds.push_back(sum);
                sum = 0;
                cs.push_back(s[i]);
            } else {
                sum = sum * 10 + (s[i] - '0');
            }
        }
        if (!cs.empty()) {
            char c = cs.back();
            if (c == '*' || c == '/') {
                if (c == '*') {
                    sum = sum * ds.back();
                } else if (c == '/') {
                    sum = ds.back() / sum;
                }
                ds.pop_back();
                cs.pop_back();
            }
        }
        ds.push_back(sum);
        sum = ds[0];
        for (size_t i = 0; i < cs.size(); i++) {
            if (cs[i] == '+') {
                sum += ds[i + 1];
            } else if (cs[i] == '-') {
                sum -= ds[i + 1] ;
            }
        }
        return sum;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=229 lang=cpp
 *
 * [229] \u591A\u6570\u5143\u7D20 II
 */
// @lc code=start
class Solution {
public:
    vector<int> majorityElement(vector<int>& nums) {
        int element1;
        int element2;
        int v1 = 0;
        int v2 = 0;
        for (int num: nums) {
            if (v1 > 0 && num == element1) {
                v1++;
            } else if (v2 > 0 && num == element2) {
                v2++;
            } else if (v1 == 0) {
                element1 = num;
                v1++;
            } else if (v2 == 0) {
                element2 = num;
                v2++;
            } else {
                v1--;
                v2--;
            }
        }
        int vv1 = 0;
        int vv2 = 0;
        for (int num: nums) {
            if (v1 > 0 && num == element1) {
                vv1++;
            } else if (v2 > 0 && num == element2) {
                vv2++;
            }
        }
        vector<int> rs;
        if (v1 > 0 && vv1 > nums.size() / 3) {
            rs.push_back(element1);
        }
        if (v2 > 0 && vv2 > nums.size() / 3) {
            rs.push_back(element2);
        }
        return rs;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=230 lang=cpp
 *
 * [230] \u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7B2CK\u5C0F\u7684\u5143\u7D20
 */
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
class Solution {
private:
    int r;
    int ak;
public:
    void kS(TreeNode* root) {
        if (r != -1) return;
        if (root->left != nullptr) {
            kS(root->left);
        }
        if (ak == 0) {
            r = root->val;
        }
        ak--;
        if (root->right != nullptr) {
            kS(root->right);
        }
    }
    int kthSmallest(TreeNode* root, int k) {
        r = -1;
        ak = k - 1;
        kS(root);
        return r;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=236 lang=cpp
 *
 * [236] \u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (root == nullptr) return nullptr;
        TreeNode* left = lowestCommonAncestor(root->left, p, q);
        TreeNode* right = lowestCommonAncestor(root->right, p, q);
        if (root->val == p->val || root->val == q->val || (left != nullptr && right != nullptr)) {
            return root;
        }
        if (left != nullptr) {
            return left;
        }
        if (right != nullptr) {
            return right;
        }
        return nullptr;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=238 lang=cpp
 *
 * [238] \u9664\u81EA\u8EAB\u4EE5\u5916\u6570\u7EC4\u7684\u4E58\u79EF
 */
// @lc code=start
class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n = nums.size();
        vector<int> rs(n, 1);
        int prefix = 1;
        int suffix = 1;
        for (int i = 0; i < nums.size(); ++i) {
            rs[i] *= prefix;
            rs[n - 1 - i] *= suffix;
            prefix *= nums[i];
            suffix *= nums[n - 1 - i];
        }
        return rs;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=240 lang=cpp
 *
 * [240] \u641C\u7D22\u4E8C\u7EF4\u77E9\u9635 II
 */
// @lc code=start
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        int i = matrix.size() - 1;
        int j = 0;
        while (j < matrix[0].size() && i >= 0) {
            if (matrix[i][j] == target) {
                return true;
            } else if (matrix[i][j] > target) {
                i--;
            } else {
                j++;
            }
        }
        return false;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=241 lang=cpp
 *
 * [241] \u4E3A\u8FD0\u7B97\u8868\u8FBE\u5F0F\u8BBE\u8BA1\u4F18\u5148\u7EA7
 */
// @lc code=start
class Solution {
public:
    vector<int> diffWaysToCompute(string expression) {
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=260 lang=cpp
 *
 * [260] \u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57 III
 */
// @lc code=start
class Solution {
public:
    vector<int> singleNumber(vector<int>& nums) {
        long v = 0;
        for (int num: nums) {
            v ^= num;
        }
        v = v & (-v);
        vector<int> r(2, 0);
        for (int num: nums) {
            if ((num & v) == 0) {
                r[0] ^= num;
            } else {
                r[1] ^= num;
            }
        }
        return r;
    }
};
// @lc code=end`,`--
-- @lc app=leetcode.cn id=262 lang=mysql
--
-- [262] \u884C\u7A0B\u548C\u7528\u6237
--
-- @lc code=start
# Write your MySQL query statement below
select
    t.request_at as \`Day\`,
    round(sum(if(t.status="completed", 0, 1)) / count(t.id), 2) as "Cancellation Rate"
from
    Trips t,
    Users u,
    Users u1
where
    t.request_at between "2013-10-01"
    and "2013-10-03"
    and u.users_id = t.client_id 
    and u.banned = "No"
    and u1.users_id = t.driver_id
    and u1.banned = "No"
group by 
    t.request_at
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=263 lang=cpp
 *
 * [263] \u4E11\u6570
 */
// @lc code=start
class Solution {
public:
    bool isUgly(int n) {
        if (n == 0) return false;
        while (n != 1) {
            if (n % 2 == 0) {
                n /= 2;
                continue;
            }
            if (n % 5 == 0) {
                n /= 5;
                continue;
            }
            if (n % 3 == 0) {
                n /= 3;
                continue;
            }
            break;
        }
        if (n == 1) {
            return true;
        }
        return false;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=264 lang=cpp
 *
 * [264] \u4E11\u6570 II
 */
#include <algorithm>
#include <vector>
using namespace std;
// @lc code=start
class Solution {
public:
    int nthUglyNumber(int n) {
        vector<int> rs(n, 1);
        int i2 = 0;
        int i3 = 0;
        int i5 = 0;
        for (size_t i = 1; i < n; i++) {
            rs[i] = min(min(rs[i2] * 2, rs[i3] * 3), rs[i5] * 5);
            if (rs[i] == rs[i2] * 2) {
                i2++;
            } 
            if (rs[i] == rs[i3] * 3) {
                i3++;
            }
            if (rs[i] == rs[i5] * 5) {
                i5++;
            }
        }
        return rs[n - 1];
    }
};
// @lc code=end`,`#
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
        int l = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                l++;
            } else {
                nums[i - l] = nums[i];
            }
        }
        return nums.length - l;
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=274 lang=cpp
 *
 * [274] H \u6307\u6570
 */
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int hIndex(vector<int>& citations) {
        sort(citations.begin(), citations.end());
        int n = citations.size();
        for (size_t i = 0; i < citations.size(); i++) {
            if (citations[i] >= n) {
                break;
            }
            n--;
        }
        return n;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=275 lang=cpp
 *
 * [275] H \u6307\u6570 II
 */
// @lc code=start
class Solution {
public:
    int hIndex(vector<int>& citations) {
        int s = 0;
        int n = citations.size();
        int e = n;
        while (s < e) {
            int m = (s + e) / 2;
            if (citations[m] >= n - m) {
                e = m;
            } else {
                s = m + 1;
            }
        }
        return n - e;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=284 lang=cpp
 *
 * [284] \u9876\u7AEF\u8FED\u4EE3\u5668
 */
// @lc code=start
/*
 * Below is the interface for Iterator, which is already defined for you.
 * **DO NOT** modify the interface for Iterator.
 *
 *  class Iterator {
 *		struct Data;
 * 		Data* data;
 *  public:
 *		Iterator(const vector<int>& nums);
 * 		Iterator(const Iterator& iter);
 *
 * 		// Returns the next element in the iteration.
 *		int next();
 *
 *		// Returns true if the iteration has more elements.
 *		bool hasNext() const;
 *	};
 */
class PeekingIterator : public Iterator {
private:
	bool isHas = false;
	int nextData;
public:
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
	    // Initialize any member here.
	    // **DO NOT** save a copy of nums and manipulate it directly.
	    // You should only use the Iterator interface methods.
		isHas = Iterator::hasNext();
	    if (isHas) {
			nextData = Iterator::next();
		}
	}
    // Returns the next element in the iteration without advancing the iterator.
	int peek() {
        return nextData;
	}
	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	int next() {
		isHas = Iterator::hasNext();
		int d = nextData;
		if (isHas) {
			nextData = Iterator::next();
		}
	    return d;
	}
	bool hasNext() const {
	    return isHas;
	}
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=287 lang=cpp
 *
 * [287] \u5BFB\u627E\u91CD\u590D\u6570
 */
// @lc code=start
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int low = 0;
        int fast = 0;
        do {
            low = nums[low];
            fast = nums[nums[fast]];
        } while (low != fast);
        low = 0;
        while (low != fast) {
            low = nums[low];
            fast = nums[fast];
        }
        return low;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] \u4E24\u6574\u6570\u4E4B\u548C
 */
// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b != 0) {
        let c = (a & b) << 1
        a = a ^ b
        b = c
    }
    return a
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=4 lang=java
 *
 * [4] \u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570
 */
// @lc code=start
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        return (getKth(nums1, nums2, 0, 0, (nums1.length + nums2.length + 2) / 2) + getKth(nums1, nums2, 0, 0, (nums1.length + nums2.length + 1) / 2)) * 0.5;
    }
    int getKth(int[] nums1, int[] nums2, int start1, int start2, int k) {
        int len1 = nums1.length - start1;
        int len2 = nums2.length - start2;
        if (len1 > len2) return getKth(nums2, nums1, start2, start1, k);
        if (len1 == 0) return nums2[start2 + k - 1];
        if (k == 1) return Math.min(nums1[start1], nums2[start2]);
        int i = start1 + Math.min(len1, k / 2) - 1;
        int j = start2 + Math.min(len2, k / 2) - 1;
        if (nums1[i] > nums2[j]) {
            return getKth(nums1, nums2, start1, j + 1, k - j - 1 + start2);
        }
        return getKth(nums1, nums2, i + 1, start2, k - i - 1 + start1);
    }
}
// @lc code=end`,`#
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
 * @lc app=leetcode.cn id=481 lang=java
 *
 * [481] \u795E\u5947\u5B57\u7B26\u4E32
 */
// @lc code=start
class Solution {
    public int magicalString(int n) {
        if (n <= 3) {
            return 1;
        }
        int[] ls = new int[n];
        ls[2] = 2;
        int i = 2;
        int j = 3;
        boolean isOne = true;
        int sum = 1;
        while(j < n) {
            for (int k = 0; j < n && k < ls[i]; k++) {
                if (isOne) {
                    sum++;
                }
                ls[j++] = isOne ? 1 : 2; 
            }
            isOne = !isOne;
            i++;
        }
        return sum;
    }
}
// @lc code=end`,`/*
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] \u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u4F17\u6570
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var fM = function(root, rs) {
    if (root === null) {
        return
    }
    fM(root.left, rs)
    if (rs[root.val] !== undefined) {
        rs[root.val]++
    } else {
        rs[root.val] = 1
    }
    fM(root.right, rs)
}
var findMode = function(root) {
    let rs = {}
    fM(root, rs)
    let r = []
    let rn = 0
    for (const rr in rs) {
        if (rs[rr] > rn) {
            r = [rr]
            rn = rs[rr]
        } else if (rs[rr] === rn) {
            r.push(rr)
        }
    }
    return r
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] \u4E03\u8FDB\u5236\u6570
 */
// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let r = ""
    let sign = num > 0 ? "" : "-"
    num = Math.abs(num)
    while( num != 0 ) {
        r = num % 7 + r
        num = parseInt(num / 7)
    }
    if (r === "") {
        return "0"
    } 
    return sign + r
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] \u76F8\u5BF9\u540D\u6B21
 */
// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    for (let i = 0; i < score.length; i++) {
        score[i] = [score[i], i]
    }
    score = score.sort((a, b) => {return b[0] - a[0]})
    let r = new Array(score.length)
    for (let i = 0; i < score.length; i++) {
        let j = score[i][1]
        switch (i) {
            case 0:
                r[j] = "Gold Medal"
                break
            case 1:
                r[j] = "Silver Medal"
                break
            case 2:
                r[j] = "Bronze Medal"
                break
            default:
                r[j] = i + 1 + ""
        }
    }
    return r
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] \u5B8C\u7F8E\u6570
 */
// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num == 1) return false
    let sum = 1
    let i = 2
    while(i <= num / i) {
        if (num % i === 0) {
            sum += i
            sum += num / i
        }
        if (sum > num) {
            return false
        }
        i++
    }
    if (sum === num) return true
    return false
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] \u6590\u6CE2\u90A3\u5951\u6570
 */
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let a = 0
    let b = 1
    for (let i = 2; i < n; i++) {
        let c = a + b
        a = b
        b = c
    }
    return a + b
};
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=511 lang=mysql
--
-- [511] \u6E38\u620F\u73A9\u6CD5\u5206\u6790 I
--
-- @lc code=start
# Write your MySQL query statement below
select
    player_id,
    min(event_date) as first_login
from
    Activity
group by
    player_id
-- @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] \u68C0\u6D4B\u5927\u5199\u5B57\u6BCD
 */
// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let isU = word[0] >= 'A' && word <= 'Z'
    for (let i = 1; i < word.length; i++) {
        if (!isU && word[i] >= 'A' && word[i] <= 'Z') {
            return false
        }
        if (isU && word[i] >= 'a' && word[i] <= 'z' && i > 1) {
            return false
        }
        if (word[i] >= 'a' && word[i] <= 'z') {
            isU = false
        }
    }
    return true
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] \u6700\u957F\u7279\u6B8A\u5E8F\u5217 \u2160
 */
// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if (a === b) return -1
    return a.length > b.length ? a.length : b.length
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] \u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5C0F\u7EDD\u5BF9\u5DEE
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let min = 100000
let l = -100000
var md = function(root) {
    if (root === null) return
    md(root.left)
    if (root.val - l < min) {
        min = root.val - l
    }
    l = root.val
    md(root.right)
}
var getMinimumDifference = function(root) {
    min = 100000
    l = -100000
    md(root)
    return min
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] \u53CD\u8F6C\u5B57\u7B26\u4E32 II
 */
// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let rs = ""
    let i = 0
    while (i < s.length) {
        let r = ""
        for(let j = 0; j < k && j + i < s.length; j++) {
            r = s[i + j] + r
        }
        rs += r 
        rs += s.substring(i + k, i + 2 * k)
        i += 2 * k
    }
    return rs
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=543 lang=cpp
 *
 * [543] \u4E8C\u53C9\u6811\u7684\u76F4\u5F84
 */
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
class Solution {
private:
    int r;
    int dOBT(TreeNode * root) {
        if (root == nullptr) return 0;
        int left = dOBT(root->left);
        int right = dOBT(root->right);
        if (left + right > r) {
            r = left + right;
        }
        return left > right? left + 1 : right + 1;
    }
public:
    int diameterOfBinaryTree(TreeNode* root) {
        r = 0;
        dOBT(root);
        return r;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=551 lang=cpp
 *
 * [551] \u5B66\u751F\u51FA\u52E4\u8BB0\u5F55 I
 */
// @lc code=start
class Solution {
public:
    bool checkRecord(string s) {
        int l = 0;
        int a = 0;
        for (size_t i = 0; i < s.length(); i++){
            if (s[i] == 'P') {
                l = 0;
            } else if (s[i] == 'A') {
                l = 0;
                a++;
            } else {
                l++;
            }
            if (a == 2 || l == 3) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=557 lang=cpp
 *
 * [557] \u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD III
 */
#include <sstream>
using namespace std;
// @lc code=start
class Solution {
public:
    string reverseWords(string s) {
        stringstream ss;
        int i = 0;
        while (i < s.length()) {
            string ms = "";
            while (i < s.length() && s[i] != ' ') {
                ms = s[i] + ms;
                i++;
            }
            ss << ms;
            if (i < s.length()) {
                ss << " ";
            }
            i++;
        }
        return ss.str();
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=559 lang=cpp
 *
 * [559] N \u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6
 */
// @lc code=start
/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> children;
    Node() {}
    Node(int _val) {
        val = _val;
    }
    Node(int _val, vector<Node*> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
private:
    int mD(Node *r, int j) {
        int s = j;
        for (size_t i = 0; i < r->children.size(); i++) {
            int a = mD(r->children[i], j + 1);
            if (a > s) {
                s = a;
            }
        }
        return s;
    }
public:
    int maxDepth(Node* root) {
        if (root == nullptr) return 0;
        return mD(root, 1);
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=561 lang=cpp
 *
 * [561] \u6570\u7EC4\u62C6\u5206
 */
#include <algorithm>
using namespace std;
// @lc code=start
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int sum = 0;
        for (size_t i = 0; i < nums.size(); i += 2) {
            sum += nums[i];
        }
        return sum;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=563 lang=cpp
 *
 * [563] \u4E8C\u53C9\u6811\u7684\u5761\u5EA6
 */
#include <math.h>
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
class Solution {
private:
    int rs;
    int fT(TreeNode* r) {
        if (r == nullptr) return 0;
        int left = fT(r->left);
        int right = fT(r->right);
        rs += abs(left - right);
        return left + right + r->val;
    }
public:
    int findTilt(TreeNode* root) {
        rs = 0;
        fT(root);
        return rs;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=566 lang=cpp
 *
 * [566] \u91CD\u5851\u77E9\u9635
 */
// @lc code=start
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {
        if (mat.size() * mat[0].size() != r * c || (mat.size() == r && mat[0].size() == c)) return mat;
        vector<vector<int>> rs;
        int m = 0;
        int n = 0;
        for (size_t i = 0; i < r; i++) {
            vector<int> r;
            for (size_t j = 0; j < c; j++) {
                if (mat[m].size() == n) {
                    m++;
                    n = 0;
                }
                r.push_back(mat[m][n]);
                n++;
            }
            rs.push_back(r);
        }
        return rs;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] \u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var same = function(root, sub) {
    if (root === null) {
        if (sub === null)
            return true
        return false
    }
    if (sub === null) {
        return false
    }
    if (root.val !== sub.val) {
        return false
    }
    return same(root.left, sub.left) && same(root.right, sub.right)
}
var isSubtree = function(root, subRoot) {
    if (same(root, subRoot)) {
        return true
    }
    if (root.left !== null && isSubtree(root.left, subRoot)) {
        return true
    }
    if (root.right !== null && isSubtree(root.right, subRoot)) {
        return true
    } 
    return false
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] \u5206\u7CD6\u679C
 */
// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let s = new Set()
    for (let i = 0; i < candyType.length; i++) {
        s.add(candyType[i])
    }
    let j = parseInt(candyType.length / 2)
    return s.size > j ? j : s.size
};
// @lc code=end`,`#
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=584 lang=mysql
--
-- [584] \u5BFB\u627E\u7528\u6237\u63A8\u8350\u4EBA
--
-- @lc code=start
# Write your MySQL query statement below
select
    \`name\`
from
    customer
where
    isnull(referee_id)
    or referee_id != 2
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=586 lang=mysql
--
-- [586] \u8BA2\u5355\u6700\u591A\u7684\u5BA2\u6237
--
-- @lc code=start
# Write your MySQL query statement below
select 
    customer_number
from
    orders
group by
    customer_number
order by
    count(*) desc
limit 1
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N \u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386
 */
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (root === null) {
        return []
    }
    let a = []
    a.push(root)
    let rs = []
    while (a.length > 0) {
        let r = a.pop()
        rs.push(r.val)
        for (let i = r.children.length - 1; i > -1;i--) {
            a.push(r.children[i])
        }
    }
    return rs
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N \u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386
 */
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root === null) return []
    let rs = []
    let a = []
    a.push(root)
    while (a.length > 0) {
        let n = a.pop()
        rs.unshift(n.val)
        for (let r of n.children) {
            a.push(r)
        }
    }
    return rs
};
// @lc code=end`,`import java.util.HashMap;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=594 lang=java
 *
 * [594] \u6700\u957F\u548C\u8C10\u5B50\u5E8F\u5217
 */
// @lc code=start
class Solution {
    public int findLHS(int[] nums) {
        Map<Integer, Integer> ns = new HashMap<>();
        for (Integer n: nums) {
            if (ns.containsKey(n)) {
                ns.put(n, ns.get(n) + 1);
            } else {
                ns.put(n, 1);
            }
        }
        int sum = 0;
        for (Integer i: ns.keySet()) {
            if (ns.containsKey(i + 1)) {
                int j = ns.get(i) + ns.get(i + 1);
                if (j > sum) {
                    sum = j;
                }
            }
        }
        return sum;
    }
}
// @lc code=end`,`--
-- @lc app=leetcode.cn id=595 lang=mysql
--
-- [595] \u5927\u7684\u56FD\u5BB6
--
-- @lc code=start
# Write your MySQL query statement below
select
    \`name\`, \`population\`, area
from
    World
where
    area >= 3000000
    or population >= 25000000
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=596 lang=mysql
--
-- [596] \u8D85\u8FC75\u540D\u5B66\u751F\u7684\u8BFE
--
-- @lc code=start
# Write your MySQL query statement below
select
    class
from
    Courses
group by
    class
having
    count(*) >= 5
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=598 lang=java
 *
 * [598] \u8303\u56F4\u6C42\u548C II
 */
// @lc code=start
class Solution {
    public int maxCount(int m, int n, int[][] ops) {
        if (ops.length == 0) {
            return m * n;
        }
        int minx = ops[0][0];
        int miny = ops[0][1];
        for (int i = 1; i < ops.length; i++) {
            if (ops[i][0] < minx) {
                minx = ops[i][0];
            }
            if (ops[i][1] < miny) {
                miny = ops[i][1];
            }
        }
        return minx * miny;
    }
}
// @lc code=end`,`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.lang.model.element.Element;
/*
 * @lc app=leetcode.cn id=599 lang=java
 *
 * [599] \u4E24\u4E2A\u5217\u8868\u7684\u6700\u5C0F\u7D22\u5F15\u603B\u548C
 */
// @lc code=start
class Solution {
    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String, Integer> ss = new HashMap<>();
        for (int i = 0; i < list2.length; i++) {
            ss.put(list2[i], i);
        }
        List<String> rs = new ArrayList<>();
        int m = Integer.MAX_VALUE;
        for (int i = 0; i < list1.length; i++) {
            if (ss.containsKey(list1[i])) {
                int j = ss.get(list1[i]) + i;
                if (j < m) {
                    rs.clear();
                    m = j;
                } else if (j > m) {
                    continue;
                } 
                rs.add(list1[i]);
            }
        }
        return rs.toArray(new String[0]);
    }
}
// @lc code=end`,`#
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=601 lang=mysql
--
-- [601] \u4F53\u80B2\u9986\u7684\u4EBA\u6D41\u91CF
--
-- @lc code=start
# Write your MySQL query statement below
with t as 
    (select
        case when id = (@p + 1) then
            @x
        else
            @x := @x + 1
        end as n,
        @p := id,
        id
    from 
        Stadium, (select @x := 1, @p := 0) f
    where 
        people >= 100),
t1 as 
    (select 
        id, s 
    from 
        t f1, (select n, count(*) as s from t group by n) f2 
    where 
        f1.n = f2.n)
select 
    Stadium.id, visit_date, people 
from
    Stadium, t1 f3
where
    f3.id = Stadium.id
    and f3.s >= 3
order by
    visit_date;
-- @lc code=end`,`/*
 * @lc app=leetcode.cn id=605 lang=cpp
 *
 * [605] \u79CD\u82B1\u95EE\u9898
 */
// @lc code=start
class Solution {
public:
    bool canPlaceFlowers(vector<int>& flowerbed, int n) {
        if (n == 0) {
            return true;
        }
        for (int i = 0;i < flowerbed.size(); i++) {
            if ((i == 0 || (i > 0 && flowerbed[i - 1] == 0)) && flowerbed[i] == 0 && (i >= flowerbed.size() - 1 || flowerbed[i + 1] == 0)) {
                flowerbed[i] = 1;
                n--;
            }
            if (n == 0) {
                return true;
            }
        }
        return false;
    }
};
// @lc code=end`,`#
# @lc app=leetcode.cn id=606 lang=python3
#
# [606] \u6839\u636E\u4E8C\u53C9\u6811\u521B\u5EFA\u5B57\u7B26\u4E32
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        if not root:
            return ''
        left = self.tree2str(root.left)
        right = self.tree2str(root.right)
        if right:
            return f'{root.val}({left})({right})'
        elif left:
            return f'{root.val}({left})'
        return f'{root.val}'
# @lc code=end`,`--
-- @lc app=leetcode.cn id=607 lang=mysql
--
-- [607] \u9500\u552E\u5458
--
-- @lc code=start
# Write your MySQL query statement below
select
    \`name\`
from 
    SalesPerson
where
    sales_id not in
    (select
        sales_id
    from
        Company c, Orders o
    where
        c.com_id = o.com_id
        and c.name = "RED")
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=608 lang=mysql
--
-- [608] \u6811\u8282\u70B9
--
-- @lc code=start
# Write your MySQL query statement below
select
    tt.id, if(isnull(p_id), "Root", if(isnull(f_id), "Inner", "Leaf")) as \`Type\`
from 
    (select
        t.id, t.p_id, f.id as f_id
    from
        tree t
    left join
        (select
            id
        from
            tree
        where
            id not in (select ifnull(p_id, -1) from tree)) f
    on
        t.id = f.id) tt;
-- @lc code=end`,`#
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
# @lc app=leetcode.cn id=617 lang=python3
#
# [617] \u5408\u5E76\u4E8C\u53C9\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def mergeTrees(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root1:
            return root2
        if not root2:
            return root1
        root1.val += root2.val
        root1.left = self.mergeTrees(root1.left, root2.left)
        root1.right = self.mergeTrees(root1.right, root2.right)
        return root1
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
# @lc code=end`,`--
-- @lc app=leetcode.cn id=620 lang=mysql
--
-- [620] \u6709\u8DA3\u7684\u7535\u5F71
--
-- @lc code=start
# Write your MySQL query statement below
select
    *
from
    cinema
where
    \`description\` != "boring"
    and id % 2 = 1
order by
    rating desc
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=626 lang=mysql
--
-- [626] \u6362\u5EA7\u4F4D
--
-- @lc code=start
# Write your MySQL query statement below
select
    if(r % 2 = 1, if(r = @m, id, id + 1), id - 1) as id, student
from
    (select 
        row_number() over(order by id) as r, id, student
    from
        Seat) f, 
    (select
        @m := count(*)
    from
        Seat) f1
order by
    id
-- @lc code=end`,`--
-- @lc app=leetcode.cn id=627 lang=mysql
--
-- [627] \u53D8\u66F4\u6027\u522B
--
-- @lc code=start
# Write your MySQL query statement below
update
    Salary
set
    sex = if(sex = "m", "f", "m")
-- @lc code=end`,`#
# @lc app=leetcode.cn id=628 lang=python3
#
# [628] \u4E09\u4E2A\u6570\u7684\u6700\u5927\u4E58\u79EF
#
# @lc code=start
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        data1 = list(nums[:3])
        data2 = list(nums[:3])
        for n in nums[3:]:
            data1.append(n)
            data1.remove(min(data1))
            data2.append(n)
            data2.remove(max(data2))
        sum_1 = data1[0] * data1[1] * data1[2]
        m1 = min(data2)
        data2.remove(m1)
        m2 = min(data2)
        sum_2 = m1 * m2 * max(data1)
        return sum_1 if sum_1 > sum_2 else sum_2
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
# @lc app=leetcode.cn id=637 lang=python3
#
# [637] \u4E8C\u53C9\u6811\u7684\u5C42\u5E73\u5747\u503C
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        queue = [root]
        result = []
        while len(queue) > 0:
            qc = queue
            queue = []
            sum_ = 0
            sum_len = len(qc)
            while len(qc) > 0:
                v = qc.pop()
                sum_ += v.val
                if v.left:
                    queue.append(v.left)
                if v.right:
                    queue.append(v.right)
            result.append(sum_ / sum_len)
        return result
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
# @lc app=leetcode.cn id=643 lang=python3
#
# [643] \u5B50\u6570\u7EC4\u6700\u5927\u5E73\u5747\u6570 I
#
# @lc code=start
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sum_ = sum(nums[:k])
        max_ = sum_
        i = 0
        for n in nums[k:]:
            sum_ = sum_ - nums[i] + n
            if sum_ > max_:
                max_ = sum_
            i += 1
        return max_ / k
# @lc code=end`,`#
# @lc app=leetcode.cn id=645 lang=python3
#
# [645] \u9519\u8BEF\u7684\u96C6\u5408
#
# @lc code=start
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        i = 0
        results = []
        while i < len(nums):
            while nums[i] != i + 1 and nums[i] != -1:
                if nums[i] == nums[nums[i] - 1]:
                    results.append(nums[i])
                    nums[i] = -1                    
                    break 
                a = nums[i]
                nums[i] = nums[a - 1]
                nums[a - 1] = a
            i+=1
        for i in range(len(nums)):
            if nums[i] == -1:
                results.append(i + 1)
                break
        return results
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
# @lc app=leetcode.cn id=653 lang=python3
#
# [653] \u4E24\u6570\u4E4B\u548C IV - \u8F93\u5165\u4E8C\u53C9\u641C\u7D22\u6811
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findK(self, root, k):
        if root == None:
            return False
        if root.val == k:
            return True
        elif root.val > k:
            return self.findK(root.left, k)
        return self.findK(root.right, k)
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        root_ = root
        nodes = [root]
        while len(nodes) > 0:
            node = nodes.pop()
            if node.left: 
                nodes.append(node.left)
            if node.right:
                nodes.append(node.right)
            if node.val == k / 2:
                continue
            if self.findK(root_, k - node.val):
                return True
        return False
# @lc code=end`,`#
# @lc app=leetcode.cn id=657 lang=python3
#
# [657] \u673A\u5668\u4EBA\u80FD\u5426\u8FD4\u56DE\u539F\u70B9
#
# @lc code=start
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        ud = 0
        lr = 0
        for move in moves:
            if move == 'U':
                ud -= 1
            elif move == 'D':
                ud += 1
            elif move == 'L':
                lr -= 1
            else:
                lr += 1
        if not ud and not lr:
            return True
        return False
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
# @lc app=leetcode.cn id=661 lang=python3
#
# [661] \u56FE\u7247\u5E73\u6ED1\u5668
#
# @lc code=start
class Solution:
    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        results = []
        for i in range(len(img)):
            r = []
            for j in range(len(img[i])):
                sum_ = 0
                count = 0
                for m in [-1, 0, 1]:
                    for n in [-1, 0, 1]:
                        if 0 <= i + m < len(img) and 0 <= j + n < len(img[i]):
                            sum_ += img[i + m][j + n]
                            count += 1
                r.append(sum_ // count)
            results.append(r)
        return results
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
# @lc app=leetcode.cn id=671 lang=python3
#
# [671] \u4E8C\u53C9\u6811\u4E2D\u7B2C\u4E8C\u5C0F\u7684\u8282\u70B9
#
# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findSMV(self, root, s_max, min_):
        if not root.left:
            if min_ < root.val < s_max or min_ == s_max:
                return root.val
            return s_max
        if root.left.val <= s_max or min_ == s_max:
            l = self.findSMV(root.left, s_max, min_)
            if min_ < l < s_max or min_ == s_max:
                s_max = l
        if root.right.val <= s_max or min_ == s_max:
            r = self.findSMV(root.right, s_max, min_)
            if min_ < r < s_max or min_ == s_max:
                s_max = r
        return s_max
    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:
        if not root.left:
            return -1
        s_max = self.findSMV(root, max([root.left.val, root.right.val]), root.val)
        if s_max == root.val:
            return -1
        return s_max
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=747 lang=cpp
 *
 * [747] \u81F3\u5C11\u662F\u5176\u4ED6\u6570\u5B57\u4E24\u500D\u7684\u6700\u5927\u6570
 */
// @lc code=start
class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int a = -1;
        int b = 0;
        for (size_t i = 1; i < nums.size(); i++) {
            if (nums[b] <= nums[i]) {
                a = b;
                b = i;
            } else if (a == -1 || nums[a] < nums[i]) {
                a = i;
            }
        }
        if (a == -1) {
            return b;
        }
        if (nums[b] >= 2 * nums[a]) {
            return b;
        }
        return -1;
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=779 lang=java
 *
 * [779] \u7B2CK\u4E2A\u8BED\u6CD5\u7B26\u53F7
 */
// @lc code=start
class Solution {
    public int kthGrammar(int n, int k) {
        int s = 1;
        while (s < k) {
            s *= 2;
        }
        int i = 0;
        while (k > 1) {
            s /= 2;
            if (k > s) {
                k -= s;
                i ++;
            }
        }
        if (k == 0) {
            if (i % 2 == 0) {
                return 1;
            }
            return 0;
        }
        if (i % 2 == 0) {
            return 0;
        }
        return 1;
    }
}
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] \u4E8C\u53C9\u641C\u7D22\u6811\u8282\u70B9\u6700\u5C0F\u8DDD\u79BB
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let min = 100000
    let l = -100000
    let mD = function(r) {
        if (r === null) return
        mD(r.left)
        if (r.val - l < min) {
            min = r.val - l
        }
        l = r.val
        mD(r.right)
    }
    mD(root)
    return min
};
// @lc code=end`,`import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=784 lang=java
 *
 * [784] \u5B57\u6BCD\u5927\u5C0F\u5199\u5168\u6392\u5217
 */
// @lc code=start
class Solution {
    static Map<Integer, List<String>> cache = new HashMap<>();
    public List<String> lCP(char[] s, int i) {
        if (cache.containsKey(i)) {
            return cache.get(i);
        }
        List<String> l = new ArrayList<>();
        if (i == s.length) {
            l.add("");
        } else {
            List<String> ls = lCP(s, i + 1);
            for (String ss: ls) {
                if (s[i] >= '0' && s[i] <= '9') {
                    l.add(s[i] + ss);
                } else {
                    l.add(s[i] + ss);
                    l.add((s[i] + "").toUpperCase() + ss);
                }
            }
        }
        cache.put(i, l);
        return l;
    }
    public List<String> letterCasePermutation(String s) {
        cache.clear();
        return lCP(s.toLowerCase().toCharArray(), 0);
    }
}
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=790 lang=cpp
 *
 * [790] \u591A\u7C73\u8BFA\u548C\u6258\u7C73\u8BFA\u5E73\u94FA
 */
#include <map>
using namespace std;
// @lc code=start
class Solution {
    int max_value = 1000000007;
    map<int, int> cache;
public:
    int numTilings(int n) {
        if (n == 0) {
            return 1;
        }
        if (cache.count(n) > 0) {
            return cache.at(n);
        }
        long x = 0;
        x += numTilings(n - 1);
        if (n >= 2) {
            x += numTilings(n - 2);
        }
        for (size_t i = 3; i <= n; i++) {
            x += 2 * numTilings(n - i);
        }
        int r = (int)(x % max_value);
        auto pr = make_pair(n, r);
        cache.insert(pr);
        return r;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=791 lang=cpp
 *
 * [791] \u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6392\u5E8F
 */
#include <map>
#include <set>
#include <sstream>
using namespace std;
// @lc code=start
class Solution {
public:
    string customSortString(string order, string s) {
        map<int, char> ms;
        map<char, int> mss;
        set<char> ss;
        stringstream cs;
        stringstream cs1;
        for (size_t i = 0; i < order.size(); i++) {
            ss.insert(order[i]);
            ms.insert(make_pair(i, order[i]));
        }
        for (size_t i = 0; i < s.size(); i++) {
            if (ss.count(s[i]) == 0) {
                cs << s[i];
                continue;
            }
            if (mss.count(s[i]) > 0) {
                mss[s[i]] = mss[s[i]] + 1;
            } else {
                mss.insert(make_pair(s[i], 1));
            }
        }
        for (size_t i = 0; i < order.size(); i++) {
            if (mss.count(ms[i]) > 0) {
                for (size_t k = 0; k < mss[ms[i]]; k++) {
                    cs1 << ms[i];
                }
            }
        }
        return cs1.str() + cs.str();
    }
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] \u5199\u5B57\u7B26\u4E32\u9700\u8981\u7684\u884C\u6570
 */
// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let a = 0
    let b = 0    
    for (let i = 0; i < s.length; i++) {
        let j = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
        if (b + widths[j] < 100) {
            b += widths[j]
        } else if (b + widths[j] == 100) {
            b = 0
            a++
        } else {
            b = widths[j]
            a++
        }
    }
    if (b != 0) {
        a++
    } else {
        b = 100
    }
    return [a, b]
};
// @lc code=end`,`#
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
# @lc code=end`,`/*
 * @lc app=leetcode.cn id=816 lang=cpp
 *
 * [816] \u6A21\u7CCA\u5750\u6807
 */
#include <vector>
#include <string>
using namespace std;
// @lc code=start
class Solution {
private:
    vector<string> rs;
    bool checkDigit(string s, int i) {
        if (s.size() != 1) {
            if (s[0] == '0' && i != 1) {
                return false;
            }
            if (i != 0 && s[s.size() - 1] == '0') {
                return false;
            }
        }
        return true;
    }
    string makeStr(string a, string b) {
        return "(" + a + ", " + b + ")";
    }
    string genStr(string a, int i) {
        if (i == 0) {
            return a;
        }
        return a.substr(0, i) + "." + a.substr(i, a.size());
    }
    void aC(string s, int i) {
        if (i >= s.size()) {
            return;
        }
        string a = s.substr(0, i);
        string b = s.substr(i, s.size() - i);
        for(int i = 0; i < a.size(); i++) {
            string s1 = genStr(a, i);
            if (checkDigit(s1, i)) {
                for (size_t j = 0; j < b.size(); j++) {
                    string s2 = genStr(b, j);
                    if (checkDigit(s2, j)) {
                        rs.push_back(makeStr(s1, s2));
                    }
                }
            }
        }
        aC(s, i + 1);
    }
public:
    vector<string> ambiguousCoordinates(string s) {
        rs.clear();
        aC(s.substr(1, s.size() - 2), 1);
        return rs;
    }
};
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] \u6700\u5E38\u89C1\u7684\u5355\u8BCD
 */
// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let s = new Set(banned)
    let ps = paragraph.split(/!|\\?|\\'|,|;|\\.| /)
    let r = null
    let rs = {}
    for (let p of ps) {
        p = p.toLowerCase()
        if (p === '' || s.has(p)) continue
        if (r === null) r = p
        if (rs[p] === undefined) {
            rs[p] = 1
        } else {
            rs[p] += 1
        }
        if (rs[p] > rs[r]) r = p
    }
    return r
};
// @lc code=end`,`#
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
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] \u77E9\u5F62\u91CD\u53E0
 */
// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    if (rec1[0] === rec1[2] || rec1[1] === rec1[3] || rec2[0] === rec2[2] || rec2[1] === rec2[3]) {
        return false
    }
    return !(rec2[0] >= rec1[2] || rec2[2] <= rec1[0] || rec2[3] <= rec1[1] || rec2[1] >= rec1[3])
};
// @lc code=end`,`/*
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
# @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=862 lang=java
 *
 * [862] \u548C\u81F3\u5C11\u4E3A K \u7684\u6700\u77ED\u5B50\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public int shortestSubarray(int[] nums, int k) {
        int maxN = nums.length + 1;
        long [] ns = new long[maxN];
        ns[0] = 0;
        for (int i = 0; i < nums.length; i++) {
            ns[i + 1] = nums[i] + ns[i];
        }
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < ns.length; i++) {
            while (!deque.isEmpty() && ns[i] - ns[deque.peekFirst()] >= k) {
                maxN = Math.min(maxN, i - deque.pollFirst());
            }
            while (!deque.isEmpty() && ns[i] <= ns[deque.peekLast()]) {
                deque.pollLast();
            }
            deque.offerLast(i);
        }
        return (maxN == nums.length + 1) ? -1 : maxN;
    }
}
// @lc code=end`,`/*
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
# @lc code=end`,`import java.util.ArrayList;
import java.util.List;
/*
 * @lc app=leetcode.cn id=901 lang=java
 *
 * [901] \u80A1\u7968\u4EF7\u683C\u8DE8\u5EA6
 */
// @lc code=start
class StockSpanner {
    static List<Integer> spans = new  ArrayList<>();
    static List<Integer> prices = new ArrayList<>();
    public StockSpanner() {
        spans.clear();
        prices.clear();
    }
    public int next(int price) {
        int i = prices.size();
        prices.add(price);
        int s = 1;
        while (i > 0 && price >= prices.get(i - 1)) {
            s += spans.get(i - 1);
            i -= spans.get(i - 1);
        }
        spans.add(s);
        return s;
    }
}
/**
 * Your StockSpanner object will be instantiated and called as such:
 * StockSpanner obj = new StockSpanner();
 * int param_1 = obj.next(price);
 */
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=902 lang=java
 *
 * [902] \u6700\u5927\u4E3A N \u7684\u6570\u5B57\u7EC4\u5408
 */
// @lc code=start
class Solution {
    public int atMostNGivenDigitSet(String[] digits, int n) {
        String ss = Integer.toString(n);
        int num = ss.length() - 1;
        int sum = 0;
        for (int i = 0; i < num; i++) {
            sum = (sum + 1) * digits.length;
        }
        int[] nmin = new int[ss.length()];
        boolean[] nmax = new boolean[ss.length()];
        for (int i = 0; i < ss.length(); i++) {
            for (int j = 0; j < digits.length; j++) {
                if (ss.charAt(i) > digits[j].charAt(0)) {
                    nmin[i] += 1;
                } else if (ss.charAt(i) == digits[j].charAt(0)) {
                    nmax[i] = true;
                }
            }
        }
        if (nmax[nmax.length - 1]) {
            nmin[nmin.length - 1] += 1;
        }
        for (int i = 0; i < nmin.length; i++) {
            sum += nmin[i] * Math.pow(digits.length, (nmin.length - 1 - i));
            if (!nmax[i]) {
                break;
            }
        }
        return sum;
    }
}
// @lc code=end`,`#
# @lc app=leetcode.cn id=902 lang=python3
#
# [902] \u6700\u5927\u4E3A N \u7684\u6570\u5B57\u7EC4\u5408
#
# @lc code=start
class Solution:
    def atMostNGivenDigitSet(self, digits: List[str], n: int) -> int:
        s = str(n)
        rs = [[0] * 2 for _ in range(len(s) + 1)]
        rs[0][1] = 1
        for i in range(1, len(s) + 1):
            for j in range(len(digits)):
                if s[i - 1] > digits[j]:
                    rs[i][0] += rs[i - 1][1]
                elif s[i - 1] == digits[j]:
                    rs[i][1] = rs[i - 1][1]
                else:
                    break
            if i > 1:
                rs[i][0] += (rs[i - 1][0] + 1) * len(digits) 
        return sum(rs[-1])
# @lc code=end`,`import java.util.HashMap;
import java.util.Map;
/*
 * @lc app=leetcode.cn id=904 lang=java
 *
 * [904] \u6C34\u679C\u6210\u7BEE
 */
// @lc code=start
class Solution {
    public int totalFruit(int[] fruits) {
        Map<Integer, Integer> ms = new HashMap<>();
        int max = 0;
        int sum = 0;
        int j = 0;
        for (int i = 0; i < fruits.length; i++) {
            int f = 1;
            if (ms.containsKey(fruits[i])) {
                f = ms.get(fruits[i]) + 1;
            } else if (ms.size() == 2){
                while(ms.size() == 2) {
                    int jj = ms.get(fruits[j]) - 1;
                    if (jj != 0) {
                        ms.put(fruits[j], jj);
                    } else {
                        ms.remove(fruits[j]);
                    }
                    j++;
                    sum -= 1;
                }
            }
            ms.put(fruits[i], f);
            sum += 1;
            if (sum > max) {
                max = sum;
            }
        }
        return max; 
    }
}
// @lc code=end`,`import java.util.ArrayDeque;
import java.util.Deque;
/*
 * @lc app=leetcode.cn id=907 lang=java
 *
 * [907] \u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C
 */
// @lc code=start
class Solution {
    static int mod = 1000000007; 
    public int sumSubarrayMins(int[] arr) {
        int[] ls = new int[arr.length];
        int[] rs = new int[arr.length];
        Deque<Integer> ds = new ArrayDeque<Integer>();
        for (int i = 0; i < arr.length; i++) {
            while (!ds.isEmpty() && arr[i] <= arr[ds.peek()]) {
                ds.pop();
            }
            ls[i] = i - (!ds.isEmpty() ? ds.peek(): -1);
            ds.push(i);
        }
        ds.clear();
        for (int i = arr.length - 1; i >= 0; i--) {
            while(!ds.isEmpty() && arr[i] < arr[ds.peek()]) {
                ds.pop();
            }
            rs[i] = (!ds.isEmpty() ? ds.peek() : arr.length) - i;
            ds.push(i);
        }
        long result = 0;
        for (int i = 0; i < rs.length; i++) {
            result += (long)ls[i] * rs[i] * arr[i];
            result %= mod;
        }
        return (int) result;
    }
}
// @lc code=end`,`#
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
 * @lc app=leetcode.cn id=915 lang=java
 *
 * [915] \u5206\u5272\u6570\u7EC4
 */
// @lc code=start
class Solution {
    public int partitionDisjoint(int[] nums) {
        int[] ns = new int[nums.length];
        ns[0] = nums[0];
        int[] ms = new int[nums.length];
        ms[nums.length - 1] = nums[nums.length - 1];
        for (int i = 1; i < ns.length; i++) {
            if (nums[i] > ns[i - 1]) {
                ns[i] = nums[i];
            } else {
                ns[i] = ns[i - 1];
            }
        }
        for (int i = nums.length - 2; i > -1; i--) {
            if (nums[i] < ms[i + 1]) {
                ms[i] = nums[i];
            } else {
                ms[i] = ms[i + 1];
            }
        }
        int i = 1;
        for (; i < ms.length; i++) {
            if (ms[i] >= ns[i - 1]) {
                break;
            }
        }
        return i;
    }
}
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=915 lang=javascript
 *
 * [915] \u5206\u5272\u6570\u7EC4
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    r = 0
    cur_max = nums[0]
    left_max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        cur_max = Math.max(nums[i], cur_max)
        if (left_max > nums[i]) {
            r = i
            left_max = cur_max
        }
    }
    return r + 1 
};
// @lc code=end`,`/*
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
// @lc code=end`,`/*
 * @lc app=leetcode.cn id=934 lang=javascript
 *
 * [934] \u6700\u77ED\u7684\u6865
 */
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != 1) {
                continue;
            }
            ns = []
            // \u6DF1\u5EA6\u904D\u5386\u627E\u5168\u7B2C\u4E00\u4E2A\u5C9B\u7684\u6240\u6709\u8282\u70B9
            function dfs(x, y) {
                if (0 <= x && 0 <= y && x < grid.length && y < grid[0].length) {
                    if (grid[x][y] == 1) {
                        ns.push([x, y])
                        grid[x][y] = -1
                    } else {
                        return
                    }
                    for (let a of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
                        dfs(a[0], a[1])
                    }
                } 
            }
            dfs(i, j)
            // \u4E00\u5708\u5708\u5411\u5C0F\u5C9B\u5916\u67E5\u8BE2
            let step = 0
            while (true) {
                let tmp = ns
                ns = []
                for (let a of tmp) {
                    let x = a[0]
                    let y = a[1]
                    for (let aa of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
                        if (0 <= aa[0] && 0 <= aa[1] && aa[0] < grid.length && aa[1] < grid[0].length) {
                            if (grid[aa[0]][aa[1]] === 1) {
                                return step
                            } else if (grid[aa[0]][aa[1]] === 0) {
                                ns.push(aa)
                                grid[aa[0]][aa[1]] = -1
                            }
                        }
                    }
                }
                step++
            }
        }
    }
};
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
// @lc code=end`],re=["\u4E24\u6570\u4E4B\u548C","\u4E24\u6570\u4E4B\u548C","\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D","\u76F8\u540C\u7684\u6811","\u5BF9\u79F0\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u952F\u9F7F\u5F62\u5C42\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","\u6700\u957F\u91CD\u590D\u5B50\u4E32","\u4ECE\u524D\u5E8F\u4E0E\u4E2D\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u5408\u4F5C\u8FC7\u81F3\u5C11\u4E09\u6B21\u7684\u6F14\u5458\u548C\u5BFC\u6F14","\u4ECE\u4E2D\u5E8F\u4E0E\u540E\u5E8F\u904D\u5386\u5E8F\u5217\u6784\u9020\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386-ii","\u5C06\u6709\u5E8F\u6570\u7EC4\u8F6C\u6362\u4E3A\u4E8C\u53C9\u641C\u7D22\u6811","\u9500\u552E\u5206\u6790iii","\u6709\u5E8F\u94FE\u8868\u8F6C\u6362\u4E8C\u53C9\u641C\u7D22\u6811","\u76DB\u6700\u591A\u6C34\u7684\u5BB9\u5668","\u5E73\u8861\u4E8C\u53C9\u6811","\u4E8C\u53C9\u6811\u7684\u6700\u5C0F\u6DF1\u5EA6","\u8DEF\u5F84\u603B\u548C","\u8DEF\u5F84\u603B\u548C-ii","\u4E8C\u53C9\u6811\u5C55\u5F00\u4E3A\u94FE\u8868","\u67E5\u8BE2\u8FD1-30-\u5929\u6D3B\u8DC3\u7528\u6237\u6570","\u6587\u7AE0\u6D4F\u89C8-i","\u4E0D\u540C\u7684\u5B50\u5E8F\u5217","\u5E02\u573A\u5206\u6790-i","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488","\u586B\u5145\u6BCF\u4E2A\u8282\u70B9\u7684\u4E0B\u4E00\u4E2A\u53F3\u4FA7\u8282\u70B9\u6307\u9488-ii","\u91CD\u65B0\u683C\u5F0F\u5316\u90E8\u95E8\u8868","\u6768\u8F89\u4E09\u89D2","\u6768\u8F89\u4E09\u89D2-ii","\u4EA4\u66FF\u6253\u5370\u5B57\u7B26\u4E32","\u6574\u6570\u8F6C\u7F57\u9A6C\u6570\u5B57","\u4E09\u89D2\u5F62\u6700\u5C0F\u8DEF\u5F84\u548C","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-ii","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-iii","\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A-iii","\u89C4\u5212\u517C\u804C\u5DE5\u4F5C","\u9A8C\u8BC1\u56DE\u6587\u4E32","\u5355\u8BCD\u63A5\u9F99-ii","\u5355\u8BCD\u63A5\u9F99","\u6700\u957F\u8FDE\u7EED\u5E8F\u5217","\u6C42\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u6570\u5B57\u4E4B\u548C","\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570","\u88AB\u56F4\u7ED5\u7684\u533A\u57DF","\u5206\u5272\u56DE\u6587\u4E32","\u5206\u5272\u56DE\u6587\u4E32-ii","\u514B\u9686\u56FE","\u52A0\u6CB9\u7AD9","\u5206\u53D1\u7CD6\u679C","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-ii","\u590D\u5236\u5E26\u968F\u673A\u6307\u9488\u7684\u94FE\u8868","\u5355\u8BCD\u62C6\u5206","\u6700\u957F\u516C\u5171\u524D\u7F00","\u73AF\u5F62\u94FE\u8868","\u73AF\u5F62\u94FE\u8868-ii","\u91CD\u6392\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386","\u4E8C\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386","lru-\u7F13\u5B58","\u5BF9\u94FE\u8868\u8FDB\u884C\u63D2\u5165\u6392\u5E8F","\u6392\u5E8F\u94FE\u8868","\u4E09\u6570\u4E4B\u548C","\u9006\u6CE2\u5170\u8868\u8FBE\u5F0F\u6C42\u503C","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD","\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4","\u5BFB\u627E\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4\u4E2D\u7684\u6700\u5C0F\u503C","\u6700\u5C0F\u6808","\u6700\u63A5\u8FD1\u7684\u4E09\u6570\u4E4B\u548C","\u76F8\u4EA4\u94FE\u8868","\u5BFB\u627E\u5CF0\u503C","\u7F51\u7EDC\u4FE1\u53F7\u6700\u597D\u7684\u5750\u6807","\u4E24\u4E2A\u76F8\u540C\u5B57\u7B26\u4E4B\u95F4\u7684\u6700\u957F\u5B50\u5B57\u7B26\u4E32","\u6BD4\u8F83\u7248\u672C\u53F7","\u5206\u6570\u5230\u5C0F\u6570","\u68C0\u67E5\u4E24\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u662F\u5426\u76F8\u7B49","\u6700\u5927\u91CD\u590D\u5B50\u5B57\u7B26\u4E32","\u4E24\u6570\u4E4B\u548C-ii-\u8F93\u5165\u6709\u5E8F\u6570\u7EC4","\u8BBE\u8BA1-goal-\u89E3\u6790\u5668","excel\u8868\u5217\u540D\u79F0","\u7EDF\u8BA1\u4E00\u81F4\u5B57\u7B26\u4E32\u7684\u6570\u76EE","\u591A\u6570\u5143\u7D20","\u7535\u8BDD\u53F7\u7801\u7684\u5B57\u6BCD\u7EC4\u5408","\u65E0\u6CD5\u5403\u5348\u9910\u7684\u5B66\u751F\u6570\u91CF","\u5224\u65AD\u5B57\u7B26\u4E32\u7684\u4E24\u534A\u662F\u5426\u76F8\u4F3C","excel-\u8868\u5217\u5E8F\u53F7","\u9636\u4E58\u540E\u7684\u96F6","\u4E8C\u53C9\u641C\u7D22\u6811\u8FED\u4EE3\u5668","\u5730\u4E0B\u57CE\u6E38\u620F","\u7EC4\u5408\u4E24\u4E2A\u8868","\u7B2C\u4E8C\u9AD8\u7684\u85AA\u6C34","\u4EA4\u66FF\u5408\u5E76\u5B57\u7B26\u4E32","\u7B2Cn\u9AD8\u7684\u85AA\u6C34","\u7EDF\u8BA1\u5339\u914D\u68C0\u7D22\u89C4\u5219\u7684\u7269\u54C1\u6570\u91CF","\u5206\u6570\u6392\u540D","\u6700\u5927\u6570","\u56DB\u6570\u4E4B\u548C","\u8FDE\u7EED\u51FA\u73B0\u7684\u6570\u5B57","\u8D85\u8FC7\u7ECF\u7406\u6536\u5165\u7684\u5458\u5DE5","\u67E5\u627E\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1","\u6570\u7EC4\u5143\u7D20\u79EF\u7684\u7B26\u53F7","\u4ECE\u4E0D\u8BA2\u8D2D\u7684\u5BA2\u6237","\u90E8\u95E8\u5DE5\u8D44\u6700\u9AD8\u7684\u5458\u5DE5","\u90E8\u95E8\u5DE5\u8D44\u524D\u4E09\u9AD8\u7684\u6240\u6709\u5458\u5DE5","\u91CD\u590D\u7684dna\u5E8F\u5217","\u8F6E\u8F6C\u6570\u7EC4","\u5220\u9664\u94FE\u8868\u7684\u5012\u6570\u7B2C-n-\u4E2A\u7ED3\u70B9","\u98A0\u5012\u4E8C\u8FDB\u5236\u4F4D","\u4F4D-1-\u7684\u4E2A\u6570","\u5220\u9664\u91CD\u590D\u7684\u7535\u5B50\u90AE\u7BB1","\u4E0A\u5347\u7684\u6E29\u5EA6","\u6253\u5BB6\u52AB\u820D","\u4E8C\u53C9\u6811\u7684\u53F3\u89C6\u56FE","\u4E24\u6570\u76F8\u52A0","\u4E24\u6570\u76F8\u52A0","\u6709\u6548\u7684\u62EC\u53F7","\u5C9B\u5C7F\u6570\u91CF","\u6570\u5B57\u8303\u56F4\u6309\u4F4D\u4E0E","\u5FEB\u4E50\u6570","\u79FB\u9664\u94FE\u8868\u5143\u7D20","\u8BA1\u6570\u8D28\u6570","\u8BA1\u6570\u8D28\u6570","\u540C\u6784\u5B57\u7B26\u4E32","\u53CD\u8F6C\u94FE\u8868","\u8BFE\u7A0B\u8868","\u5B9E\u73B0-trie-\u524D\u7F00\u6811","\u957F\u5EA6\u6700\u5C0F\u7684\u5B50\u6570\u7EC4","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","\u8BFE\u7A0B\u8868-ii","\u6DFB\u52A0\u4E0E\u641C\u7D22\u5355\u8BCD-\u6570\u636E\u7ED3\u6784\u8BBE\u8BA1","\u6253\u5BB6\u52AB\u820D-ii","\u6570\u7EC4\u4E2D\u7684\u7B2Ck\u4E2A\u6700\u5927\u5143\u7D20","\u7EC4\u5408\u603B\u548C-iii","\u5B58\u5728\u91CD\u590D\u5143\u7D20","\u4F7F\u4E24\u5B57\u7B26\u4E32\u4E92\u4E3A\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u7684\u6700\u5C11\u6B65\u9AA4\u6570","\u5B58\u5728\u91CD\u590D\u5143\u7D20-ii","\u62EC\u53F7\u751F\u6210","\u6700\u5927\u6B63\u65B9\u5F62","\u5B8C\u5168\u4E8C\u53C9\u6811\u7684\u8282\u70B9\u4E2A\u6570","\u77E9\u5F62\u9762\u79EF","\u7528\u961F\u5217\u5B9E\u73B0\u6808","\u7FFB\u8F6C\u4E8C\u53C9\u6811","\u57FA\u672C\u8BA1\u7B97\u5668-ii","\u6C47\u603B\u533A\u95F4","\u591A\u6570\u5143\u7D20-ii","\u5408\u5E76k\u4E2A\u5347\u5E8F\u94FE\u8868","\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7B2Ck\u5C0F\u7684\u5143\u7D20","2-\u7684\u5E42","\u7528\u6808\u5B9E\u73B0\u961F\u5217","\u77E5\u9053\u79D8\u5BC6\u7684\u4EBA\u6570","\u56DE\u6587\u94FE\u8868","\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","\u4E8C\u53C9\u6811\u7684\u6700\u8FD1\u516C\u5171\u7956\u5148","\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u9664\u81EA\u8EAB\u4EE5\u5916\u6570\u7EC4\u7684\u4E58\u79EF","\u4E24\u4E24\u4EA4\u6362\u94FE\u8868\u4E2D\u7684\u8282\u70B9","\u641C\u7D22\u4E8C\u7EF4\u77E9\u9635-ii","\u4E3A\u8FD0\u7B97\u8868\u8FBE\u5F0F\u8BBE\u8BA1\u4F18\u5148\u7EA7","\u6709\u6548\u7684\u5B57\u6BCD\u5F02\u4F4D\u8BCD","k-\u4E2A\u4E00\u7EC4\u7FFB\u8F6C\u94FE\u8868","\u4E8C\u53C9\u6811\u7684\u6240\u6709\u8DEF\u5F84","\u5404\u4F4D\u76F8\u52A0","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879","\u53EA\u51FA\u73B0\u4E00\u6B21\u7684\u6570\u5B57-iii","\u884C\u7A0B\u548C\u7528\u6237","\u4E11\u6570","\u4E11\u6570","\u4E11\u6570-ii","\u4E22\u5931\u7684\u6570\u5B57","\u79FB\u9664\u5143\u7D20","\u79FB\u9664\u5143\u7D20","h-\u6307\u6570","h-\u6307\u6570-ii","\u7B2C\u4E00\u4E2A\u9519\u8BEF\u7684\u7248\u672C","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B8C\u5168\u5E73\u65B9\u6570","\u5B9E\u73B0-str-str","\u79FB\u52A8\u96F6","\u9876\u7AEF\u8FED\u4EE3\u5668","\u5BFB\u627E\u91CD\u590D\u6570","\u4E24\u6570\u76F8\u9664","\u5355\u8BCD\u89C4\u5F8B","nim-\u6E38\u620F","\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u4E32\u8054\u6240\u6709\u5355\u8BCD\u7684\u5B50\u4E32","\u533A\u57DF\u548C\u68C0\u7D22-\u6570\u7EC4\u4E0D\u53EF\u53D8","\u4E0B\u4E00\u4E2A\u6392\u5217","\u53BB\u9664\u91CD\u590D\u5B57\u6BCD","\u6700\u957F\u6709\u6548\u62EC\u53F7","\u96F6\u94B1\u5151\u6362","3-\u7684\u5E42","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4","\u6BD4\u7279\u4F4D\u8BA1\u6570","\u5728\u6392\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u548C\u6700\u540E\u4E00\u4E2A\u4F4D\u7F6E","4-\u7684\u5E42","\u53CD\u8F6C\u5B57\u7B26\u4E32","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5143\u97F3\u5B57\u6BCD","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6","\u641C\u7D22\u63D2\u5165\u4F4D\u7F6E","\u4E24\u4E2A\u6570\u7EC4\u7684\u4EA4\u96C6-ii","\u6709\u6548\u7684\u6570\u72EC","\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570","\u89E3\u6570\u72EC","\u4E24\u6574\u6570\u4E4B\u548C","\u731C\u6570\u5B57\u5927\u5C0F","\u5916\u89C2\u6570\u5217","\u8D4E\u91D1\u4FE1","\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u552F\u4E00\u5B57\u7B26","\u627E\u4E0D\u540C","\u7EC4\u5408\u603B\u548C","\u5224\u65AD\u5B50\u5E8F\u5217","\u81F3\u5C11\u6709-k-\u4E2A\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","\u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570","\u7EC4\u5408\u603B\u548C-ii","\u4E8C\u8FDB\u5236\u624B\u8868","\u4E8C\u8FDB\u5236\u624B\u8868","\u5DE6\u53F6\u5B50\u4E4B\u548C","\u6570\u5B57\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\u6570","\u6700\u957F\u56DE\u6587\u4E32","\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570","fizz-buzz","\u7B2C\u4E09\u5927\u7684\u6570","\u5B57\u7B26\u4E32\u76F8\u52A0","\u63A5\u96E8\u6C34","\u5B57\u7B26\u4E32\u76F8\u4E58","\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u6570","\u901A\u914D\u7B26\u5339\u914D","\u6392\u5217\u786C\u5E01","\u6570\u7EC4\u4E2D\u91CD\u590D\u7684\u6570\u636E","\u627E\u5230\u6240\u6709\u6570\u7EC4\u4E2D\u6D88\u5931\u7684\u6570\u5B57","\u8DF3\u8DC3\u6E38\u620F-ii","\u5206\u53D1\u997C\u5E72","\u91CD\u590D\u7684\u5B50\u5B57\u7B26\u4E32","\u5168\u6392\u5217","\u6C49\u660E\u8DDD\u79BB","\u5C9B\u5C7F\u7684\u5468\u957F","\u5168\u6392\u5217-ii","\u6570\u5B57\u7684\u8865\u6570","\u65CB\u8F6C\u56FE\u50CF","\u795E\u5947\u5B57\u7B26\u4E32","\u5BC6\u94A5\u683C\u5F0F\u5316","\u6700\u5927\u8FDE\u7EED-1-\u7684\u4E2A\u6570","\u5B57\u6BCD\u5F02\u4F4D\u8BCD\u5206\u7EC4","\u6784\u9020\u77E9\u5F62","\u63D0\u83AB\u653B\u51FB","\u4E0B\u4E00\u4E2A\u66F4\u5927\u5143\u7D20-i","\u6700\u957F\u56DE\u6587\u5B50\u4E32","pow-x-n","\u952E\u76D8\u884C","\u4E8C\u53C9\u641C\u7D22\u6811\u4E2D\u7684\u4F17\u6570","\u4E03\u8FDB\u5236\u6570","\u76F8\u5BF9\u540D\u6B21","\u5B8C\u7F8E\u6570","\u6590\u6CE2\u90A3\u5951\u6570","n-\u7687\u540E","\u6E38\u620F\u73A9\u6CD5\u5206\u6790-i","n\u7687\u540E-ii","\u68C0\u6D4B\u5927\u5199\u5B57\u6BCD","\u6700\u957F\u7279\u6B8A\u5E8F\u5217-\u2170","\u6700\u5927\u5B50\u6570\u7EC4\u548C","\u4E8C\u53C9\u641C\u7D22\u6811\u7684\u6700\u5C0F\u7EDD\u5BF9\u5DEE","\u87BA\u65CB\u77E9\u9635","\u53CD\u8F6C\u5B57\u7B26\u4E32-ii","\u4E8C\u53C9\u6811\u7684\u76F4\u5F84","\u8DF3\u8DC3\u6E38\u620F","\u5B66\u751F\u51FA\u52E4\u8BB0\u5F55-i","\u53CD\u8F6C\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD-iii","n-\u53C9\u6811\u7684\u6700\u5927\u6DF1\u5EA6","\u5408\u5E76\u533A\u95F4","\u6570\u7EC4\u62C6\u5206","\u4E8C\u53C9\u6811\u7684\u5761\u5EA6","\u91CD\u5851\u77E9\u9635","\u63D2\u5165\u533A\u95F4","\u53E6\u4E00\u68F5\u6811\u7684\u5B50\u6811","\u5206\u7CD6\u679C","\u6700\u540E\u4E00\u4E2A\u5355\u8BCD\u7684\u957F\u5EA6","\u5BFB\u627E\u7528\u6237\u63A8\u8350\u4EBA","\u8BA2\u5355\u6700\u591A\u7684\u5BA2\u6237","n-\u53C9\u6811\u7684\u524D\u5E8F\u904D\u5386","\u87BA\u65CB\u77E9\u9635-ii","n-\u53C9\u6811\u7684\u540E\u5E8F\u904D\u5386","\u6700\u957F\u548C\u8C10\u5B50\u5E8F\u5217","\u5927\u7684\u56FD\u5BB6","\u8D85\u8FC7-5-\u540D\u5B66\u751F\u7684\u8BFE","\u8303\u56F4\u6C42\u548C-ii","\u4E24\u4E2A\u5217\u8868\u7684\u6700\u5C0F\u7D22\u5F15\u603B\u548C","z-\u5B57\u5F62\u53D8\u6362","\u6392\u5217\u5E8F\u5217","\u4F53\u80B2\u9986\u7684\u4EBA\u6D41\u91CF","\u79CD\u82B1\u95EE\u9898","\u6839\u636E\u4E8C\u53C9\u6811\u521B\u5EFA\u5B57\u7B26\u4E32","\u9500\u552E\u5458","\u6811\u8282\u70B9","\u65CB\u8F6C\u94FE\u8868","\u5408\u5E76\u4E8C\u53C9\u6811","\u4E0D\u540C\u8DEF\u5F84","\u6709\u8DA3\u7684\u7535\u5F71","\u6362\u5EA7\u4F4D","\u53D8\u66F4\u6027\u522B","\u4E09\u4E2A\u6570\u7684\u6700\u5927\u4E58\u79EF","\u4E0D\u540C\u8DEF\u5F84-ii","\u4E8C\u53C9\u6811\u7684\u5C42\u5E73\u5747\u503C","\u6700\u5C0F\u8DEF\u5F84\u548C","\u5B50\u6570\u7EC4\u6700\u5927\u5E73\u5747\u6570-i","\u9519\u8BEF\u7684\u96C6\u5408","\u6709\u6548\u6570\u5B57","\u4E24\u6570\u4E4B\u548C-iv-\u8F93\u5165\u4E8C\u53C9\u641C\u7D22\u6811","\u673A\u5668\u4EBA\u80FD\u5426\u8FD4\u56DE\u539F\u70B9","\u52A0\u4E00","\u56FE\u7247\u5E73\u6ED1\u5668","\u4E8C\u8FDB\u5236\u6C42\u548C","\u4E8C\u53C9\u6811\u4E2D\u7B2C\u4E8C\u5C0F\u7684\u8282\u70B9","\u6587\u672C\u5DE6\u53F3\u5BF9\u9F50","sqrt-x","\u6574\u6570\u53CD\u8F6C","\u722C\u697C\u68AF","\u722C\u697C\u68AF","\u7B80\u5316\u8DEF\u5F84","\u7F16\u8F91\u8DDD\u79BB","\u77E9\u9635\u7F6E\u96F6","\u641C\u7D22\u4E8C\u7EF4\u77E9\u9635","\u81F3\u5C11\u662F\u5176\u4ED6\u6570\u5B57\u4E24\u500D\u7684\u6700\u5927\u6570","\u989C\u8272\u5206\u7C7B","\u6700\u5C0F\u8986\u76D6\u5B50\u4E32","\u7EC4\u5408","\u7B2Ck\u4E2A\u8BED\u6CD5\u7B26\u53F7","\u5B50\u96C6","\u4E8C\u53C9\u641C\u7D22\u6811\u8282\u70B9\u6700\u5C0F\u8DDD\u79BB","\u5B57\u6BCD\u5927\u5C0F\u5199\u5168\u6392\u5217","\u5355\u8BCD\u641C\u7D22","\u591A\u7C73\u8BFA\u548C\u6258\u7C73\u8BFA\u5E73\u94FA","\u81EA\u5B9A\u4E49\u5B57\u7B26\u4E32\u6392\u5E8F","\u65CB\u8F6C\u5B57\u7B26\u4E32","\u5B57\u7B26\u4E32\u8F6C\u6362\u6574\u6570-atoi","\u5220\u9664\u6709\u5E8F\u6570\u7EC4\u4E2D\u7684\u91CD\u590D\u9879-ii","\u5199\u5B57\u7B26\u4E32\u9700\u8981\u7684\u884C\u6570","\u641C\u7D22\u65CB\u8F6C\u6392\u5E8F\u6570\u7EC4-ii","\u6A21\u7CCA\u5750\u6807","\u6700\u5E38\u89C1\u7684\u5355\u8BCD","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20-ii","\u5220\u9664\u6392\u5E8F\u94FE\u8868\u4E2D\u7684\u91CD\u590D\u5143\u7D20","\u77E9\u5F62\u91CD\u53E0","\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","\u67F1\u72B6\u56FE\u4E2D\u6700\u5927\u7684\u77E9\u5F62","\u6700\u5927\u77E9\u5F62","\u5206\u9694\u94FE\u8868","\u548C\u81F3\u5C11\u4E3A-k-\u7684\u6700\u77ED\u5B50\u6570\u7EC4","\u6270\u4E71\u5B57\u7B26\u4E32","\u94FE\u8868\u7684\u4E2D\u95F4\u7ED3\u70B9","\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4","\u683C\u96F7\u7F16\u7801","\u56DE\u6587\u6570","\u5B50\u96C6-ii","\u80A1\u7968\u4EF7\u683C\u8DE8\u5EA6","\u6700\u5927\u4E3A-n-\u7684\u6570\u5B57\u7EC4\u5408","\u6700\u5927\u4E3A-n-\u7684\u6570\u5B57\u7EC4\u5408","\u6C34\u679C\u6210\u7BEE","\u5B50\u6570\u7EC4\u7684\u6700\u5C0F\u503C\u4E4B\u548C","\u89E3\u7801\u65B9\u6CD5","\u5206\u5272\u6570\u7EC4","\u5206\u5272\u6570\u7EC4","\u53CD\u8F6C\u94FE\u8868-ii","\u590D\u539F-ip-\u5730\u5740","\u6700\u77ED\u7684\u6865","\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811-ii","\u4E0D\u540C\u7684\u4E8C\u53C9\u641C\u7D22\u6811","\u4EA4\u9519\u5B57\u7B26\u4E32","\u9A8C\u8BC1\u4E8C\u53C9\u641C\u7D22\u6811","\u6062\u590D\u4E8C\u53C9\u641C\u7D22\u6811"],se=["js","py","py","py","py","java","java","py","py","java","sql","java","java","py","sql","java","py","py","py","py","java","java","sql","sql","cpp","sql","java","java","sql","py","py","java","py","java","py","java","java","js","java","py","java","java","java","java","py","java","js","java","py","js","java","py","js","py","js","py","py","js","js","py","py","js","java","java","py","java","java","java","java","py","py","py","java","java","py","java","cpp","java","cpp","cpp","cpp","py","cpp","py","py","java","cpp","py","cpp","cpp","java","sql","sql","java","sql","java","sql","cpp","py","sql","sql","sql","java","sql","sql","sql","java","java","py","py","py","sql","sql","java","java","cpp","py","py","java","java","py","py","cpp","java","py","py","java","java","java","py","java","java","java","cpp","cpp","py","py","py","py","cpp","cpp","cpp","py","py","cpp","py","cpp","py","cpp","py","py","java","py","py","cpp","py","cpp","py","cpp","cpp","py","py","py","py","py","cpp","sql","cpp","py","cpp","py","java","py","cpp","cpp","py","java","py","py","py","cpp","cpp","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","js","py","py","py","py","py","py","py","py","java","py","java","py","java","js","js","py","js","js","js","py","py","js","py","js","py","js","py","java","java","py","java","java","py","java","py","java","java","java","py","java","java","java","py","py","java","js","js","js","js","js","py","sql","py","js","js","py","js","py","js","cpp","py","cpp","cpp","cpp","py","cpp","cpp","cpp","py","js","js","py","sql","sql","js","py","js","java","sql","sql","java","java","py","py","sql","cpp","py","sql","sql","py","py","py","sql","sql","sql","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","py","java","py","py","py","py","py","cpp","py","py","py","java","py","js","java","py","cpp","cpp","py","py","py","js","py","cpp","js","py","py","js","cpp","py","cpp","py","java","cpp","js","py","py","py","py","java","java","py","java","java","py","java","js","java","java","js","py","java","java","java","java","java"],le=[[0,1],[1,1],[115,2],[116,2],[185,3],[214,4],[248,5],[288,6],[316,7],[335,8],[353,9],[2,10],[16,11],[32,12],[44,13],[55,14],[64,15],[70,16],[84,17],[98,18],[108,19],[117,20],[129,21],[138,22],[147,23],[157,24],[161,25],[164,26],[171,27],[172,27],[178,28],[182,29],[186,30],[188,31],[190,32],[193,33],[195,34],[200,35],[202,36],[204,37],[207,38],[211,39],[215,40],[221,41],[225,42],[226,43],[228,44],[232,45],[235,46],[238,47],[240,48],[244,49],[249,50],[256,51],[258,52],[261,53],[263,54],[266,55],[270,56],[274,57],[277,58],[281,59],[289,60],[295,61],[297,62],[302,63],[304,64],[307,65],[310,66],[312,67],[314,68],[315,69],[317,70],[318,70],[319,71],[320,72],[321,73],[322,74],[324,75],[325,76],[326,77],[328,78],[331,79],[336,80],[338,81],[341,82],[342,83],[344,84],[345,84],[346,85],[347,86],[349,87],[351,88],[352,89],[354,90],[360,91],[363,92],[364,93],[366,94],[367,95],[368,96],[369,97],[370,98],[371,99],[3,100],[4,101],[5,102],[6,103],[7,104],[9,105],[11,106],[12,107],[13,108],[15,109],[17,110],[18,111],[19,112],[20,113],[21,114],[24,115],[26,116],[27,117],[29,118],[30,119],[33,120],[34,121],[35,122],[36,123],[37,123],[39,125],[40,126],[41,127],[42,128],[43,129],[45,130],[46,131],[47,132],[48,133],[49,134],[50,135],[51,136],[52,137],[53,138],[54,139],[56,141],[57,142],[58,143],[59,144],[60,145],[61,146],[62,147],[63,148],[65,150],[66,151],[67,152],[68,153],[69,155],[71,160],[72,162],[75,165],[76,166],[79,167],[81,168],[83,169],[87,171],[88,172],[89,173],[90,174],[91,175],[92,176],[94,177],[96,178],[97,179],[99,180],[100,181],[101,182],[103,183],[104,184],[105,185],[106,187],[107,189],[109,190],[110,191],[111,196],[112,197],[113,198],[114,199],[118,200],[119,201],[120,202],[121,203],[122,204],[123,204],[124,205],[125,206],[126,207],[127,208],[128,209],[130,210],[131,211],[132,213],[133,215],[134,216],[135,217],[137,219],[139,221],[140,222],[141,223],[142,225],[143,226],[144,227],[145,228],[146,229],[148,230],[149,231],[150,232],[152,234],[153,235],[154,236],[155,237],[156,238],[158,240],[159,241],[160,242],[162,257],[163,258],[165,260],[166,262],[167,263],[168,263],[169,264],[170,268],[173,274],[174,275],[175,278],[176,279],[177,279],[179,283],[180,284],[181,287],[183,290],[184,292],[187,303],[189,316],[191,322],[192,326],[194,338],[196,342],[197,344],[198,345],[199,349],[201,350],[203,367],[205,371],[206,374],[208,383],[209,387],[210,389],[212,392],[213,395],[216,401],[217,401],[218,404],[219,405],[220,409],[222,412],[223,414],[224,415],[227,434],[229,441],[230,442],[231,448],[233,455],[234,459],[236,461],[237,463],[239,476],[241,481],[242,482],[243,485],[245,492],[246,495],[247,496],[250,500],[251,501],[252,504],[253,506],[254,507],[255,509],[257,511],[259,520],[260,521],[262,530],[264,541],[265,543],[267,551],[268,557],[269,559],[271,561],[272,563],[273,566],[275,572],[276,575],[278,584],[279,586],[280,589],[282,590],[283,594],[284,595],[285,596],[286,598],[287,599],[290,601],[291,605],[292,606],[293,607],[294,608],[296,617],[298,620],[299,626],[300,627],[301,628],[303,637],[305,643],[306,645],[308,653],[309,657],[311,661],[313,671],[323,747],[327,779],[329,783],[330,784],[332,790],[333,791],[334,796],[337,806],[339,816],[340,819],[343,836],[348,862],[350,876],[355,901],[356,902],[357,902],[358,904],[359,907],[361,915],[362,915],[365,934],[8,1044],[10,1050],[14,1084],[22,1141],[23,1148],[25,1158],[28,1179],[31,1195],[38,1235],[73,1620],[74,1624],[77,1662],[78,1668],[80,1678],[82,1684],[85,1700],[86,1704],[93,1768],[95,1773],[102,1822],[136,2186],[151,2327]],ae=["js","py","java","sql","cpp"],oe=[[0,1],[37,123],[46,131],[49,134],[52,137],[54,139],[57,142],[58,143],[61,146],[205,371],[219,405],[220,409],[222,412],[223,414],[224,415],[227,434],[229,441],[231,448],[251,501],[252,504],[253,506],[254,507],[255,509],[259,520],[260,521],[262,530],[264,541],[275,572],[276,575],[280,589],[282,590],[329,783],[337,806],[340,819],[343,836],[350,876],[362,915],[365,934]],ce=[[1,1],[116,2],[185,3],[248,5],[288,6],[316,7],[335,8],[353,9],[2,10],[16,11],[32,12],[44,13],[55,14],[64,15],[70,16],[84,17],[98,18],[108,19],[117,20],[129,21],[138,22],[147,23],[157,24],[161,25],[164,26],[172,27],[178,28],[182,29],[186,30],[188,31],[190,32],[193,33],[195,34],[200,35],[202,36],[204,37],[207,38],[211,39],[215,40],[221,41],[225,42],[226,43],[228,44],[232,45],[235,46],[238,47],[240,48],[244,49],[249,50],[256,51],[258,52],[261,53],[263,54],[266,55],[270,56],[274,57],[277,58],[281,59],[289,60],[295,61],[297,62],[302,63],[304,64],[307,65],[310,66],[312,67],[314,68],[315,69],[318,70],[319,71],[320,72],[321,73],[322,74],[324,75],[325,76],[326,77],[328,78],[331,79],[336,80],[338,81],[341,82],[342,83],[345,84],[347,86],[351,88],[352,89],[354,90],[360,91],[366,94],[3,100],[4,101],[7,104],[13,108],[17,110],[18,111],[19,112],[29,118],[30,119],[34,121],[39,125],[48,133],[51,136],[53,138],[56,141],[59,144],[60,145],[69,155],[71,160],[81,168],[83,169],[87,171],[109,190],[110,191],[120,202],[121,203],[124,205],[125,206],[135,217],[137,219],[142,225],[143,226],[145,228],[149,231],[150,232],[152,234],[153,235],[155,237],[160,242],[162,257],[163,258],[168,263],[170,268],[175,278],[177,279],[179,283],[183,290],[184,292],[187,303],[189,316],[191,322],[192,326],[194,338],[196,342],[197,344],[198,345],[199,349],[201,350],[203,367],[206,374],[208,383],[209,387],[210,389],[212,392],[213,395],[217,401],[230,442],[292,606],[296,617],[301,628],[303,637],[305,643],[306,645],[308,653],[309,657],[311,661],[313,671],[334,796],[357,902],[8,1044],[74,1624],[136,2186]],de=[[214,4],[171,27],[317,70],[363,92],[364,93],[367,95],[368,96],[369,97],[370,98],[371,99],[5,102],[6,103],[9,105],[11,106],[12,107],[15,109],[20,113],[21,114],[26,116],[27,117],[33,120],[35,122],[36,123],[40,126],[41,127],[42,128],[43,129],[45,130],[47,132],[50,135],[62,147],[63,148],[65,150],[66,151],[67,152],[68,153],[72,162],[75,165],[90,174],[106,187],[107,189],[113,198],[114,199],[118,200],[119,201],[123,204],[126,207],[127,208],[128,209],[130,210],[131,211],[132,213],[176,279],[216,401],[218,404],[233,455],[234,459],[236,461],[237,463],[239,476],[241,481],[242,482],[243,485],[245,492],[246,495],[247,496],[250,500],[283,594],[286,598],[287,599],[327,779],[330,784],[348,862],[355,901],[356,902],[358,904],[359,907],[361,915],[31,1195],[38,1235],[73,1620],[77,1662],[85,1700],[93,1768],[95,1773],[102,1822],[151,2327]],ue=[[91,175],[92,176],[94,177],[96,178],[99,180],[100,181],[101,182],[103,183],[104,184],[105,185],[111,196],[112,197],[166,262],[257,511],[278,584],[279,586],[284,595],[285,596],[290,601],[293,607],[294,608],[298,620],[299,626],[300,627],[10,1050],[14,1084],[22,1141],[23,1148],[25,1158],[28,1179]],pe=[[115,2],[344,84],[346,85],[349,87],[24,115],[76,166],[79,167],[88,172],[89,173],[97,179],[122,204],[133,215],[134,216],[139,221],[140,222],[141,223],[144,227],[146,229],[148,230],[154,236],[156,238],[158,240],[159,241],[165,260],[167,263],[169,264],[173,274],[174,275],[180,284],[181,287],[265,543],[267,551],[268,557],[269,559],[271,561],[272,563],[273,566],[291,605],[323,747],[332,790],[333,791],[339,816],[78,1668],[80,1678],[82,1684],[86,1704]],fe={code:ie,name:re,type:se,number:le,allTypes:ae,js:oe,py:ce,java:de,sql:ue,cpp:pe},me={github:"https://github.com/ncdhz/leetcode/",codeMessage:{java:{name:"Java"},py:{name:"Python"},js:{name:"JavaScript"},c:{name:"C Language"},cpp:{name:"C++"},cs:{name:"C#"},ts:{name:"TypeScript"},rb:{name:"Ruby"},swift:{name:"Swift"},scala:{name:"Scala"},kt:{name:"Kotlin"},rust:{name:"Rust"},php:{name:"PHP"},rkt:{name:"Racket"},elixir:{name:"Elixir"},dart:{name:"Dart"},go:{name:"Go"},sql:{name:"SQL"}},itemSpace:10,menuSpace:5,authorImg:"./logo.png",startFlag:"code=start",endFlag:"code=end"};var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z"}}]},name:"copyright-circle",theme:"outlined"};const he=ge;function Sn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){ve(o,c,i[c])})}return o}function ve(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var hn=function(s,i){var r=Sn({},s,i.attrs);return A(sn,Sn({},r,{icon:he}),null)};hn.displayName="CopyrightCircleOutlined";hn.inheritAttrs=!1;const Cn=hn;var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]},name:"github",theme:"outlined"};const be=ye;function wn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){_e(o,c,i[c])})}return o}function _e(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var vn=function(s,i){var r=wn({},s,i.attrs);return A(sn,wn({},r,{icon:be}),null)};vn.displayName="GithubOutlined";vn.inheritAttrs=!1;const xe=vn;var je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"}}]},name:"menu",theme:"outlined"};const Ne=je;function Ln(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Se(o,c,i[c])})}return o}function Se(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var yn=function(s,i){var r=Ln({},s,i.attrs);return A(sn,Ln({},r,{icon:Ne}),null)};yn.displayName="MenuOutlined";yn.inheritAttrs=!1;const we=yn;var Le={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4zM100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4zm116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 00-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 002.1-5.4V432c0-2.2-1.8-4-4-4z"}}]},name:"ordered-list",theme:"outlined"};const ke=Le;function kn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Te(o,c,i[c])})}return o}function Te(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var bn=function(s,i){var r=kn({},s,i.attrs);return A(sn,kn({},r,{icon:ke}),null)};bn.displayName="OrderedListOutlined";bn.inheritAttrs=!1;const Ie=bn;var Ee={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"unordered-list",theme:"outlined"};const Ae=Ee;function Tn(o){for(var s=1;s<arguments.length;s++){var i=arguments[s]!=null?Object(arguments[s]):{},r=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(c){return Object.getOwnPropertyDescriptor(i,c).enumerable}))),r.forEach(function(c){Oe(o,c,i[c])})}return o}function Oe(o,s,i){return s in o?Object.defineProperty(o,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):o[s]=i,o}var _n=function(s,i){var r=Tn({},s,i.attrs);return A(sn,Tn({},r,{icon:Ae}),null)};_n.displayName="UnorderedListOutlined";_n.inheritAttrs=!1;const Ce=_n,Dn=$({__name:"CodeMainMenu",props:{theme:{type:String,default:"dark",require:!1},mode:{type:String,default:"horizontal",require:!1},inlineCollapsed:{type:Boolean,default:!1}},setup(o){var d;const s=(d=en())==null?void 0:d.proxy,i=R([0]);function r({key:t}){t!==i.value[0]&&(s==null||s.$bus.emit("menuItemId",t))}const c=s==null?void 0:s.$config;return(t,n)=>{const e=M("a-menu-item"),y=M("a-menu");return k(),D(y,{theme:o.theme,mode:o.mode,inlineCollapsed:o.inlineCollapsed,selectedKeys:i.value,"onUpdate:selectedKeys":n[0]||(n[0]=u=>i.value=u),style:{lineHeight:"64px"},onClick:r},{default:E(()=>{var u;return[(k(),D(e,{key:0},{default:E(()=>[V("Home")]),_:1})),(k(!0),X(Y,null,dn((u=t.$db)==null?void 0:u.allTypes,(g,h)=>(k(),D(e,{key:h+1},{default:E(()=>{var j;return[V(J((j=N(c))==null?void 0:j.codeMessage[g].name),1)]}),_:2},1024))),128))]}),_:1},8,["theme","mode","inlineCollapsed","selectedKeys"])}}}),zn=$({__name:"CodeSearch",setup(o){const s=en(),i=s==null?void 0:s.proxy,r=i==null?void 0:i.$bus,c=i==null?void 0:i.$db,d=i==null?void 0:i.$config,t=R(""),n=R([]);function e(u,g){r==null||r.emit("searchId",g.id)}function y(u){const g=new RegExp(u);let h=[];for(const j of c==null?void 0:c.number)(g.test(c==null?void 0:c.name[j[0]])||g.test(""+j[1]))&&h.push({value:`${j[1]}.${c==null?void 0:c.name[j[0]]} ${d==null?void 0:d.codeMessage[c==null?void 0:c.type[j[0]]].name}`,id:j});h.length>6&&(h=h.slice(0,6)),n.value=h}return(u,g)=>{const h=M("a-auto-complete");return k(),D(h,{value:t.value,"onUpdate:value":g[0]||(g[0]=j=>t.value=j),style:{width:"150px"},placeholder:"number or name",onSelect:e,onSearch:y,options:n.value,"dropdown-match-select-width":210},null,8,["value","options"])}}}),De={class:"logo"},ze=["href"],Me=$({__name:"CodeHeader",setup(o){var r;const s=(r=en())==null?void 0:r.proxy,i=s==null?void 0:s.$config;return(c,d)=>{const t=M("a-space"),n=M("a-layout-header");return k(),D(n,{class:"header"},{default:E(()=>[nn("div",De,[A(t,{align:"center",size:20},{default:E(()=>{var e;return[A(zn),nn("a",{href:(e=N(i))==null?void 0:e.github},[A(N(xe),{class:"logo_icon"})],8,ze)]}),_:1})]),A(Dn)]),_:1})}}});var Mn={exports:{}};(function(o){var s=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=function(r){var c=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,t={},n={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function a(l){return l instanceof e?new e(l.type,a(l.content),l.alias):Array.isArray(l)?l.map(a):l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++d}),a.__id},clone:function a(l,m){m=m||{};var f,v;switch(n.util.type(l)){case"Object":if(v=n.util.objId(l),m[v])return m[v];f={},m[v]=f;for(var x in l)l.hasOwnProperty(x)&&(f[x]=a(l[x],m));return f;case"Array":return v=n.util.objId(l),m[v]?m[v]:(f=[],m[v]=f,l.forEach(function(O,p){f[p]=a(O,m)}),f);default:return l}},getLanguage:function(a){for(;a;){var l=c.exec(a.className);if(l)return l[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,l){a.className=a.className.replace(RegExp(c,"gi"),""),a.classList.add("language-"+l)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(f){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(f.stack)||[])[1];if(a){var l=document.getElementsByTagName("script");for(var m in l)if(l[m].src==a)return l[m]}return null}},isActive:function(a,l,m){for(var f="no-"+l;a;){var v=a.classList;if(v.contains(l))return!0;if(v.contains(f))return!1;a=a.parentElement}return!!m}},languages:{plain:t,plaintext:t,text:t,txt:t,extend:function(a,l){var m=n.util.clone(n.languages[a]);for(var f in l)m[f]=l[f];return m},insertBefore:function(a,l,m,f){f=f||n.languages;var v=f[a],x={};for(var O in v)if(v.hasOwnProperty(O)){if(O==l)for(var p in m)m.hasOwnProperty(p)&&(x[p]=m[p]);m.hasOwnProperty(O)||(x[O]=v[O])}var b=f[a];return f[a]=x,n.languages.DFS(n.languages,function(_,w){w===b&&_!=a&&(this[_]=x)}),x},DFS:function a(l,m,f,v){v=v||{};var x=n.util.objId;for(var O in l)if(l.hasOwnProperty(O)){m.call(l,O,l[O],f||O);var p=l[O],b=n.util.type(p);b==="Object"&&!v[x(p)]?(v[x(p)]=!0,a(p,m,null,v)):b==="Array"&&!v[x(p)]&&(v[x(p)]=!0,a(p,m,O,v))}}},plugins:{},highlightAll:function(a,l){n.highlightAllUnder(document,a,l)},highlightAllUnder:function(a,l,m){var f={callback:m,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",f),f.elements=Array.prototype.slice.apply(f.container.querySelectorAll(f.selector)),n.hooks.run("before-all-elements-highlight",f);for(var v=0,x;x=f.elements[v++];)n.highlightElement(x,l===!0,f.callback)},highlightElement:function(a,l,m){var f=n.util.getLanguage(a),v=n.languages[f];n.util.setLanguage(a,f);var x=a.parentElement;x&&x.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(x,f);var O=a.textContent,p={element:a,language:f,grammar:v,code:O};function b(w){p.highlightedCode=w,n.hooks.run("before-insert",p),p.element.innerHTML=p.highlightedCode,n.hooks.run("after-highlight",p),n.hooks.run("complete",p),m&&m.call(p.element)}if(n.hooks.run("before-sanity-check",p),x=p.element.parentElement,x&&x.nodeName.toLowerCase()==="pre"&&!x.hasAttribute("tabindex")&&x.setAttribute("tabindex","0"),!p.code){n.hooks.run("complete",p),m&&m.call(p.element);return}if(n.hooks.run("before-highlight",p),!p.grammar){b(n.util.encode(p.code));return}if(l&&r.Worker){var _=new Worker(n.filename);_.onmessage=function(w){b(w.data)},_.postMessage(JSON.stringify({language:p.language,code:p.code,immediateClose:!0}))}else b(n.highlight(p.code,p.grammar,p.language))},highlight:function(a,l,m){var f={code:a,grammar:l,language:m};if(n.hooks.run("before-tokenize",f),!f.grammar)throw new Error('The language "'+f.language+'" has no grammar.');return f.tokens=n.tokenize(f.code,f.grammar),n.hooks.run("after-tokenize",f),e.stringify(n.util.encode(f.tokens),f.language)},tokenize:function(a,l){var m=l.rest;if(m){for(var f in m)l[f]=m[f];delete l.rest}var v=new g;return h(v,v.head,a),u(a,v,l,v.head,0),C(v)},hooks:{all:{},add:function(a,l){var m=n.hooks.all;m[a]=m[a]||[],m[a].push(l)},run:function(a,l){var m=n.hooks.all[a];if(!(!m||!m.length))for(var f=0,v;v=m[f++];)v(l)}},Token:e};r.Prism=n;function e(a,l,m,f){this.type=a,this.content=l,this.alias=m,this.length=(f||"").length|0}e.stringify=function a(l,m){if(typeof l=="string")return l;if(Array.isArray(l)){var f="";return l.forEach(function(b){f+=a(b,m)}),f}var v={type:l.type,content:a(l.content,m),tag:"span",classes:["token",l.type],attributes:{},language:m},x=l.alias;x&&(Array.isArray(x)?Array.prototype.push.apply(v.classes,x):v.classes.push(x)),n.hooks.run("wrap",v);var O="";for(var p in v.attributes)O+=" "+p+'="'+(v.attributes[p]||"").replace(/"/g,"&quot;")+'"';return"<"+v.tag+' class="'+v.classes.join(" ")+'"'+O+">"+v.content+"</"+v.tag+">"};function y(a,l,m,f){a.lastIndex=l;var v=a.exec(m);if(v&&f&&v[1]){var x=v[1].length;v.index+=x,v[0]=v[0].slice(x)}return v}function u(a,l,m,f,v,x){for(var O in m)if(!(!m.hasOwnProperty(O)||!m[O])){var p=m[O];p=Array.isArray(p)?p:[p];for(var b=0;b<p.length;++b){if(x&&x.cause==O+","+b)return;var _=p[b],w=_.inside,I=!!_.lookbehind,S=!!_.greedy,z=_.alias;if(S&&!_.pattern.global){var B=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,B+"g")}for(var H=_.pattern||_,P=f.next,K=v;P!==l.tail&&!(x&&K>=x.reach);K+=P.value.length,P=P.next){var Z=P.value;if(l.length>a.length)return;if(!(Z instanceof e)){var ln=1,W;if(S){if(W=y(H,K,a,I),!W||W.index>=a.length)break;var an=W.index,Pn=W.index+W[0].length,Q=K;for(Q+=P.value.length;an>=Q;)P=P.next,Q+=P.value.length;if(Q-=P.value.length,K=Q,P.value instanceof e)continue;for(var tn=P;tn!==l.tail&&(Q<Pn||typeof tn.value=="string");tn=tn.next)ln++,Q+=tn.value.length;ln--,Z=a.slice(K,Q),W.index-=K}else if(W=y(H,0,Z,I),!W)continue;var an=W.index,on=W[0],un=Z.slice(0,an),xn=Z.slice(an+on.length),pn=K+Z.length;x&&pn>x.reach&&(x.reach=pn);var cn=P.prev;un&&(cn=h(l,cn,un),K+=un.length),j(l,cn,ln);var Un=new e(O,w?n.tokenize(on,w):on,z,on);if(P=h(l,cn,Un),xn&&h(l,P,xn),ln>1){var fn={cause:O+","+b,reach:pn};u(a,l,m,P.prev,K,fn),x&&fn.reach>x.reach&&(x.reach=fn.reach)}}}}}}function g(){var a={value:null,prev:null,next:null},l={value:null,prev:a,next:null};a.next=l,this.head=a,this.tail=l,this.length=0}function h(a,l,m){var f=l.next,v={value:m,prev:l,next:f};return l.next=v,f.prev=v,a.length++,v}function j(a,l,m){for(var f=l.next,v=0;v<m&&f!==a.tail;v++)f=f.next;l.next=f,f.prev=l,a.length-=v}function C(a){for(var l=[],m=a.head.next;m!==a.tail;)l.push(m.value),m=m.next;return l}if(!r.document)return r.addEventListener&&(n.disableWorkerMessageHandler||r.addEventListener("message",function(a){var l=JSON.parse(a.data),m=l.language,f=l.code,v=l.immediateClose;r.postMessage(n.highlight(f,n.languages[m],m)),v&&r.close()},!1)),n;var L=n.util.currentScript();L&&(n.filename=L.src,L.hasAttribute("data-manual")&&(n.manual=!0));function T(){n.manual||n.highlightAll()}if(!n.manual){var q=document.readyState;q==="loading"||q==="interactive"&&L&&L.defer?document.addEventListener("DOMContentLoaded",T):window.requestAnimationFrame?window.requestAnimationFrame(T):window.setTimeout(T,16)}return n}(s);o.exports&&(o.exports=i),typeof gn<"u"&&(gn.Prism=i)})(Mn);const mn=Mn.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/};Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python;Prism.languages.py=Prism.languages.python;(function(o){var s=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,i=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,r={pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};o.languages.java=o.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[r,{pattern:RegExp(/(^|[^\w.])/.source+i+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:r.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+i+/[A-Z]\w*\b/.source),lookbehind:!0,inside:r.inside}],keyword:s,function:[o.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),o.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),o.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":r,keyword:s,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+i+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:r.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+i+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:r.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/};Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;(function(o){var s=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,i=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return s.source});o.languages.cpp=o.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return s.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:s,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),o.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return i})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),o.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:o.languages.cpp}}}}),o.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),o.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:o.languages.extend("cpp",{})}}),o.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},o.languages.cpp["base-clause"])})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var o="line-numbers",s=/\n(?!$)/g,i=Prism.plugins.lineNumbers={getLine:function(t,n){if(!(t.tagName!=="PRE"||!t.classList.contains(o))){var e=t.querySelector(".line-numbers-rows");if(!!e){var y=parseInt(t.getAttribute("data-start"),10)||1,u=y+(e.children.length-1);n<y&&(n=y),n>u&&(n=u);var g=n-y;return e.children[g]}}},resize:function(t){r([t])},assumeViewportIndependence:!0};function r(t){if(t=t.filter(function(e){var y=c(e),u=y["white-space"];return u==="pre-wrap"||u==="pre-line"}),t.length!=0){var n=t.map(function(e){var y=e.querySelector("code"),u=e.querySelector(".line-numbers-rows");if(!(!y||!u)){var g=e.querySelector(".line-numbers-sizer"),h=y.textContent.split(s);g||(g=document.createElement("span"),g.className="line-numbers-sizer",y.appendChild(g)),g.innerHTML="0",g.style.display="block";var j=g.getBoundingClientRect().height;return g.innerHTML="",{element:e,lines:h,lineHeights:[],oneLinerHeight:j,sizer:g}}}).filter(Boolean);n.forEach(function(e){var y=e.sizer,u=e.lines,g=e.lineHeights,h=e.oneLinerHeight;g[u.length-1]=void 0,u.forEach(function(j,C){if(j&&j.length>1){var L=y.appendChild(document.createElement("span"));L.style.display="block",L.textContent=j}else g[C]=h})}),n.forEach(function(e){for(var y=e.sizer,u=e.lineHeights,g=0,h=0;h<u.length;h++)u[h]===void 0&&(u[h]=y.children[g++].getBoundingClientRect().height)}),n.forEach(function(e){var y=e.sizer,u=e.element.querySelector(".line-numbers-rows");y.style.display="none",y.innerHTML="",e.lineHeights.forEach(function(g,h){u.children[h].style.height=g+"px"})})}}function c(t){return t?window.getComputedStyle?getComputedStyle(t):t.currentStyle||null:null}var d=void 0;window.addEventListener("resize",function(){i.assumeViewportIndependence&&d===window.innerWidth||(d=window.innerWidth,r(Array.prototype.slice.call(document.querySelectorAll("pre."+o))))}),Prism.hooks.add("complete",function(t){if(!!t.code){var n=t.element,e=n.parentNode;if(!(!e||!/pre/i.test(e.nodeName))&&!n.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(n,o)){n.classList.remove(o),e.classList.add(o);var y=t.code.match(s),u=y?y.length+1:1,g,h=new Array(u+1).join("<span></span>");g=document.createElement("span"),g.setAttribute("aria-hidden","true"),g.className="line-numbers-rows",g.innerHTML=h,e.hasAttribute("data-start")&&(e.style.counterReset="linenumber "+(parseInt(e.getAttribute("data-start"),10)-1)),t.element.appendChild(g),r([e]),Prism.hooks.run("line-numbers",t)}}}),Prism.hooks.add("line-numbers",function(t){t.plugins=t.plugins||{},t.plugins.lineNumbers=!0})})();const qe=["innerHTML"],rn=$({__name:"CodeContent",props:{code:{type:String,require:!0},type:{type:String,require:!0},lineNumbers:{type:Boolean,default:!1}},setup(o){return En(()=>{mn.highlightAll()}),(s,i)=>(k(),X("div",{class:jn(o.lineNumbers?"line-numbers":"")},[nn("pre",{style:{background:"#fff"},class:jn(`language-${o.type}`)},[nn("code",{innerHTML:N(mn).highlight(o.code,N(mn).languages[o.type],o.type)},null,8,qe)],2)],2))}}),Re=$({__name:"CodeItem",props:["data"],emits:["openCode"],setup(o,{emit:s}){const i=o,r=en(),c=r==null?void 0:r.proxy,d=c==null?void 0:c.$config,t=c==null?void 0:c.$db,n=R((t==null?void 0:t.type)[i.data[0]]);function e(j){let C=j.split(`
`),L=0,T=C.length-1,q=RegExp(d==null?void 0:d.startFlag),a=RegExp(d==null?void 0:d.endFlag);for(;L<C.length&&!q.test(C[L]);)L++;for(L++;T>=0&&!a.test(C[T]);)T--;return C.slice(L,T)}function y(){s("openCode")}function u(j){return j.length>6?j.slice(0,6).join(`
`)+`
...
`:j.join(`
`)}function g(){c.$copyText((t==null?void 0:t.code)[i.data[0]]).then(()=>{G.success("Copy all succeeded.")},()=>{G.error("Copy all failed.")})}function h(){c.$copyText(e((t==null?void 0:t.code)[i.data[0]]).join(`
`)).then(()=>{G.success("Copy key succeeded.")},()=>{G.error("Copy key failed.")})}return(j,C)=>{const L=M("a-avatar"),T=M("a-card-meta"),q=M("a-card");return k(),D(q,{hoverable:"",style:{"margin-bottom":"20px"}},{cover:E(()=>{var a;return[nn("div",{style:{margin:"0px 2%",width:"96%"},onClick:y},[A(rn,{type:n.value,code:u(e(((a=N(t))==null?void 0:a.code)[i.data[0]]))},null,8,["type","code"])])]}),actions:E(()=>[A(N(An),{key:"eye",onClick:y}),A(N(Cn),{key:"copy_key",onClick:h}),A(N(On),{key:"copy",onClick:g})]),default:E(()=>[A(T,{title:`Number: ${i.data[1]}`,description:N(t).name[i.data[0]]},{avatar:E(()=>[A(L,{src:N(d).authorImg},null,8,["src"])]),_:1},8,["title","description"])]),_:1})}}}),Fe={style:{margin:"0px 2%",width:"96%"}},Pe=$({__name:"CodeShow",props:["data"],setup(o){const s=o,i=en(),r=i==null?void 0:i.proxy,c=r==null?void 0:r.$config,d=r==null?void 0:r.$db,t=R((d==null?void 0:d.type)[s.data[0]]),n=R(!0),e=R(!0);function y(){n.value=!n.value}function u(){e.value=!e.value}function g(C){let L=C.split(`
`),T=0,q=L.length-1,a=RegExp(c==null?void 0:c.startFlag),l=RegExp(c==null?void 0:c.endFlag);for(;T<L.length&&!a.test(L[T]);)T++;for(T++;q>=0&&!l.test(L[q]);)q--;return L.slice(T,q).join(`
`)}function h(){r.$copyText((d==null?void 0:d.code)[s.data[0]]).then(()=>{G.success("Copy all succeeded.")},()=>{G.error("Copy all failed.")})}function j(){r.$copyText(g((d==null?void 0:d.code)[s.data[0]])).then(()=>{G.success("Copy key succeeded.")},()=>{G.error("Copy key failed.")})}return(C,L)=>{const T=M("a-space"),q=M("a-card");return k(),D(q,null,{title:E(()=>[A(T,{size:15},{default:E(()=>[n.value?(k(),D(N(An),{key:"eye",onClick:y})):F("",!0),n.value?F("",!0):(k(),D(N(Bn),{key:1,onClick:y})),e.value?(k(),D(N(Ie),{key:2,onClick:u})):F("",!0),e.value?F("",!0):(k(),D(N(Ce),{key:3,onClick:u})),A(N(Cn),{key:"copy_key",onClick:j}),A(N(On),{key:"copy",onClick:h})]),_:1})]),cover:E(()=>{var a,l,m,f;return[nn("div",Fe,[!n.value&&!e.value?(k(),D(rn,{key:0,type:t.value,code:g(((a=N(d))==null?void 0:a.code)[s.data[0]])},null,8,["type","code"])):F("",!0),n.value&&!e.value?(k(),D(rn,{key:1,type:t.value,code:((l=N(d))==null?void 0:l.code)[s.data[0]]},null,8,["type","code"])):F("",!0),!n.value&&e.value?(k(),D(rn,{key:2,"line-numbers":e.value,type:t.value,code:g(((m=N(d))==null?void 0:m.code)[s.data[0]])},null,8,["line-numbers","type","code"])):F("",!0),n.value&&e.value?(k(),D(rn,{key:3,"line-numbers":e.value,type:t.value,code:((f=N(d))==null?void 0:f.code)[s.data[0]]},null,8,["line-numbers","type","code"])):F("",!0)])]}),_:1})}}}),In=$({__name:"CodeMenu",props:{menuData:{},selectedKeys:{},openKeys:{}},emits:["selectedKeysUpdate"],setup(o,{emit:s}){const i=o,r=R(i.menuData),c=R(i.selectedKeys),d=R(i.openKeys);Nn(i,async e=>{r.value=e.menuData,c.value=e.selectedKeys,d.value=e.openKeys}),Nn(c,async e=>{s("selectedKeysUpdate",e[0])});function t(e){return e.length===1?"Number: "+e[0][1]:"Number: "+e[0][1]+"-"+e[e.length-1][1]}function n(e){return e.length===1&&e[0].length==1?"Title No.:"+e[0][0]:"Title No.:"+e[0][0][1]+"-"+e[e.length-1][e[e.length-1].length-1][1]}return(e,y)=>{const u=M("a-menu-item"),g=M("a-sub-menu"),h=M("a-menu");return k(),D(h,{mode:"inline",selectedKeys:c.value,"onUpdate:selectedKeys":y[0]||(y[0]=j=>c.value=j),openKeys:d.value,"onUpdate:openKeys":y[1]||(y[1]=j=>d.value=j)},{default:E(()=>[(k(!0),X(Y,null,dn(r.value,j=>(k(),D(g,{key:j},{title:E(()=>[V(J(n(j)),1)]),default:E(()=>[(k(!0),X(Y,null,dn(j,C=>(k(),D(u,{key:C},{default:E(()=>[V(J(t(C)),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1},8,["selectedKeys","openKeys"])}}}),Ue=$({__name:"CodeDrawerMenu",emits:["closeDrawerMenu"],setup(o,{emit:s}){const i=R(!0);function r(){s("closeDrawerMenu")}return(c,d)=>{const t=M("a-menu-item"),n=M("a-sub-menu"),e=M("a-menu"),y=M("a-drawer");return k(),D(y,{placement:"left",closable:!1,visible:i.value,onClose:r,width:"280"},{default:E(()=>[A(Dn,{theme:"light"}),A(e,{mode:"inline"},{default:E(()=>[A(n,null,{title:E(()=>[V("Search")]),default:E(()=>[A(t,null,{default:E(()=>[A(zn)]),_:1})]),_:1})]),_:1}),Hn(c.$slots,"default")]),_:3},8,["visible"])}}}),Be=$({__name:"CodeMain",emits:["resize"],setup(o,{emit:s}){const i=en(),r=i==null?void 0:i.proxy,c=r==null?void 0:r.$bus,d=r==null?void 0:r.$config,t=r==null?void 0:r.$db,n=R(!1);function e(){n.value=!n.value}let y=R(0),u=R(!1),g=R([0,0]),h=R(!1);function j(f){let v="number";f!==0&&(v=t==null?void 0:t.allTypes[f-1]);let x=t==null?void 0:t[v],O=[],p=d==null?void 0:d.menuSpace,b=d==null?void 0:d.itemSpace,_=0;for(;_*p*b<x.length;){let w=[],I=0;for(;_*p*b+I*b<x.length&&I<p;){let S=0,z=[];for(;_*p*b+I*b+S<x.length&&S<b;)z.push(x[_*p*b+I*b+S]),S++;I++,w.push(z)}_++,O.push(w)}return O}const C=f=>{y.value=f,T.value=j(f),q.value=T.value[0][0],u.value=!1};function L(){const f=document.body.clientWidth;f<650&&!h.value?(h.value=!0,n.value=!1,C(0)):f>=650&&h.value&&(h.value=!1,n.value=!1,C(0)),s("resize",h.value)}window.onresize=L;let T=R(j(y.value));const q=R(T.value[0][0]);function a(f){q.value=f}En(()=>{L()}),c==null||c.on("menuItemId",C),c==null||c.on("searchId",f=>{l(f)});function l(f){g.value=f,u.value=!0}function m(){u.value=!1}return(f,v)=>{const x=M("a-breadcrumb-item"),O=M("a-breadcrumb"),p=M("a-layout-sider"),b=M("a-button"),_=M("a-affix"),w=M("a-layout-content"),I=M("a-layout"),S=M("a-page-header"),z=M("a-layout-footer");return k(),X(Y,null,[A(w,{style:Wn(N(h)?"padding: 0;":"padding: 0 50px;")},{default:E(()=>[N(h)?F("",!0):(k(),D(O,{key:0,style:{margin:"16px 0"}},{default:E(()=>[A(x,null,{default:E(()=>[V("Home")]),_:1}),N(u)?(k(),X(Y,{key:1},[A(x,null,{default:E(()=>[V(J(N(d).codeMessage[N(t).type[N(g)[0]]].name),1)]),_:1}),A(x,null,{default:E(()=>[V(J(N(t).name[N(g)[0]]),1)]),_:1})],64)):(k(),X(Y,{key:0},[N(y)==0?(k(),D(x,{key:0},{default:E(()=>[V("All")]),_:1})):F("",!0),N(y)!=0?(k(),D(x,{key:1},{default:E(()=>[V(J(N(d).codeMessage[N(t).allTypes[N(y)-1]].name),1)]),_:1})):F("",!0)],64))]),_:1})),N(u)?F("",!0):(k(),D(I,{key:1,style:{padding:"24px 0",background:"#fff"}},{default:E(()=>[N(h)?F("",!0):(k(),D(p,{key:0,width:"200",style:{background:"#fff"}},{default:E(()=>[A(In,{"menu-data":N(T),"selected-keys":[N(T)[0][0]],"open-keys":[N(T)[0]],onSelectedKeysUpdate:a},null,8,["menu-data","selected-keys","open-keys"])]),_:1})),n.value?(k(),D(Ue,{key:1,onCloseDrawerMenu:e},{default:E(()=>[A(In,{"menu-data":N(T),"selected-keys":[N(T)[0][0]],"open-keys":[N(T)[0]],onSelectedKeysUpdate:a},null,8,["menu-data","selected-keys","open-keys"])]),_:1})):F("",!0),N(h)?(k(),D(_,{key:2,"offset-top":50},{default:E(()=>[A(b,{onClick:e},{icon:E(()=>[A(N(we))]),_:1})]),_:1})):F("",!0),A(w,{style:{padding:"0 24px",minHeight:"280px"}},{default:E(()=>[(k(!0),X(Y,null,dn(q.value,(B,H)=>(k(),D(Re,{key:H,onOpenCode:P=>l(B),data:B},null,8,["onOpenCode","data"]))),128))]),_:1})]),_:1})),N(u)?(k(),D(I,{key:2,style:{background:"#fff",padding:"0px 24px 24px 24px"}},{default:E(()=>[A(S,{title:N(t).name[N(g)[0]],"sub-title":`Number: ${N(g)[1]}`,onBack:m},null,8,["title","sub-title"]),A(Pe,{data:N(g)},null,8,["data"])]),_:1})):F("",!0)]),_:1},8,["style"]),N(h)?F("",!0):(k(),D(z,{key:0,style:{"text-align":"center"}}))],64)}}}),He=$({__name:"App",setup(o){let s=R(!1);function i(r){s.value=r}return(r,c)=>{const d=M("a-layout");return k(),D(d,null,{default:E(()=>[N(s)?F("",!0):(k(),D(Me,{key:0})),A(Be,{onResize:i})]),_:1})}}});function We(o){return{all:o=o||new Map,on:function(s,i){var r=o.get(s);r?r.push(i):o.set(s,[i])},off:function(s,i){var r=o.get(s);r&&(i?r.splice(r.indexOf(i)>>>0,1):o.set(s,[]))},emit:function(s,i){var r=o.get(s);r&&r.slice().map(function(c){c(i)}),(r=o.get("*"))&&r.slice().map(function(c){c(s,i)})}}}const Ke=We();var qn={exports:{}},Rn={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(o,s){(function(i,r){o.exports=r()})(gn,function(){return r={686:function(d,u,n){n.d(u,{default:function(){return O}});var u=n(279),e=n.n(u),u=n(370),y=n.n(u),u=n(817),g=n.n(u);function h(p){try{return document.execCommand(p)}catch{return}}var j=function(p){return p=g()(p),h("cut"),p};function C(I,b){var _,w,I=(_=I,w=document.documentElement.getAttribute("dir")==="rtl",(I=document.createElement("textarea")).style.fontSize="12pt",I.style.border="0",I.style.padding="0",I.style.margin="0",I.style.position="absolute",I.style[w?"right":"left"]="-9999px",w=window.pageYOffset||document.documentElement.scrollTop,I.style.top="".concat(w,"px"),I.setAttribute("readonly",""),I.value=_,I);return b.container.appendChild(I),b=g()(I),h("copy"),I.remove(),b}var L=function(p){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},_="";return typeof p=="string"?_=C(p,b):p instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(p==null?void 0:p.type)?_=C(p.value,b):(_=g()(p),h("copy")),_};function T(p){return(T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(p)}var q=function(){var w=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},_=w.action,p=_===void 0?"copy":_,b=w.container,_=w.target,w=w.text;if(p!=="copy"&&p!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(_!==void 0){if(!_||T(_)!=="object"||_.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(p==="copy"&&_.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(p==="cut"&&(_.hasAttribute("readonly")||_.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return w?L(w,{container:b}):_?p==="cut"?j(_):L(_,{container:b}):void 0};function a(p){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b})(p)}function l(p,b){for(var _=0;_<b.length;_++){var w=b[_];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(p,w.key,w)}}function m(p,b){return(m=Object.setPrototypeOf||function(_,w){return _.__proto__=w,_})(p,b)}function f(p){var b=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var _,w=v(p);return _=b?(_=v(this).constructor,Reflect.construct(w,arguments,_)):w.apply(this,arguments),w=this,!(_=_)||a(_)!=="object"&&typeof _!="function"?function(I){if(I!==void 0)return I;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(w):_}}function v(p){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)})(p)}function x(p,b){if(p="data-clipboard-".concat(p),b.hasAttribute(p))return b.getAttribute(p)}var O=function(){(function(S,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");S.prototype=Object.create(z&&z.prototype,{constructor:{value:S,writable:!0,configurable:!0}}),z&&m(S,z)})(I,e());var p,b,_,w=f(I);function I(S,z){var B;return function(H){if(!(H instanceof I))throw new TypeError("Cannot call a class as a function")}(this),(B=w.call(this)).resolveOptions(z),B.listenClick(S),B}return p=I,_=[{key:"copy",value:function(S){var z=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(S,z)}},{key:"cut",value:function(S){return j(S)}},{key:"isSupported",value:function(){var S=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],S=typeof S=="string"?[S]:S,z=!!document.queryCommandSupported;return S.forEach(function(B){z=z&&!!document.queryCommandSupported(B)}),z}}],(b=[{key:"resolveOptions",value:function(){var S=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof S.action=="function"?S.action:this.defaultAction,this.target=typeof S.target=="function"?S.target:this.defaultTarget,this.text=typeof S.text=="function"?S.text:this.defaultText,this.container=a(S.container)==="object"?S.container:document.body}},{key:"listenClick",value:function(S){var z=this;this.listener=y()(S,"click",function(B){return z.onClick(B)})}},{key:"onClick",value:function(H){var z=H.delegateTarget||H.currentTarget,B=this.action(z)||"copy",H=q({action:B,container:this.container,target:this.target(z),text:this.text(z)});this.emit(H?"success":"error",{action:B,text:H,trigger:z,clearSelection:function(){z&&z.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(S){return x("action",S)}},{key:"defaultTarget",value:function(S){if(S=x("target",S),S)return document.querySelector(S)}},{key:"defaultText",value:function(S){return x("text",S)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&l(p.prototype,b),_&&l(p,_),I}()},828:function(d){var t;typeof Element>"u"||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),d.exports=function(n,e){for(;n&&n.nodeType!==9;){if(typeof n.matches=="function"&&n.matches(e))return n;n=n.parentNode}}},438:function(d,t,n){var e=n(828);function y(u,g,h,j,C){var L=function(T,q,a,l){return function(m){m.delegateTarget=e(m.target,q),m.delegateTarget&&l.call(T,m)}}.apply(this,arguments);return u.addEventListener(h,L,C),{destroy:function(){u.removeEventListener(h,L,C)}}}d.exports=function(u,g,h,j,C){return typeof u.addEventListener=="function"?y.apply(null,arguments):typeof h=="function"?y.bind(null,document).apply(null,arguments):(typeof u=="string"&&(u=document.querySelectorAll(u)),Array.prototype.map.call(u,function(L){return y(L,g,h,j,C)}))}},879:function(d,t){t.node=function(n){return n!==void 0&&n instanceof HTMLElement&&n.nodeType===1},t.nodeList=function(n){var e=Object.prototype.toString.call(n);return n!==void 0&&(e==="[object NodeList]"||e==="[object HTMLCollection]")&&"length"in n&&(n.length===0||t.node(n[0]))},t.string=function(n){return typeof n=="string"||n instanceof String},t.fn=function(n){return Object.prototype.toString.call(n)==="[object Function]"}},370:function(d,t,n){var e=n(879),y=n(438);d.exports=function(u,g,h){if(!u&&!g&&!h)throw new Error("Missing required arguments");if(!e.string(g))throw new TypeError("Second argument must be a String");if(!e.fn(h))throw new TypeError("Third argument must be a Function");if(e.node(u))return q=g,a=h,(T=u).addEventListener(q,a),{destroy:function(){T.removeEventListener(q,a)}};if(e.nodeList(u))return j=u,C=g,L=h,Array.prototype.forEach.call(j,function(l){l.addEventListener(C,L)}),{destroy:function(){Array.prototype.forEach.call(j,function(l){l.removeEventListener(C,L)})}};if(e.string(u))return u=u,g=g,h=h,y(document.body,u,g,h);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var j,C,L,T,q,a}},817:function(d){d.exports=function(t){var n,e=t.nodeName==="SELECT"?(t.focus(),t.value):t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"?((n=t.hasAttribute("readonly"))||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),t.value):(t.hasAttribute("contenteditable")&&t.focus(),e=window.getSelection(),(n=document.createRange()).selectNodeContents(t),e.removeAllRanges(),e.addRange(n),e.toString());return e}},279:function(d){function t(){}t.prototype={on:function(n,e,y){var u=this.e||(this.e={});return(u[n]||(u[n]=[])).push({fn:e,ctx:y}),this},once:function(n,e,y){var u=this;function g(){u.off(n,g),e.apply(y,arguments)}return g._=e,this.on(n,g,y)},emit:function(n){for(var e=[].slice.call(arguments,1),y=((this.e||(this.e={}))[n]||[]).slice(),u=0,g=y.length;u<g;u++)y[u].fn.apply(y[u].ctx,e);return this},off:function(n,e){var y=this.e||(this.e={}),u=y[n],g=[];if(u&&e)for(var h=0,j=u.length;h<j;h++)u[h].fn!==e&&u[h].fn._!==e&&g.push(u[h]);return g.length?y[n]=g:delete y[n],this}},d.exports=t,d.exports.TinyEmitter=t}},c={},i.n=function(d){var t=d&&d.__esModule?function(){return d.default}:function(){return d};return i.d(t,{a:t}),t},i.d=function(d,t){for(var n in t)i.o(t,n)&&!i.o(d,n)&&Object.defineProperty(d,n,{enumerable:!0,get:t[n]})},i.o=function(d,t){return Object.prototype.hasOwnProperty.call(d,t)},i(686).default;function i(d){if(c[d])return c[d].exports;var t=c[d]={exports:{}};return r[d](t,t.exports,i),t.exports}var r,c})})(Rn);(function(o,s){var i=Rn.exports,r={autoSetContainer:!1,appendToBody:!0},c={install:function(d){var t=d.version.slice(0,2)==="3."?d.config.globalProperties:d.prototype;t.$clipboardConfig=r,t.$copyText=function(n,e){return new Promise(function(y,u){var g=document.createElement("button"),h=new i(g,{text:function(){return n},action:function(){return"copy"},container:typeof e=="object"?e:document.body});h.on("success",function(j){h.destroy(),y(j)}),h.on("error",function(j){h.destroy(),u(j)}),r.appendToBody&&document.body.appendChild(g),g.click(),r.appendToBody&&document.body.removeChild(g)})},d.directive("clipboard",{bind:function(n,e,y){if(e.arg==="success")n._vClipboard_success=e.value;else if(e.arg==="error")n._vClipboard_error=e.value;else{var u=new i(n,{text:function(){return e.value},action:function(){return e.arg==="cut"?"cut":"copy"},container:r.autoSetContainer?n:void 0});u.on("success",function(g){var h=n._vClipboard_success;h&&h(g)}),u.on("error",function(g){var h=n._vClipboard_error;h&&h(g)}),n._vClipboard=u}},update:function(n,e){e.arg==="success"?n._vClipboard_success=e.value:e.arg==="error"?n._vClipboard_error=e.value:(n._vClipboard.text=function(){return e.value},n._vClipboard.action=function(){return e.arg==="cut"?"cut":"copy"})},unbind:function(n,e){!n._vClipboard||(e.arg==="success"?delete n._vClipboard_success:e.arg==="error"?delete n._vClipboard_error:(n._vClipboard.destroy(),delete n._vClipboard))}})},config:r};o.exports=c})(qn);const Fn=qn.exports,U=Kn(He);U.config.globalProperties.$bus=Ke;U.config.globalProperties.$db=fe;U.config.globalProperties.$config=me;Fn.config.autoSetContainer=!0;U.config.globalProperties.$message=G;U.use(Fn);U.use(Vn);U.use($n);U.use(Gn);U.use(Qn);U.use(Xn);U.use(Yn);U.use(Zn);U.use(Jn);U.use(ne);U.use(ee);U.use(te);U.mount("#app");
