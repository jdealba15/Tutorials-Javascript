const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

const colorArr = ['black', 'green', 'blue', 'yellow'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}

console.log(colorObj.color1);
console.log(colorArr[0])