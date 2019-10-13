module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;

    let stack = [];
    arr = str.split('');

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            if (stack[stack.length - 1] == bracketsConfig[j][0] && arr[i] == bracketsConfig[j][1]) stack.pop();
            else if (arr[i] == bracketsConfig[j][0]) stack.push(arr[i]);
        }
    }

    return stack.length == 0 ? true : false;
}
