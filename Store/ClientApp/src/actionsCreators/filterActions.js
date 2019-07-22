import { SORT_BY } from '../constants/ActionTypes'

export const sortBy = (sortType) => {
    return { type: SORT_BY, sortType }
}

