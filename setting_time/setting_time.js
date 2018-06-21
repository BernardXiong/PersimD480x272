var page = {
    onLoad: function (e) {
        this.setData({
            imageTitle: "titile_setting.png"
        });
    },

    onBackButton: function (e) {
        pm.navigateBack();
    },
};

Page(page);
