// 下侧工具栏
var Toolbar = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;
    var string = Config.Toolbar.String;

    // UI
    var container = new EditorUI.Panel();

    // 层号,行号,列号
    var layerText = new EditorUI.Text(status.layer);
    var rowText = new EditorUI.Text(status.row);
    var columnText = new EditorUI.Text(status.column);

    container.add(new EditorUI.Text(string.layer + ':'));
    container.add(layerText);

    container.add(new EditorUI.Text(string.row + ':'));
    container.add(rowText);

    container.add(new EditorUI.Text(string.column + ':'));
    container.add(columnText);

    // x,y,z坐标
    var xText = new EditorUI.Text('');
    var yText = new EditorUI.Text('');
    var zText = new EditorUI.Text('');
    container.add(new EditorUI.Text(string.x + ':'));
    container.add(xText);

    container.add(new EditorUI.Text(string.y + ':'));
    container.add(yText);

    container.add(new EditorUI.Text(string.z + ':'));
    container.add(zText);


    // handle signals
    signals.layerChanged.add(function (layer) {
        layerText.setValue(layer);
    });

    signals.rowChanged.add(function (row) {
        rowText.setValue(row);
    });

    signals.columnChanged.add(function(column){
        columnText.setValue(column);
    });


    return container;
};