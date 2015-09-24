// 侧边栏物性输入
Sidebar.Properties = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;
    var zoneHelper = editor.zoneHelper;

    var string = Config.Properties.String;
    var stringArray = Config.Properties.StringArray;
    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setDisplay( 'none' );
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    // 设置导图checkbox
    var isImportMapCheckBox = new EditorUI.Checkbox().onChange(isImportMap);
    this.isImportMapCheckBox = isImportMapCheckBox;
    container.add(this.isImportMapCheckBox);
    container.add(new EditorUI.Text(string.isImportMap));
    container.add(new EditorUI.Break());
    // 设置物性选择框
    var propertySelect = new EditorUI.Select().setOptions(stringArray.propertyOptions).onChange(updateProperty);
    this.propertySelect = propertySelect;
    container.add(new EditorUI.Text(string.propertyType));
    container.add(this.propertySelect);
    container.add(new EditorUI.Break());
    // 设置层选择框
    var layerSelect = new EditorUI.Select().setOptions(stringArray.layerOptions).onChange(updateLayer);
    this.layerSelect = layerSelect;
    container.add(new EditorUI.Text(string.layer));
    container.add(this.layerSelect);
    container.add(new EditorUI.Break());
    // 设置zone表格
    container.add(new EditorUI.Text(string.zone));
    container.add(new EditorUI.Break());
    // 按钮组
    container.add(new EditorUI.Button(string.add).onClick(addZone));
    container.add(new EditorUI.Button(string.remove).onClick(removeZone));
    container.add(new EditorUI.Button(string.delete).onClick(deleteZone));
    container.add(new EditorUI.Button(string.save).onClick(saveZone));
    // 表格
    var zoneTable = new EditorUI.Table(stringArray.tableHeaders,stringArray.zoneKeys);
    this.zoneTable = zoneTable;
    container.add(this.zoneTable);

    // 是否导图
    function isImportMap() {
        alert(this.getValue());
    }

    // 切换物性
    function updateProperty() {
        status.propertyType = this.getValue();
        signals.propertyChanged.dispatch();
    }

    // 切换层
    function updateLayer() {
        status.layer = this.getValue();
        signals.layerChanged.dispatch();
    }

    function addZone(){
        var nameText = new EditorUI.ContentEditableText('newZone');
        var colorInput = new EditorUI.ColorInput().enable();
        var paramsText = new EditorUI.ContentEditableText('0,0,0');
        var row = new EditorUI.TableRow(zoneTable.rowCount,[new EditorUI.Checkbox(),nameText,colorInput,paramsText]).onClick(zoneSelected);
        zoneTable.addRow(row);
    }
    function removeZone(){
        alert('remove');
    }
    function deleteZone(){
        alert('delete');
    }
    function saveZone(){
        zoneHelper.collectData(zoneTable);
        zoneHelper.emit();
    }

    function zoneSelected() {
        if(this.index == 0) {
            console.log('default');
            return ;
        }
        else{
            console.log(this.index);
        }
    }

    function initZoneTable() {
        zoneTable.clear();
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: '../getdata/getZones.json',
            data: { 'propertyType': status.propertyType , 'projectId': status.projectId},
            dataType: 'json',
            success: function (zones) {
                $.each(zones, function (index,zone) {
                    var nameText = new EditorUI.Text(zone.name);
                    var colorInput = new EditorUI.ColorInput(zone.color).disable();
                    var paramsText = new EditorUI.Text(zone.params.join());
                    var row = new EditorUI.TableRow(index,[new EditorUI.Checkbox(),nameText,colorInput,paramsText]).onClick(zoneSelected);
                    zoneTable.addRow(row);
                });
                // 记下需要保存的zone的起始index
                zoneHelper.startIndex = zoneTable.rowCount;
            }
        });
    }

    function initLayerSelect() {
        var options = {'0':'请选择'};
        for(var i = 1; i<=editor.gridHelper.layerCount;i++) {
            options[i] = i;
        }
        layerSelect.setOptions(options);
    }

    // handle signals
    // 物性改变时初始化zoneTable
    signals.propertyChanged.add( initZoneTable );
    // 项目改变时初始化layerSelect
    signals.projectInitialized.add( initLayerSelect );
    // 输入类型改变为物性时显示collapsiblePanel
    signals.inputTypeChanged.add(function (inputType) {
        container.setDisplay( 'none' );
        if(inputType == SystemStatus.InputType.PROPERTIES) {
            container.setDisplay( 'block' );
        }
    } );
    
    
    
    return container;
};

