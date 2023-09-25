const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((total, currentBatch) => total + currentBatch, 0);

console.log(totalBatteries); // This will give you the sum of all battery amounts.

