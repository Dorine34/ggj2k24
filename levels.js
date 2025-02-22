/**
 * Level generator
 */

module.exports = { generate };

// Main function that generates the level
function generate() {
    const walls = WALLS;
    const PNJs = [PNJ_0];
    const start = { police: {x: 90, y: 90 }, killer: { x: 1100, y: 650 } };
    return { walls, PNJs, start };
} 


const WALLS = [
    // main walls 
    [20,20,1260,20],[1260,20,1260,800],[1260,800,20,800],[20,800,20,20], 
    // first box
    [20,330,520,330],[520,330,520,170],[520,70,520,20],
    // second box
    [20,480,520,480],[520,480,520,650],[520,750,520,800],
    // third box 
    [700, 20, 700, 70], [700, 170, 700, 400], [700, 400, 1260, 400],
    // third box separation
    [700, 400, 700, 650], [700, 750, 700, 800]
];


const WALK = "walk", WAIT = "wait";

const PNJ_0 = { 
    scenario: [
        [WAIT, {x: 80, y: 140, vecX: 1, vecY: 0}, 1000],
        [WALK, {xs: 80, ys: 140, xd: 1100, yd: 140}, 8000],
        [WAIT, {x: 1100, y: 140, vecX: 0, vecY: 1}, 2000],
        [WALK, {xs: 1100, ys: 140, xd: 80, yd: 140}, 10000]
    ],
    dialog: [
        [0, "Vous voulez un whisky ?", 1600],
        [1, "Juste un doigt.", 1600],
        [0, "Vous ne voulez pas un whisky d'abord ?", 2000]
    ]
}


function computeStart() {
    let x, y, nb;
    do {
        x = 5 + 10 * Math.floor(this.topLeft[0] + Math.random() * (this.bottomRight[0] - this.topLeft[0])) / 10;
        y = 5 + 10 * Math.floor(this.topLeft[1] + Math.random() * (this.bottomRight[1] - this.topLeft[1])) / 10;
        // count number of crossed walls
        nb = WALLS.filter(([a,b,c,d]) => (a == c && a < x && (y >= b && y <= d || y >= d && y <= b)));
    }
    while (/*nb.length % 2 != 1 ||*/ this.isTooCloseFromOneWall(x, y, 20) !== null);
    return {x,y};
}














