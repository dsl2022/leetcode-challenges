
function winnerOfGame(colors: string): boolean {
    let countA=0
    let countB=0
    for(let i=0; i< colors.length;i++){
        if(i!==0 && i!==colors.length-1){
            if(colors[i]==="A"){
                colors[i-1]==="A" && colors[i+1]==="A"?countA+=1:countA+=0
            }else{
                colors[i-1]==="B" && colors[i+1]==="B"?countB+=1:countB+=0
            }
        }
    }
    return countA > countB
};