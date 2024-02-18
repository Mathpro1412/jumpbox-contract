function distributeWorkload(numServers, workload) {
    const totalJobs = workload.reduce((acc, cur) => acc + cur, 0);
    const avgJobsPerServer = Math.floor(totalJobs / numServers);
    const remainingJobs = totalJobs % numServers;

    const distribution = [];
    let currentServer = 0;
    let currentJobIndex = 0;

    for (let i = 0; i < numServers; i++) {
        let serverLoad = avgJobsPerServer;
        if (i < remainingJobs) {
            serverLoad++;
        }

        const serverJobs = [];
        for (let j = 0; j < serverLoad; j++) {
            serverJobs.push(currentJobIndex++);
        }

        distribution.push(serverJobs);
    }

    return distribution;
}


const numServers = 3;
const workload = [3];
const distribution = distributeWorkload(numServers, workload);
console.log("Jobs distribution:", distribution);