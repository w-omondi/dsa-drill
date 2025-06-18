export default function twoSum() {
    console.log("Pair with two sum executing.");

    // Input: arr[] = [0, -1, 2, -3, 1], target = -2
    // Output: true
    // Explanation: There is a pair(1, -3) with the sum equal to given target, 1 + (-3) = -2.
    core([0, -1, 2, -3, 1], -2);

    // Input: arr[] = [1, -2, 1, 0, 5], target = 0
    // Output: false
    // Explanation: There is no pair with sum equals to given target.
    core([1, -2, 1, 0, 5], 0)
}

function core(arr: number[], target: number) {
    let output: boolean = false;
    let terminateLoop = false;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (terminateLoop) break;
        for (let j = 0; j < arr.length; j++) {
            if (i === j) continue;
            const compliment = arr[j];
            const sum = element + compliment;
            if (sum === target) {
                output = true;
                console.log(`Pair (${element},${compliment})`);
                terminateLoop = true;
                break;
            }
        }

    }

    !output && console.log("Pair - None found");
    console.log("Output:", output);
}