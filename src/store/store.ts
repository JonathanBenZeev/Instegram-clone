import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { StoryState, storyReducer } from './reducers/story.reducer'
import { UserState, userReducer } from './reducers/user.reducer'
import { StoryAction } from './actions/story/interfaces'
import { UserAction } from './actions/user/interfaces'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export interface RootState {
    storyModule: StoryState
    userModule: UserState
}

const rootReducer = combineReducers<RootState>({
    storyModule: storyReducer,
    userModule: userReducer
})

export const store = createStore<RootState, StoryAction | UserAction, unknown, unknown>(rootReducer, composeEnhancers());

(window as any).gStore = store