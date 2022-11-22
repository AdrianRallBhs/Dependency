import * as Core from "@actions/core"
import * as Github from "@actions/github"
import { context } from "@actions/github/lib/utils"

type GithubContext = typeof Github.context

const inputName = Core.getInput("name")

greet(inputName, getRepoUrl(context))




function greet(name: string, repoUrl: string) {
    console.log(`'Hello ${name}! You r running a GH action in ${repoUrl}'`)
}
//ctx = context
//repo is repository
//if Enterprise-Server is used there u need serverUrl, otherwise it is the same
function getRepoUrl({repo, serverUrl}: GithubContext): string  {
   return `${serverUrl}/${repo.owner}/${repo.repo}`
}
console.log('Hello World!')