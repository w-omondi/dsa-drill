export default async function twoSum() {
    console.log("\n");
    console.log("Pair with two sum executing.");

    // Input: arr[] = [0, -1, 2, -3, 1], target = -2
    // Output: true
    // Explanation: There is a pair(1, -3) with the sum equal to given target, 1 + (-3) = -2.
    // core([0, -1, 2, -3, 1], -2);
    console.log("\n")
    await calculateTwoSumPair([0, -1, 2, -3, 1], -2);
    console.log("\n");


    // Input: arr[] = [1, -2, 1, 0, 5], target = 0
    // Output: false
    // Explanation: There is no pair with sum equals to given target.
    // core([1, -2, 1, 0, 5], 0);
    console.log("\n");
    await calculateTwoSumPair([1, -2, 1, 0, 5], 0);
    console.log("\n");
}

// function core(arr: number[], target: number) {
//     let output: boolean = false;
//     let terminateLoop = false;

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (terminateLoop) break;
//         for (let j = 0; j < arr.length; j++) {
//             if (i === j) continue;
//             const compliment = arr[j];
//             const sum = element + compliment;
//             if (sum === target) {
//                 output = true;
//                 console.log(`Pair (${element},${compliment})`);
//                 terminateLoop = true;
//                 break;
//             }
//         }

//     }

//     !output && console.log("Pair - None found");
//     console.log("Output:", output);
// }

const calculateTwoSumPair = async (_arr: number[], target: number) => {
    const arr = _arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let compliment = target - (arr[i]);

        if (compliment === 0 && target === 0) {
            console.log("No pair found")
            return
        }

        console.log(`${target} - ${arr[i]} = ${compliment}`)
        // let found = await binarySearchIterative(arr, compliment);
        let _compliment = binaryRecursusive(arr, 0, arr.length - 1, compliment);
        if (_compliment !== -1) {
            console.log(`Pair (${arr[i]},${_compliment})`);
            console.log("Output:", true);
            console.log("Found at loop number: ", i + 1)
            return
            // return [found, [arr[i], compliment]]
        }
    }

    console.log("No pair found")
    // return [false, []] 
}

const binarySearchIterative = async (arr: number[], target: number) => {

    let low = 0;
    let high = arr.length - 1;
    let mid;

    while (high >= low) {

        mid = Math.floor((high + low) / 2);

        if (arr[mid] === target) {
            return true;
        };

        if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return false
}

const binaryRecursusive = (arr: number[], low: number, high: number, target: number) => {
    if (high > low) {
        let mid = low + Math.floor((high - low) / 2);

        if (arr[mid] === target) {
            return arr[mid]
        }

        if (arr[mid] > target) {
            return binaryRecursusive(arr, low, mid - 1, target)
        }

        return binaryRecursusive(arr, mid + 1, high, target);
    }
    return -1
}