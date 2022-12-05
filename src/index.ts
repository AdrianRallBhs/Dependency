// import * as Core from "@actions/core"
// import * as Github from "@actions/github"
import *  as Core from '@actions/core'
import * as Github from "@actions/github"
import { context } from "@actions/github/lib/utils"
//https://github.com/actions-marketplace-validations/tjololo_nuget-dependencies-update

type GithubContext = typeof Github.context

const inputName = Core.getInput("name")

greet(inputName, getRepoUrl(context))



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

// function getNpmUserConfig() {
//     const out = execSync('npm config get userconfig')
//     if (!out.toString()) {
//         throw Error('No userconfig found!')
//     }
//     // hier js, aber in TypeScript gibt es kein trim sondern eine andere Methode
//     return out.toString().trim
// }

// function getActionDir() {
//     return path.resolve(path.join(__dirname, '../'))
// }

// function run() {
//     console.log(__dirname)
//     let workingDirOld = ''

//     try {
//         const actionDir = getActionDir()
//         const token = core.getInput('token', {
//             required: true
//         })

//         //set token for .npmrc
//         process.env.INPUT_TOKEN = token

//         const workingDir = core.getInput('working-directory', {
//             required: false,
//             trimWhitespace: true
//         })

//         const noInstall = utils.parseBool(core.getInput('no-install', {
//             required: false,
//             trimWhitespace: true
//         }))

//         const useUserConfig = utils.parseBool(core.getInput('user-config', {
//             required: false,
//             trimWhitespace: true,
//         }))

//         let cfgDir = process.cwd()
//         let destNpmrc = path.join(cfgDir, ".npmrc")

//         if (useUserConfig) {
//             cfgDir = getNpmUserConfig().toString()
//             destNpmrc = cfgDir
//         }

//         core.info(`Copying .npmrc template to ${workingDir}...`)
//         fs.copyFileSync(path.join(actionDir, 'src/.npmrc.template'), destNpmrc)
//         if (!useUserConfig) {
//             core.saveState('npmrcFile', destNpmrc)
//         }

//         if (workingDir && workingDir !== process.cwd()) {
//             workingDirOld = process.cwd()
//             core.info(`Change working-directory to ${workingDir} ...`)
//             if (!path.isAbsolute(workingDir)) {
//                 process.chdir(path.join(workingDirOld, workingDir))
//             } else {
//                 process.chdir(workingDir)
//             }
//         }

//         if (noInstall) {
//             core.info('Option "no-install" is set, skipping all other steps ...')
//             return
//         }

//         core.info('installing dependencies ...')
//         execSync('npm install', { stdio: 'inherit' })

//         const update = !core.getBooleanInput('no-update', { required: false })
//         if (update) {
//             core.info('Updating dependencies ...')
//             execSync('npm update', { stdio: 'inherit' })
//         }

//         const script = core.getInput('script', { required: false })
//         if (script) {
//             core.info('Running script ...')
//             execSync(script, { stdio: 'inherit' })
//         }
//     } catch (error) {
//         if (error instanceof Error) {
//             core.setFailed(`Action failed with error: "${error.stack}".`)
//         } else {
//             core.setFailed(`Action failed with error: "${error}".`)
//         }
//     } finally {
//         if (workingDirOld) {
//             core.info(`Restoring working-directory "${workingDirOld}" ...`)
//             process.chdir(workingDirOld)
//         }
//     }
// }

// run()
