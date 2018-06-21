var page = {
	data : {result : ''},
	op : 'null',
	left : 0,

	onLoad : function(e) {
		this.setData({imageTitle: "titile_calc.png"});
	},

	onBackButton : function(e) {
		pm.navigateBack();
	},
	
	onButton : function(e) {
		var result = this.data.result;
		console.dir(e);

		switch (e.target.id)
		{
		case "button0":
		case "button1":
		case "button2":
		case "button3":
		case "button4":
		case "button5":
		case "button6":
		case "button7":
		case "button8":
		case "button9":
			var num = e.target.id.substring(6, 7);
			console.log(num);

			if (result != '0') result += num;
			else result = num;

			break;

		case "button_back":
			if (result.length == 1) result = '';
			else result = result.substring(0, result.length - 1);
			break;

		case "button_div":
			if (result != '')
			{
				this.op = "div";
				this.left = Number(result);
				result = '';
			}
			break;
		case "button_mul":
			if (result != '')
			{
				this.op = "mul";
				this.left = Number(result);
				result = '';
				}
			break;

		case "button_minus":
			if (result != '')
			{
				this.op = "minus";
				this.left = Number(result);
				result = '';
				}
			break;
		case "button_plus":
			if (result != '')
			{
				this.op = "plus";
				this.left = Number(result);
				result = '';
				}
			break;

		case "button_clear":
			result = '';
			break;

		case "button_eq":
			if (this.op == 'null') break;

			switch (this.op)
			{
			case 'div':
				var num = Number(result);

				if (num == 0) result = 0;
				else result = this.left / num;
				break;
			case 'mul':
				result = this.left * Number(result);
				break;
			case 'minus':
				result = this.left - Number(result);
				break;
			case 'plus':
				result = this.left + Number(result);
				break;
			}
			
			this.left = 0;
			result = String(result);
			this.op = 'null';

			break;
		}

		if (this.data.result != result)
		{
			this.data.result = result;

			this.setData({result: {value : this.data.result, refresh : true}});
		}
	},
};

Page(page);
