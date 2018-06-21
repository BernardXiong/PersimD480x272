var page = {
	index : 0,
	current : 'item1',
	currentPanel : "panel1",

	data : {
		listCtrl1 : {},
		imagebox1 : {},
	},

	selectItem : function(id) {
		// set current target
		this.current = id;
		var panel = 'panel' + id.substring(4);

		// set Last Panel
		var panel_item = {};
		panel_item[this.currentPanel] = {background : "listItemNor.png", refresh : true};
		this.setData(panel_item);

		// set Current Panel
		this.currentPanel = panel;
		var panel_item = {};
		panel_item[this.currentPanel] = {background : "listItemSel.png", refresh : true};
		this.setData(panel_item);
		this.setData({listCtrl1 : {refresh : true}});

		if (this.index == 0)
		{
			this.index = 1;
			this.setData({imagebox1 : {value : "picture2.png", refresh : true}});
		}
		else
		{
			this.index = 0;
			this.setData({imagebox1: {value : "picture1.png", refresh : true}});
		}
	},

	onLoad : function(e) {
		console.log("add item!");
		console.dir(this);

		this.setData({imageTitle: "titile_list.png"});

		this.setData({listCtrl1: {
			page : this,
			xml : 'CustomPanels/ListItem',
			items : [
				{ custompanel1: {id : 'panel1', value : ''}, button1 : {id : 'item1', value : 'item 1'}},
				{ custompanel1: {id : 'panel2', value : ''}, button1 : {id : 'item2', value : 'item 2'}},
				{ custompanel1: {id : 'panel3', value : ''}, button1 : {id : 'item3', value : 'item 3'}},
				{ custompanel1: {id : 'panel4', value : ''}, button1 : {id : 'item4', value : 'item 4'}},
				{ custompanel1: {id : 'panel5', value : ''}, button1 : {id : 'item5', value : 'item 5'}},
				{ custompanel1: {id : 'panel6', value : ''}, button1 : {id : 'item6', value : 'item 6'}},
				{ custompanel1: {id : 'panel7', value : ''}, button1 : {id : 'item7', value : 'item 7'}},
				{ custompanel1: {id : 'panel8', value : ''}, button1 : {id : 'item8', value : 'item 8'}},
				{ custompanel1: {id : 'panel9', value : ''}, button1 : {id : 'item9', value : 'item 9'}},
				{ custompanel1: {id : 'panel10', value : ''}, button1 : {id : 'item10', value : 'item 10'}},
				{ custompanel1: {id : 'panel11', value : ''}, button1 : {id : 'item11', value : 'item 11'}},
				{ custompanel1: {id : 'panel12', value : ''}, button1 : {id : 'item12', value : 'item 12'}},
			]
		}});

		this.selectItem("item1");
	},

	onButton : function(e) {
		if (this.current == e.target.id) return ;

		this.selectItem(e.target.id);
	},
	
	onBackButton : function(e) {
		pm.navigateBack();
	},
};

Page(page);
