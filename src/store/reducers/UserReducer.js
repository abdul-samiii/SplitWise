import {
  GET_GROUPS_FAILED,
  GET_GROUPS_START,
  GET_GROUPS_SUCCESS,
  GET_GROUP_INC_FAILED,
  GET_GROUP_INC_START,
  GET_GROUP_INC_SUCCESS,
  GET_MEMBERS_FAILED,
  GET_MEMBERS_START,
  GET_MEMBERS_SUCCESS,
  GET_USER_FAILED,
  GET_USER_START,
  GET_USER_SUCCESS,
  INSERT_USER_FAILED,
  INSERT_USER_START,
  INSERT_USER_SUCCESS,
  SEARCH_FRIEND_FAILED,
  SEARCH_FRIEND_START,
  SEARCH_FRIEND_SUCCESS,
} from '../actionTypes'
import { InitialState } from './InitialState'

export const userReducer = (state = InitialState, action) => {
  switch (action?.type) {
    case INSERT_USER_START:
      return {
        ...state, isLoading: true,
      }
    case INSERT_USER_SUCCESS:
      return {
        ...state, isLoading: false,
      }
    case INSERT_USER_FAILED:
      return {
        ...state, isLoading: false,
      }
    case SEARCH_FRIEND_START:
      return {
        ...state, isLoading: true,
      }
    case SEARCH_FRIEND_SUCCESS:
      return {
        ...state, isLoading: false, searchUser: action?.payload,
      }
    case SEARCH_FRIEND_FAILED:
      return {
        ...state, isLoading: false, searchUser: undefined,
      }
    case GET_USER_START:
      return {
        ...state, isLoading: true,
      }
    case GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: action?.payload }

    case GET_USER_FAILED:
      return {
        ...state, isLoading: false, searchUser: undefined,
      }
    case GET_GROUPS_START:
      return {
        ...state, isLoading: true,
      }
    case GET_GROUPS_SUCCESS:
      return { ...state, isLoading: false, groupCount: action?.payload }

    case GET_GROUPS_FAILED:
      return {
        ...state, isLoading: false,
      }
    case GET_MEMBERS_START:
      return {
        ...state, isLoading: true,
      }
    case GET_MEMBERS_SUCCESS:
      return { ...state, isLoading: false, groupMembers: action?.payload }

    case GET_MEMBERS_FAILED:
      return {
        ...state, isLoading: false,
      }
    case GET_GROUP_INC_START:
      return {
        ...state, isLoading: true,
      }
    case GET_GROUP_INC_SUCCESS:
      return { ...state, isLoading: false, incommingGroup: action?.payload }

    case GET_GROUP_INC_FAILED:
      return {
        ...state, isLoading: false,
      }
    default:
      return state
  }
}
