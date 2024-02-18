function distribute(node, workload) {
    let arr = []
    let node_arr = []
    if (workload % node == 0) {
        for (let i = 0; i < workload; i++) {
            if(node_arr.length < node){
                node_arr.push(i)
            }
        }
    }
    return node_arr
}

console.log(distribute(2, 4))