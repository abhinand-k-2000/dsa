

function freqCount(string){

    let freqTable = {};

    for(let str of string){

        if(freqTable.hasOwnProperty(str)){
            freqTable[str]++
        } else {
            freqTable[str] = 1
        }
    }
    // return freqTable;
    let maxFreq = 0;
    let element = null;
    for(let item in freqTable){
        if(freqTable.hasOwnProperty(item)){
            if(freqTable[item] > maxFreq){
                maxFreq = freqTable[item];
                element = item
            }
        }
    }
    return element + " " + maxFreq;
}

const strings = ["apple", "orange", "orange", "apple", "banana", "orange", "orange", "apple"];
console.log(freqCount(strings))