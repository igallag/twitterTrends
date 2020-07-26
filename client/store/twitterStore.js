import axios from 'axios'

/**
 * Action types
 */

const GET_FOLLOWERS = 'GET_FOLLOWERS'

/**
 * INITIAL STATE
 */

const twitter = {
  tweets: [],
  followers: []
}

/**
 * Action Creators
 */

const getFollowers = followers => ({type: GET_FOLLOWERS, followers})

/**
 *
 */

export const getFollowersThunk = async dispactch => {
  try {
    const res = await axios.get('followers/list')
    dispactch(getFollowers(res))
  } catch (error) {
    console.log(error)
  }
}

/**
 * Reducer
 */

export default function(state = twitter, action) {
  switch (action.type) {
    case GET_FOLLOWERS:
      return action.followers
    default:
      return state
  }
}
