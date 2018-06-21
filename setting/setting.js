var page = {
	onLoad : function(e) {
		this.setData({imageTitle : "titile_setting.png"});

		this.setData({listCtrl1: {
			page : this,
			xml : 'CustomPanels/settingItem',
			items : [
				{ imagebox1 : "wifi_setting_32.png", button1 : {id : 'wifi', norImg : "title_wifi.png"}, button2 : {id : 'wifi'}, button3 : {id : 'wifi'}},
				{ imagebox1 : "language_32.png", button1 : {id : 'language', norImg : "title_language.png"}, button2 : {id : 'language'}, button3 : {id : 'language'}},
				{ imagebox1 : "time_32.png", button1 : {id : 'time', norImg : "title_time.png"}, button2 : {id : 'time'}, button3 : {id : 'time'}},
				{ imagebox1 : "about_32.png", button1 : {id : 'about', norImg : "title_about.png"}, button2 : {id : 'about'}, button3 : {id : 'about'}},
			]
		}});
	},

	onClicked: function (e) {
		switch (e.target.id) {
			case "language":
				pm.navigateTo({
					url: "setting_language/setting_language"
				});
				break;

			case "wifi":
				pm.navigateTo({
					url: "setting_wifi/setting_wifi"
				});
				break;

			case "time":
				pm.navigateTo({
					url: "setting_time/setting_time"
				});
				break;

			case "about":
				pm.navigateTo({
					url: "setting_about/setting_about"
				});
				break;
		}
	},

	onBackButton : function(e) {
		pm.navigateBack();
	},
};

Page(page);
