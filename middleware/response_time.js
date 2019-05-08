/**
 * @fileOverview charity-middleware-reponse_time
 * @author XiaoBin Li(lixiaobin8878@gmail.com)
 */

'use strict'

// just for showcase, egg had a build-in middleware to export `x-readtime` header
module.exports = (options, app) => {
  return function * (next) {
    const start = Date.now()
    yield next
    // options is config.responseTime
    this.set('responseTime', Date.now() - start)
  }
}
