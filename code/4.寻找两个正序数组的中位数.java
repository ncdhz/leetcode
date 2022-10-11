/*
 * @lc app=leetcode.cn id=4 lang=java
 *
 * [4] 寻找两个正序数组的中位数
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
// @lc code=end

