var text = document.body.textContent
var myInput = text.split('\n')
myInput.pop()
input = myInput

function resetArrs(){
    nums1 = []
    nums2 = []
    nums3 = []
    nums4 = []
    nums5 = []
    nums6 = []
    nums7 = []
    nums8 = []
    nums9 = []
    nums10 = []
    nums11 = []
    nums12 = []
    nums13 = []
    nums14 = []
    nums15 = []
    nums16 = []
    nums17 = []
    nums18 = []
    nums19 = []
    nums20 = []
    totalNums = [nums1, nums2, nums3, nums4, nums5, nums6, nums7, nums8, nums9, nums10, nums11, nums12, nums13, nums14, nums15, nums16, nums17, nums18, nums19, nums20]
}


function work1(){
    masterArr =0
    for (a in input){
        nums = input[a].split(" ")
        for(b in nums){
            nums[b] = parseInt(nums[b])
        }
        //console.log("nums:", nums)
        totalNums.unshift(nums)

        for (c in totalNums){
            //console.log("max:", Math.max.apply(0, totalNums[c]), "min:", Math.min.apply(0, totalNums[c]))
            if(Math.max(totalNums[c]) != Math.min(totalNums[c])){
                totalNums[parseInt(c) + 1] = deeper(totalNums[c])
                //console.log(totalNums)
            } else{
                for (let d = totalNums.length -2; d > -1; d--){
                    totalNums[d].push(totalNums[d+1][totalNums[d+1].length-1]+totalNums[d][totalNums[d].length-1])
                }
            }
        }
        //console.log(totalNums)
        masterArr += nums[nums.length-1]
        resetArrs()
    }
    console.log("part 1:", masterArr)
    work2()
}

function work2(){
    masterArr =0
    for (a in input){
        nums = input[a].split(" ")
        for(b in nums){
            nums[b] = parseInt(nums[b])
        }
        //console.log("nums:", nums)
        totalNums.unshift(nums)

        for (c in totalNums){
            //console.log("max:", Math.max.apply(0, totalNums[c]), "min:", Math.min.apply(0, totalNums[c]))
            if(Math.max(totalNums[c]) != Math.min(totalNums[c])){
                totalNums[parseInt(c) + 1] = deeper(totalNums[c])
                //console.log(totalNums)
            } else{
                for (let d = totalNums.length -2; d > -1; d--){
                    totalNums[d].unshift(totalNums[d][0]-totalNums[d+1][0])
                }
            }
        }
        //console.log(totalNums)
        masterArr += nums[0]
        resetArrs()
    }
    console.log("part 2:", masterArr)
}

function deeper(arr){
    currentArr = []
    for (let i = 0; i < arr.length-1; i++){
        currentArr.push(parseInt(arr[i+1]) - parseInt(arr[i]))
    }
    return (currentArr)
}

function timer() {
    console.time(work1())
    console.timeEnd(work1())
}

resetArrs()
timer()

