function palindrome(text) {
    if (text.length % 2 == 0) {
        const reversed = text
            .split('')
            .reverse()
            .join('')
        return text === reversed
    } else {
        let left = 0;
        let right = text.length - 1;
        while (left <= right) {
            if (text[left] !== text[right]) {
                return false
            }else{
                return true
            }
        }
    }
}

console.log(palindrome('anna'))
console.log(palindrome('abcd'))
console.log(palindrome('level'))
console.log(palindrome('poker'))