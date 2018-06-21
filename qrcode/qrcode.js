var page = {
	onLoad : function(e) {
		this.setData({imageTitle : "titile_qrcode.png"});
	},

	onBackButton : function(e) {
		// set down arrow
		this.setData({button1 : {norImg : "down_32.png", refresh : true}});

		pm.navigateBack();
	},
};

Page(page);
