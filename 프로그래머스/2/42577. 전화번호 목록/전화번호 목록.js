function solution(phone_book) {
    /*
        // case 1
        const hasPrefix = phone_book.some(p => phone_book.some(b => b !== p && b.startsWith(p)));
        const answer = !hasPrefix;
    */
    
    /*
        // case 2
        let hasPrefix = false;
        const answer = !hasPrefix;
        const length = phone_book.length;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                const a = phone_book[i];
                const b = phone_book[j];

                // 바로 return해서 실행 시간 단축
                if (a !== b && a.startsWith(b)) {
                    hasPrefix = true;
                    return !hasPrefix;
                }
            }
        }
    */
    
    /*
        // case 3
        const sorted = phone_book.sort();

        let hasPrefix = false;
        const answer = !hasPrefix;
        const length = sorted.length;

        for (let i = 0; i < length; i++) {
            // 불필요한 탐색을 줄여서 탐색 시간 단축
            for (let j = length - 1; j > i; j--) {
                const a = sorted[i];
                const b = sorted[j];

                if (b.startsWith(a)) {
                    hasPrefix = true;
                    return !hasPrefix;
                }
            }
        }
    */
    
    // case 4
    const sorted = phone_book.sort();

    let hasPrefix = false;
    const answer = !hasPrefix;
    const length = sorted.length;

    for (let i = 0; i < length; i++) {
        // 다음 전화번호와만 비교해서 탐색 시간 단축
        if (sorted[i + 1]?.startsWith(sorted[i])) {
            hasPrefix = true;
            return !hasPrefix;
        }
    }
    
    return answer;
}