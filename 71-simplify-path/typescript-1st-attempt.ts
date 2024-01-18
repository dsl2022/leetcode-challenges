function simplifyPath(path: string): string {
    //"/home/ab/../../".split("/")
    //'a'
    const stack = path.split('/')
    let counter = 0, answer = []
    console.log('stack is', stack)
    for (let i = stack.length - 1; i >= 0 ;  i--) {
        const word = stack[i]
        if (word == '' || word == '.'){
            continue
        } else if (word == '..'){
            counter++
        } else{
            if (counter > 0){
                counter--
            }else if ( counter == 0  && stack[i] != '' && stack[i] != '.'&& stack[i] != '..'){
                //console.log("answer inside",answer)
                answer.unshift(stack[i])
            }
        }
    }
    console.log(answer)
    return '/'+answer.join('/')
};