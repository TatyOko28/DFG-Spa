import { combineReducers } from '@reduxjs/toolkit';
import employeesReducer from './reducers/employees';

const rootReducer = combineReducers({
  employees: employeesReducer,
  // Ajoutez d'autres reducers ici
});

export default rootReducer;
