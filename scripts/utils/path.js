const  { resolve } = require('path');

const _resolve = (...path) => resolve(__dirname, "..", "..", ...path);


const projectRoot = _resolve('');

const systemRoot = resolve(projectRoot, 'system')

module.exports = {
    projectRoot,
    systemRoot
}
