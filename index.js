



let findIslands = function (map) {
  let numberOfIslans = 0,
    yLen = map.length;
    xLen = (map[0] || []).length,
    lastRowIndexesIsland = {},
    currentIndexIsland = {},
    lastIndexIsland = -1;

  for(let y = 0; y < yLen; y += 1) {
    let row = map[y];
    for(let x = 0; x < xLen; x += 1) {
       if(row[x] === 1) {
         if((lastIndexIsland === -1 || lastIndexIsland !== x - 1) && !lastRowIndexesIsland.hasOwnProperty(x)) {
            numberOfIslans += 1;
         }
         currentIndexIsland[x] = undefined;
         lastIndexIsland = x;
       }
    }
    lastIndexIsland = -1;
    lastRowIndexesIsland = currentIndexIsland;
    currentIndexIsland = {};
  }
  return numberOfIslans;
};

console.assert(findIslands([
  [0,0,0,0,0],
  [0,1,0,0,0],
  [0,0,1,0,0],
  [0,0,1,0,0]
]) === 2);
