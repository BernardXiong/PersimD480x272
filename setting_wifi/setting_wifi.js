var page = {
    onLoad: function (e) {
        this.setData({
            imageTitle: "titile_setting.png"
        });

        if (0){
            this.setData({
                listCtrl1 : {
                    page : this, 
                    xml : "CustomPanels/wifiItem",
                    items : [
                        {label1 : "ChinaNet-Test", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "ChinaNet-AWO", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "ChinaNet-TTT", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "ChinaNet-123", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "WQ2", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "xiaomi", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "Himax", imagebox1 : "wifi_no_signal.png"},
                    ]
                }
            });
        }
    },

    onEnable : function(e) {
        console.dir(e);

        if (e.detail.value){
            this.setData({
                listCtrl1 : {
                    page : this, 
                    xml : "CustomPanels/wifiItem",
                    items : [
                        {label1 : "realthread", imagebox1 : "wifi_full_signal.png"},
                        {label1 : "ChinaNet-Test", imagebox1 : "wifi_full_signal.png"},
                        {label1 : "ChinaNet-AWO", imagebox1 : "wifi_mid_signal.png"},
                        {label1 : "ChinaNet-123", imagebox1 : "wifi_low_signal.png"},
                        {label1 : "WQ2", imagebox1 : "wifi_low_signal.png"},
                        {label1 : "xiaomi", imagebox1 : "wifi_no_signal.png"},
                        {label1 : "Himax", imagebox1 : "wifi_no_signal.png"},
                    ],
                    refresh : true
                }
            });
        }
        else
        {
            this.setData({
                listCtrl1 : {empty: true, refresh: true}
            });
        }
    },

    onBackButton: function (e) {
        pm.navigateBack();
    },
};

Page(page);
