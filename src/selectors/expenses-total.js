export default (expenses) => {
    return expenses.map((expense) => expense.amount)
    .reduce((sum, val) => sum + val , 0);
};