function solution(participant, completion) {
    // name : count 형식의 객체
    const uniqueParticipant = [...new Set(participant)];
    const nameCountMap = uniqueParticipant.reduce((acc,cur) => {
        acc[cur] = 0;
        return acc;
    }, {})
    
    participant.forEach((p) => nameCountMap[p]++);
    completion.forEach((c) => nameCountMap[c]--);
    
    const nameCountMapArray = Object.entries(nameCountMap);
    
    // 완주하지 못한 선수가 여러 명이 나올 수 있는 경우
    // const nameArray = nameCountMapArray.map(arr => new Array(arr[1]).fill(arr[0])).flat();
    // const answer = nameArray.toString();
    
    // 완주하지 못한 선수가 한 명으로 확실한 경우
    const answer = nameCountMapArray.find(([name, count]) => count === 1)[0];
    
    return answer;
}