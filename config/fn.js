const { format } = require('date-fns');
const fs = require('fs');

/**
 * 从命令行提取参数
 * @param {String} key
 */
function getParam(key) {
    const argv = process.argv.join('@');
    const re = `${key}=([^@]+)`;
    const reg = new RegExp(re);
    const match = argv.match(reg);
    return match ? match[1] : '';
}

/**
 * Webpack 打包回调
 * @param {Function} callback
 */
const exec = (callback) => (err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        callback(false);
        return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
        console.error(info.errors);
    }
    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
    console.log(stats.toString({ chunks: false, colors: true }));
    callback(true);
};

/**
 * 写入时间戳
 */
const writeTimestamp = function(filePath) {
    return new Promise((resolve) => {
        const before = fs.readFileSync(filePath, 'utf-8');
        const t = Date.now();
        const after = before.replace(/@@.*?@@/g, `@@${t}@@`);
        fs.writeFile(filePath, after, (err) => {
            if (err) console.log(err);
            resolve();
        });
    });
};

const colorLog = (counter = 0) => (content) => {
    const colors = ['green', 'yellow', 'blue', 'magenta', 'cyan', 'grey'];
    const index = counter % 5;
    const time = format(new Date(), 'HH:mm:ss');
    console.log(`>>>${time} ---> ${content}` [colors[index]]);
    counter++;
};

module.exports = { exec, getParam, writeTimestamp, colorLog };