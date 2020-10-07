;
var mountains = [
    {
        Name: 'Kilimanjaro',
        Height: 19341
    },
    {
        Name: 'Everest',
        Height: 29029
    },
    {
        Name: 'Denali',
        Height: 20310
    }
];
function findTheTallestMountain(mountains) {
    var maxheight = 0;
    var tallestMountain = '';
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.Height > maxheight) {
            maxheight = mountain.Height;
            tallestMountain = mountain.Name;
        }
    }
    console.log(tallestMountain);
}
//# sourceMappingURL=app.js.map