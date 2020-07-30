// const router = require('express').Router()
// module.exports = router
const Twit = require('twit')
module.exports = Twit

const T = new Twit({
  consumer_key: 'PGjwgSsQKrE5ytoR6Dwr7R3Z6',
  consumer_secret: '6U7ttBPv2RhCdHyMFsDPTIpBj9BDmoUWfT166XPxJLmA9ZlQPW',
  app_only_auth: true
})
console.log('is this auto calling?')
T.get('followers/list', {screen_name: 'Gunsmokeisdead'}, function(
  err,
  data,
  response
) {
  try {
    console.log(data, 'THAR BE THE DATA MATY')
  } catch (error) {
    console.log(err)
  }
})
