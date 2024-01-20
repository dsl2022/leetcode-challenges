function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    const length: number = beginWord.length;
    const allComboDict: Map<string, string[]> = new Map();

    wordList.forEach((word) => {
        for (let i = 0; i < length; i++) {
            const newWord: string = word.substring(0, i) + '*' + word.substring(i + 1);
            const transformations: string[] = allComboDict.get(newWord) || [];
            transformations.push(word);
            allComboDict.set(newWord, transformations);
        }
    });

    // BFS
    const queue: Array<[string, number]> = [[beginWord, 1]];
    const visited: Set<string> = new Set([beginWord]);

    while (queue.length > 0) {
        const [currentWord, level]: [string, number] = queue.shift()!;
        for (let i = 0; i < length; i++) {
            const intermediateWord: string = currentWord.substring(0, i) + '*' + currentWord.substring(i + 1);

            const words: string[] = allComboDict.get(intermediateWord) || [];
            for (const word of words) {
                if (word === endWord) {
                    return level + 1;
                }
                if (!visited.has(word)) {
                    visited.add(word);
                    queue.push([word, level + 1]);
                }
            }

            allComboDict.set(intermediateWord, []);
        }
    }

    return 0;
}
