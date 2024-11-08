// src/redux/reducers/employees.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Employee } from '../../types/employee'; // Assurez-vous que le chemin d'importation est correct

interface EmployeesState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  loading: false,
  error: null,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    loadEmployeesStart(state) {
      state.loading = true;
      state.error = null;
    },
    loadEmployeesSuccess(state, action: PayloadAction<Employee[]>) {
      state.employees = action.payload;
      state.loading = false;
    },
    loadEmployeesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addEmployee(state, action: PayloadAction<Employee>) {
      state.employees.push(action.payload);
    },
    removeEmployee(state, action: PayloadAction<number>) {
      state.employees = state.employees.filter(employee => employee.id !== action.payload);
    },
  },
});

export const {
  loadEmployeesStart,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  addEmployee,
  removeEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
