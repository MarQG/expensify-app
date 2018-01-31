import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral  from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expensesTotal, expensesCountTotal }) => {
    const expensesWord = expenseCount === 1 ? 'expense' : 'expenses';
    const expensesCountWord = expensesCountTotal === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Showing <span>{expenseCount}</span> of {expensesWord} totalling <span>{formattedExpensesTotal}</span> </h1>
                <h1 className="page-header__title"><span>{expensesCountTotal}</span> hidden {expensesCountWord}  not being shown.</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const totalExpensesCount = state.expenses.length - visibleExpenses.length;
    return{
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expensesCountTotal: totalExpensesCount
    }
};

export default connect(mapStateToProps)(ExpensesSummary);