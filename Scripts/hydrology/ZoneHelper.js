var ZoneHelper = function () {
    this.zones = [];
    this.selectedZone = {};
    this.startIndex = 0;
};

ZoneHelper.prototype.emit = function () {

    var zonesJson = $.toJSON(this.zones);
    console.log(zonesJson);
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: '',
        data: { 'zonesJson': zonesJson },
        dataType: 'json',
        success: function () {

        }
    });

}

ZoneHelper.prototype.collectData = function (table) {
    var i, j;
    for (i = this.startIndex; i < table.rowCount; i++) {
        var row = table.getRowByIndex(i);
        var zone = {};
        for (j = 0; j < table.zoneKeys.length; j++) {
            zone[table.zoneKeys[j]] = row.getElement(j).getValue();
        }
        this.zones.push(zone);
    }
}
