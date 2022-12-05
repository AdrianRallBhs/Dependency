import * as Core from "@actions/core"

const inputName = Core.getInput("name")




function greet(name: string, repoUrl: string) {
    console.log(`'Hello ${name}! You r running a GH action in ${repoUrl}'`)
}

console.log('Hello World!')