function maxMoves(grid: number[][]): number {
    const [m,n] = [grid.length, grid[0].length];
    const dp: number[][] = Array.from({ length: n }, () => []);    
    let steps=0;
    for(let i=0;i<m;i++)dp[0] = [...dp[0],i]
    for(let col=1;col< n;col++){
        const preRows =  dp[col-1];        
        const newRows = new Set()
        for(let preRow of preRows  ){            
            if ((preRow > 0 && grid[preRow ][col-1] < grid[preRow -1][col])){
                newRows.add(preRow-1)
            }
            if(grid[preRow ][col-1] < grid[preRow ][col] ){
                newRows.add(preRow)
            }
            if (preRow < m -1 && grid[preRow ][col-1] < grid[preRow +1][col] ){
                    newRows.add(preRow+1)
            } 
        }
        if(newRows.size){            
            dp[col] = Array.from(newRows) as number[];
            steps+=1    
        }
    }
    return steps; 
};