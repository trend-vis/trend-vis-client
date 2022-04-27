import { ITEM } from '../actions/types'
import FALLBACK_JSON from '../data/fallback.json'

const testJsonData = (data) => {
  if (!data.hasOwnProperty('created_at')) return false;
  if (!data.hasOwnProperty('ranking')) return false;
  if (!data.hasOwnProperty('trends')) return false;
  if (data.ranking.length < 15) return false;
  if (data.trends.length < 6) return false;

  for (let i = 0; i < 6; i++) {
    if (!data.trends[i].hasOwnProperty('github')) return false;
    if (data.trends[i].github.length < 3) return false;
    if (!data.trends[i].hasOwnProperty('tweets')) return false;
    if (data.trends[i].tweets.length < 8) return false;
    if (!data.trends[i].hasOwnProperty('word')) return false;
  }

  return true;
}

export default function (state = {}, action) {

  switch (action.type) {
    case ITEM.GET:

      if (action.error) {
        console.log("use fallback json")
        return { ...state, data: FALLBACK_JSON }
      }

      if (testJsonData(action.payload.data) === false) {
        console.log("use fallback json")
        return { ...state, data: FALLBACK_JSON }
      }

      return { ...state, data: action.payload.data }


    default:
      return state
  }
}
