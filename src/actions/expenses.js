import uuid from 'uuid';
import database from '../firebase/firebase.js';

// component calls action generator
// action generator returns an object
// component dispatches object
// redux store changes

// Async
// component calls action generator
// action generator returns function
// component dispatches function(?)
// function runs (has the ability to dispatch other actions and do what it wants)


// ADD_EXPENSE
export const addExpense = (expense ) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;

        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    }
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id 
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});

export const startSetExpenses = () => {
    //fetch all expenses data
    return(dispatch) => {
        
        return database.ref('expenses')
            .once('value')
            .then((snapshot)=> {
                const expenses = [];
                snapshot.forEach((childSnapShot) => {
                    expenses.push({
                        id: childSnapShot.key,
                        ...childSnapShot.val()
                    })
                });
                dispatch(setExpenses(expenses));
            });
    }
    // parse into array
    // dispatch SET_EXPENSES

};