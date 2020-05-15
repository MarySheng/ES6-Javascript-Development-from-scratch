var numbers = [ 10, 20, 30 ];

var sum = numbers.reduce(function(sum, number) {
       return sum + number;
}, 0);

console.log('sum=', sum);


var primaryColors = [
    { color: "red"},
    { color: "yellow"},
    { color: "blue"}
];

// Return an array of colors

var colors = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log('colors=', colors);