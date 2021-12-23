function print1to255(){
    for (let i=1; i<256; i++){
        console.log(i)
    }
}

function printOdds1to255(){
    for (let i=1; i<256; i+=2){
        console.log(i)
    }
}

function printAndSum1to255(){
    sum = 0
    for (let i=1; i<256; i++){
        console.log('Int: ' + i)
        sum += i
        console.log('Sum: ' + sum)
    }
}

function printArrayValues(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

function printMaxOfArray(arr){
    max = arr[0]
    for (let i=1; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}

function printAverageOfArray(arr){
    sum = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    avg = sum / arr.length
    console.log(avg)
}

function returnOddsArray(){
    arr = []
    for (let i=1; i<256; i+=2){
        arr.push(i)
    }
    return arr
}

function squareArrayValues(arr){
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i] ** 2
    }
    console.log(arr)
}

function arrayCountGreaterThanY(arr,y){
    count = 0
    for (let i=0; i<arr.length; i++){
        if (arr[i] > y){
            count++
        }
    }
    console.log(count)
}

function zeroOutArrayNegativeVals(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0
        }
    }
    console.log(arr)
}

function printMaxMinAvgArrayVals(arr){
    max = arr[0]
    min = arr[0]
    sum = 0
    for (let i=0; i<arr.length; i++){
        sum += arr[i]
        if (arr[i] > max){
            max = arr[i]
        }
        if (arr[i] < min){
            min = arr[i]
        }
    }
    avg = sum / arr.length
    console.log('Max: ' + max + ', Min: ' + min + ', Avg: ' + avg)
}

function shiftArrayValsLeft(arr){
    for (let i=0; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)
}

function swapStringForNegVals(arr){
    for (let i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'Dojo'
        }
    }
    console.log(arr)
}
