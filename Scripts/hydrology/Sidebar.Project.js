// 侧边栏项目
Sidebar.Project = function (editor) {

    var signals = editor.signals;

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
        editor.projectId = this.getValue();
        signals.projectChanged.dispatch(editor.projectId);
    }

    return container;
};

