
// Question 1
// Method 1
let sum = 0;
function sumFunc(n) {
    for (i = 0; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}
sumFunc(4);

// Question 2
// Method 1
const nums = [1, 4, 7];
function avgArr(nums) {
    return nums.reduce((previousNum, currentNum) => previousNum + currentNum) / nums.length;
}
console.log(avgArr(nums));

// Method 2
const average = (nums) => {
    let result = 0;
    nums.forEach((num) => result += num/nums.length);
    return result;
  };
  console.log(average(nums));

// Question 3

function getLargestGap(number){
    let binary = number.toString(2).split('');
    let zeroCounter = 0;
    let first1 = false;
    let binaryGap = 0;

    binaryArr.forEach(element => {
        if(element === '1' && first1 === false) first1 = true;
        else if(first1 === true && element === '0') zeroCounter++;
        else {
            binaryGap = Math.max(zeroCounter, binaryGap)
            zeroCounter = 0;
        }
    });
    return binaryGap;
}

console.log(getLargestGap(529));