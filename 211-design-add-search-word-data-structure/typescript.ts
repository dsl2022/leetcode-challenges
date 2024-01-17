class WordDictionary {
    root: Trie
    constructor() {
        this.root = new Trie('')
    }

    addWord(word: string): void {
        let node = this.root
        for (const x of word){
           
            if (!node.children[x]) {
                const newNode = new Trie(x)
                node.children[x] = newNode
            } 
            node = node.children[x]
        }
        node.isEnding = true
    }

    search(word: string): boolean {
        return this.findRecursion(word, this.root)
    }
    findRecursion(word: string, node: Trie): boolean{
        if (word[0] == '.'){
            for (let i = 0; i < 26; i ++) {
                const c = String.fromCharCode(i+97)
                
                const reuslt = this.findRecursion(c+word.slice(1), node)
                if (reuslt) {
                    return reuslt
                }
            }
            return false
        } else if (word.length == 1){
            return node.children[word[0]] !== undefined && node.children[word[0]].isEnding
        }
        return node.children[word[0]] !== undefined && this.findRecursion(word.slice(1), node.children[word[0]])
    }
}

class Trie {
    children : Map<string,Trie>
    value: string
    isEnding: boolean
    constructor(value: string){
        this.children  = new Map()
        this.isEnding = false
        this.value = value
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */