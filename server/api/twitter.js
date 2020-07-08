const router = require('express').Router()
module.exports = router

/**
 * This needs to be able to hit an endpoint on the twitter api (test request in secrets) to bring back a list of tweets
 */
router.get('/', async (req, res, next) => {
  try {
    let data = ''
  } catch (error) {
    next(error)
  }
})
