/*
	ActionFunctions
*/
const ActionFunctions = {
	UPDATE_USER_FUNCTIONS_IDS: 'UserFunctionsReducer/UPDATE_USER_FUNCTIONS_IDS',
	UPDATE_ACTUAL_USER_FUNCTIONS_IDS: 'UserFunctionsReducer/UPDATE_ACTUAL_USER_FUNCTIONS_IDS',
};

/*
	Reducer
*/
const initialState = {
	functions: [],
	actualType: null,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ActionFunctions.UPDATE_USER_FUNCTIONS_IDS:
			return {
				...state,
				types: action.payload,
			};
		case ActionFunctions.UPDATE_ACTUAL_USER_FUNCTIONS_IDS:
			return {
				...state,
				actualType: action.payload,
			};
		default:
			return state;
	}
}

/*
	Actions
*/

export const UserTypeActions = {
	/**
	 * @params {number[]} ids
	 */
	updateUserTypeIds: ids => ({
		type: ActionFunctions.UPDATE_USER_FUNCTIONS_IDS,
		payload: ids,
	}),
	/**
	 * @params {number} id
	 */
	updateActualTypeId: id => ({
		type: ActionFunctions.UPDATE_ACTUAL_USER_FUNCTIONS_IDS,
		payload: id,
	}),
};

export const UserFunctions = {
	/**
	 * @params {number[]} ids
	 */
	updateUserFunctions: ids => ({
		type: ActionFunctions.UPDATE_USER_FUNCTIONS_IDS,
		payload: ids,
	}),
	/**
	 * @params {number} id
	 */
	updateActualUserFunctions: id => ({
		type: ActionFunctions.UPDATE_ACTUAL_USER_FUNCTIONS_IDS,
		payload: id,
	}),
};
