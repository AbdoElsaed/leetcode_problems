// https://leetcode.com/problems/median-of-two-sorted-arrays/
let findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = arr.length;
    return len % 2 !== 0 ? arr[Math.floor(len/2)] : (arr[(len/2)-1] + arr[(len/2)]) / 2;
};