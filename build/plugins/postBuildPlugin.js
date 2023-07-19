
// import { projectRoot } from '../../scripts/utils/path'
import path from 'path'
import { moveAndRenameFolder } from '../node/moveAndRenameFolder'

// postBuildPlugin.js
export function postBuildPlugin() {
  return {
    name: "post-build-plugin",
    generateBundle(_, bundle) {
        const projectRoot = path.resolve(__dirname, '..', '..')
        const distRoot = path.resolve(projectRoot, 'website/dist')
        const toDistPath = path.resolve(projectRoot, 'dist')
        moveAndRenameFolder(distRoot,  toDistPath)
    },
  };
}
