import * as Core from "@actions/core"

const inputName = Core.getInput("name")




function greet(name: string, repoUrl: string) {
    console.log(`'Hello ${name}! You r running a GH action in ${repoUrl}'`)
}
//ctx = context
//repo is repository
//if Enterprise-Server is used there u need serverUrl, otherwise it is the same
function getRepoUrl({ repo, serverUrl }: GithubContext): string {
    return `${serverUrl}/${repo.owner}/${repo.repo}`
}
console.log('Hello World!')