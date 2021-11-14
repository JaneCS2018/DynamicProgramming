const cost = [10,15,20]

const climbStairs =(cost)=>{
   let n = cost.length
   if (n<0) return 0
   if (n===0|| n===1) return cost[i]
   let dp=[cost[0], cost[1]]
   for(let i=2; i<cost.length; i++){
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
   }
   return Math.min(dp[n-1], dp[n-2])
}

console.log(climbStairs(cost))

//Optimal Solution
const climbStairs_2 =(cost)=>{
    let n = cost.length
    if (n<0) return 0
    if (n===0|| n===1) return cost[i]
    let dp_1 =  cost[0]
    let dp_2 = cost[1]

    for(let i=2; i<cost.length; i++){
        let current = cost[i] + Math.min(dp_1, dp_2)
        dp_1= dp_2
        dp_2 = current
        
    }
    return Math.min(dp_1, dp_2)
 }

 console.log(climbStairs_2(cost))