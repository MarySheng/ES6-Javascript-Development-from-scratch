var  computers = [
    { name: 'apple', ram: 24 },
    { name: 'compaq', ram: 4 },
    { name: 'acer', ram: 32}
];



var computer = computers.some(function(computer) {
    return computer.ram > 16;
});

console.log('computer=', computer);


var names = [
    "MarySheng",
    "TingSheng",
    "Zest"
];

var name = names.some(function(name) {
    return name.length > 5;
});

console.log('name=', name);