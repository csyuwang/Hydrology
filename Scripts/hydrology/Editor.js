var Editor = function () {

    var SIGNALS = signals;
    this.signals = {
        windowResize: new SIGNALS.Signal(),

        projectChanged: new SIGNALS.Signal(),
        projectInitialized: new SIGNALS.Signal(),

        inputTypeChanged: new SIGNALS.Signal(),

        propertyChanged: new SIGNALS.Signal(),

        layerChanged: new SIGNALS.Signal(),
        rowChanged: new SIGNALS.Signal(),
        columnChanged: new SIGNALS.Signal(),

        viewLayer: new SIGNALS.Signal(),
        viewRow: new SIGNALS.Signal(),
        viewColumn: new SIGNALS.Signal(),


        editGrid: new SIGNALS.Signal(),
        resetEditGrid: new SIGNALS.Signal()

    };

    this.gridHelper = new GridHelper();
    this.zoneHelper = new ZoneHelper();
    this.systemStatus = new SystemStatus();

};
