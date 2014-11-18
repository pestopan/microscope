var expensesData = [
	{
		date: new Date(),
		title: 'Drecksachen',
		amount: 123.33,
		tax: 0.19
	},
	{
		date: new Date(),
		title: 'Gummibäume',
		amount: 550.33,
		tax: 0.19
	},
	{
		date: "2014-11-18T21:10:22.938Z",
		title: 'Liebesperlen',
		amount: 1.33,
		tax: 0.19
	}
];

// Get total amount
var total = 0;
for (var i = 0; i < expensesData.length; i++) {
	if (expensesData[i].tax > 0.07) {
		amount = expensesData[i].amount;
		total += amount;
	}
}

Template.expensesList.helpers({
	expenses: expensesData,
	total: rounded = Math.round( total * 100 ) / 100
});


console.log(expensesData[2].tax);



square = function (a) {
  return a*a;
};
applyOperation = function (f, a) {
  return f(a);
};
test = applyOperation (square, 10); // 100

console.log(test);