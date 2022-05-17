// Arrow function

const romanToInt = s => {
    const data = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++){
        const a = data[s[i]];
        const b = data[s[i+1]];

        if (a < b){
            result += b - a
            i++
        } else {
            result += a
        }
    }
    return result;
};

console.log(romanToInt('MD')) // 1500