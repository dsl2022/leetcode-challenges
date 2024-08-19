class Solution{
    public boolean carPooling(int[][] trips, int capacity){
        int[] stops = new int[1001]
        for(int[]trip:trips){
            int numberOfPass = trip[0];
            int from =  trip[1];
            int to = trip[2];
            stop[from] += numberOfPass;
            stop[to]-= numberOfPass;
        }
        int currentLoad = 0;
        for(int i=0;i<stops.length;i++){
            currentLoad += stop[i];
            if(currentLoad>capacity){
                return false;
            }
        }
        return true;
    }
}