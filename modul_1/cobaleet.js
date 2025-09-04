/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    millis = 100
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
