import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMessage from './messages.reducer';

export interface TodosState {
  message: fromMessage.State;
}

export const reducers = {
  message: fromMessage.reducer
};

// 1. Create a feature selector (for todos-redux.module.ts's StoreModule)
const selectTodosFeature = createFeatureSelector<TodosState>('todosFeature');

// 2. Create a selector for each branch of the feature
const selectMessage = createSelector(selectTodosFeature, f => f.message);

// 3. Create any helpers you might need (optional)
//    N/A since step 2/3 are so straight forward

// 4. Create a selector for what the component needs
//    selectHeading(): string
export const selectHeaderMessage = createSelector(selectMessage, m => m.heading);
