function minEnergy(start,shops,stations,target){
    const shopSet = new Set(shops);
    const stationSet = new Set(stations);
    let energy = 0;
    let position = start+1;
    let visitedShops = new Set();
    let index
    let diff

    while(position!=target&& visitedShops===shopSet){
         if(shopSet.has(position)){
            visitedShops.add(position)
         }

         if(stationSet.has(position)){
             index = stations.indexOf(position);
              if(Math.abs(stationSet[index + 1] - position)){
                    position=index + 1
              }
              if(Math.abs(stationSet[index - 1] - position)){
                position=index - 1
              }
                
         }

   

         energy++
         position++

    }
    return energy
}

console.log(minEnergy(2,[4,9],[3,6,8],7))



