var page = {
	onLoad : function(e) {
		this.setData({imageTitle: "titile_player.png"});
	},

	onBackButton : function(e) {
		pm.navigateBack();
	},
	
	onChanging : function(e) {
		console.dir(e);
	},

    secondToTime : function(s) 
    {
        var t;

        if(s > -1)
        {
            var min = Math.floor(s/60) % 60;
            var sec = s % 60;

            if(min < 10)
            {
            	t = "0" + min + ":";
			}
			else
			{
            	t = min + ":";
            }

            if(sec < 10){t += "0";}

            t += sec.toFixed(0);
        }

        return t;
    },
    
	onChange : function(e) {
		// console.dir(e);
		
		var value = e.detail.value;
		var total = 5 * 60 + 20;
		
		value = total * value / 100;
		
		var position = this.secondToTime(value);
		this.setData({label1 : { value : position + "/05:20", refresh : true}});
	},
};

Page(page);
