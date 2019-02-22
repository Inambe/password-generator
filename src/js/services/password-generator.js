const chars = {
    'abc': 'abcdefghijklmnopqrstuvwxyz',
    'ABC': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '123': '0123456789'
};
export const generatePassword = (params, len) => {
    var randomChars = [];
    let charsForEachType = Math.round(len/params.length);
    params.map(charType => {
        for(let i = 0; i < charsForEachType; i++){
            let thisChars = chars[charType];
            let charsLen = thisChars.length;
            let charsRandomIndex = randomNum(charsLen);
            randomChars.push(thisChars.slice(charsRandomIndex, charsRandomIndex+1));
        }
    });
    return randomizeArray(randomChars).join('');
}
const randomizeArray = (arr) => {
    let usedIndexes = [];
    let randomized = [];
    arr.map((char) => {
        let randomIndex = randomNum(arr.length);
        while(usedIndexes.indexOf(randomIndex) > -1){
            randomIndex = randomNum(arr.length);
        }
        usedIndexes.push(randomIndex);
        randomized.push(arr[randomIndex]);
    });
    return randomized;
}
const randomNum = (withIn) => {
    return Math.floor(Math.random() * withIn);
}