function simplifyPath(path: string): string {
    // '/.././/.../' => '/...'
    // currVal ''
    // iterate chars path Ot(n) build new path with file name stack Os(n)
        // '/' 
            // handle currVal
                // '' || '.' do nothing
                // '..' pop stack
                // '...+ or *' push stack
            // reset currVal
        // '.'
            // add to currVal
    // join stack with '/'

    const fileNameStack = [];
    let currVal = '';
    for (let char of path + '/') { // run extra time to clear currVal at end
        if (char === '/') {
            switch (currVal) {
                case '':
                case '.':
                    break;
                case '..':
                    fileNameStack.pop();
                    break;
                default:
                    fileNameStack.push(currVal);
            }
            currVal = '';
        } else {
            currVal += char;
        }
    }

    return '/' + fileNameStack.join('/');
};