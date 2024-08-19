/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */

function distance(a,b){
    const [x1,y1,x2,y2] = [...a,...b];
    return Math.sqrt((x1-x2)**2+(y1-y2)**2)
}

var validSquare = function(...points) {
    const distances = []
    for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
            distances.push(distance(points[i],points[j]))
        }
    }
    distances.sort((a,b)=>a-b)
    const [a,b,c,d,d1,d2] = distances;    
    return (a+b+c+d)/4===a && d1===d2 && (a+b+c+d)!==0;
};
