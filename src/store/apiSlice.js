import { createSlice, current } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: 'quiz',
    initialState: {
        page: {
            start: 0,
            end: 5
        },
        currentPage: 1,
        score: 0,
        chosenOptions: [],
    },
    reducers: {
        updatePage: (state, action) => {
            state.page = {
                start: 5,
                end: 11
            }
        },
        nextPage: (state) => {
            state.currentPage = state.currentPage + 1;
        },
        upadateScore: (state) => {
            state.score = state.score + 1;
        },
        updateOptions: (state, action) => {
            const chosenOption = action.payload
            const exisitingOptionInQ = state.chosenOptions.find((option) => option.index === chosenOption.index)

            if (exisitingOptionInQ) {
             state.chosenOptions = state.chosenOptions.filter((option) => option.index != exisitingOptionInQ.index)
             state.chosenOptions.push(chosenOption);
            } else {
                state.chosenOptions.push(chosenOption);
            }
        }
        
    }
});

export const apiActions = apiSlice.actions;
export default apiSlice;