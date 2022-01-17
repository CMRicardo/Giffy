import { useReducer } from 'react'

const ACTIONS = {
	UPDATE_KEYWORD: 'update_keyword',
	UPDATE_RATING: 'update_rating',
	UPDATE_LANG: 'update_lang',
}

const ACTIONS_REDUCERS = {
	[ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
		...state,
		keyword: action.payload,
		times: state.times + 1,
	}),
	[ACTIONS.UPDATE_RATING]: (state, action) => ({
		...state,
		rating: action.payload,
	}),
	[ACTIONS.UPDATE_LANG]: (state, action) => ({
		...state,
		lang: action.payload,
	}),
}

const REDUCER = (state, action) => {
	const actionReducer = ACTIONS_REDUCERS[action.type]
	return actionReducer ? actionReducer(state, action) : state
}

export default function useForm({
	initialKeyword = '',
	initialRating = 'g',
	initialLang = 'en',
} = {}) {
	const [state, dispatch] = useReducer(REDUCER, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
		times: 0,
		lang: initialLang,
	})

	const { keyword, rating, times, lang } = state

	return {
		keyword,
		rating,
		times,
		lang,
		updateKeyword: keyword =>
			dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
		updateRating: rating =>
			dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
		updateLang: lang => dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang }),
	}
}
