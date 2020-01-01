import storiesData from './stories'

const initialState = {
    stories: storiesData.stories || [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}
