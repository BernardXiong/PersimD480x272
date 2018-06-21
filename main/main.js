var page = {
	data : {dot : 1},
	
	onChangeCard : function (e) {
		// console.log("card changed!");
		// console.dir(e);

		this.data.dot = e.detail.value;
		this.setData({ dot: {value : this.data.dot, refresh : true}});
	},
	
	onHome : function(e) {
		this.setData({card1 : {value : 0, refresh : true}});
	},

	onButton : function(e) {
		// console.dir(e);

		switch (e.target.id)
		{
		case 'list':
			pm.navigateTo({url: 'list/list'});
			break;
		
		case 'calc':
			pm.navigateTo({url: 'calc/calc'});
			break;
		
		case 'player':
			pm.navigateTo({url: 'player/player'});
			break;
		
		case 'curve':
			pm.navigateTo({url: 'curve/curve'});
			break;
		
		case 'qrcode':
			pm.navigateTo({url: 'qrcode/qrcode'});
			break;
		
		case 'setting':
			pm.navigateTo({url: 'setting/setting'});
			break;
		}
	}
};

Page(page);
