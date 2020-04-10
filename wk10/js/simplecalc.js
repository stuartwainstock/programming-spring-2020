const vm = new Vue({
	el: '#simplecalculator',
	data: {
		firstNumber: null,
		secondNumber: null,
		operation: 'Addition',
		total: null
	},
	methods: {
		calculate: (num1, num2) => {
			switch (vm.operation) {
		        case 'Addition':
		          vm.total = num1 + num2;
		          break;
		        case 'Subtraction':
		          vm.total = num1 - num2;
		          break;
		        case 'Multiplication':
		          vm.total = num1 * num2;
		          break;
		        case 'Division':
		          vm.total = num1 / num2;
		          break;
				default: 
					window.alert('Unexpected Operator');
					break;
			}
			vm.firstNumber = vm.secondNumber = null;
		}
	}
});