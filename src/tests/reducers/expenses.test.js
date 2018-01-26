import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '3',
        description: 'Water Bill',
        note: '',
        amount: 10200,
        createdAt: moment()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses , expense]);
});

test('should update expense by id', () => {
    const expense = {
        id: '2',
        description: 'Water Bill',
        note: '',
        amount: 10200,
        createdAt: moment()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expense.id,
        updates: expense
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expense, expenses[2]]);
});

test('should not exit expense if id not found', () => {
    const expense = {
        id: '-1',
        description: 'Water Bill',
        note: '',
        amount: 10200,
        createdAt: moment()
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expense.id,
        update: expense

    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [
            expenses[1]
        ]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});


