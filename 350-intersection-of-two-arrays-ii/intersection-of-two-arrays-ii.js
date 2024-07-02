/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        let obj = {};
        for(let i=0; i<nums1.length; i++){
            if(!obj[nums1[i]]){
                obj[nums1[i]] = 1;
            }else{
                obj[nums1[i]]++;
            }
        }
        let res = [];
        for(let i=0; i<nums2.length; i++){
            if(obj[nums2[i]]){
                if(obj[nums2[i]]<1){
                    delete obj[nums2[i]]
                }else{
                    res.push(nums2[i]);
                    obj[nums2[i]]--;
                }
            }
        }
        // console.log(res);
        return res;
    }else{
        let obj = {};
        for(let i=0; i<nums2.length; i++){
            if(!obj[nums2[i]]){
                obj[nums2[i]] = 1;
            }else{
                obj[nums2[i]]++;
            }
        }

        let res = [];
        for(let i=0; i<nums1.length; i++){
            if(obj[nums1[i]]){
                if(obj[nums1[i]]<1){
                    delete obj[nums1[i]]
                }else{
                    res.push(nums1[i]);
                    obj[nums1[i]]--;
                }
            }
        }
        return res;
    }

};