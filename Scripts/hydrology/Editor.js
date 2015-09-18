var Editor = function () {

    var SIGNALS = signals;
    this.signals = {
        windowResize: new SIGNALS.Signal(),
        propertyChanged: new SIGNALS.Signal(),
        projectChanged: new SIGNALS.Signal(),
        layerChanged: new SIGNALS.Signal()
    };

    this.gridHelper = new GridHelper();

}
