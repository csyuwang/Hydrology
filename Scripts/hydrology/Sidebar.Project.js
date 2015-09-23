// 侧边栏项目
Sidebar.Project = function (editor) {

    var signals = editor.signals;
    var status = editor.systemStatus;

    var string = Config.Project.String;
    // 设置容器(标题等等)
    var container = new EditorUI.CollapsiblePanel();
    container.setCollapsed(true);
    container.addStatic(new EditorUI.Text(string.title));
    // 获取项目信息并初始化选择框
    $.ajax({
        type: 'GET',
        url: '../getdata/getProjects.json',
        dataType: 'json',
        success: function (projects) {
            var options = {'0':'请选择'};
            $.each(projects, function (index,project) {
                options[project.id] = project.name;
            });
            // 设置项目选择框
            var projectSelect = new EditorUI.Select().setOptions(options).onChange(updateProject);
            container.add(new EditorUI.Text(string.project));
            container.add(projectSelect);
            container.add(new EditorUI.Break());
        }
    });

    // 切换项目
    function updateProject() {
        status.projectId = this.getValue();
        signals.projectChanged.dispatch(status.projectId);
    }

    // 获得项目信息
    function getProjectInfo(projectId) {
        $.ajax({
            type: 'GET',
            contentType: 'application/json',
            url: '../getdata/getProjectInfo.json',
            data: { 'projectId': projectId },
            dataType: 'json',
            success: function (projectInfo) {
                editor.gridHelper.X_MIN = projectInfo.x_min;
                editor.gridHelper.Y_MIN = projectInfo.y_min;
                editor.gridHelper.Z_MIN = projectInfo.z_min;
                editor.gridHelper.X_MAX = projectInfo.x_max;
                editor.gridHelper.Y_MAX = projectInfo.y_max;
                editor.gridHelper.Z_MAX = projectInfo.z_max;
                editor.gridHelper.layerCount = projectInfo.layerCount;
                editor.gridHelper.rowCount = projectInfo.rowCount;
                editor.gridHelper.columnCount = projectInfo.columnCount;
                signals.projectInitialized.dispatch();
            }
        });
    }

    signals.projectChanged.add( getProjectInfo);

    return container;
};

