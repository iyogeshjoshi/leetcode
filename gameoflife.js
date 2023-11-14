function initializeArray(rows, columns) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for (let j = 0; j < columns; j++) {
            array[i][j] = Math.round(Math.random()); // 0 or 1 randomly assigned
        }
    }
    return array;
}

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}

function countLiveNeighbors(array, row, col) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (i >= 0 && i < array.length && j >= 0 && j < array[0].length && !(i === row && j === col)) {
                count += array[i][j];
            }
        }
    }
    return count;
}

function applyRules(currentArray) {
    const newArray = [];
    for (let i = 0; i < currentArray.length; i++) {
        newArray[i] = [];
        for (let j = 0; j < currentArray[0].length; j++) {
            const liveNeighbors = countLiveNeighbors(currentArray, i, j);
            if (currentArray[i][j] === 1) {
                newArray[i][j] = liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0;
            } else {
                newArray[i][j] = liveNeighbors === 3 ? 1 : 0;
            }
        }
    }
    return newArray;
}

function simulateGameOfLife(rows, columns, generations) {
    let currentArray = initializeArray(rows, columns);

    for (let generation = 0; generation <= generations; generation++) {
        console.log(`Generation ${generation}:`);
        printArray(currentArray);
        currentArray = applyRules(currentArray);
    }
}

// Example usage with a 600x400 array and 10 generations
simulateGameOfLife(10, 10, 10);

