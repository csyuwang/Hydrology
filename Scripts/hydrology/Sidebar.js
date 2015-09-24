var Sidebar = function (editor) {
    var container = new EditorUI.Panel();
    container.add(new Sidebar.Project(editor));
    container.add(new Sidebar.View(editor));
    container.add(new Sidebar.Input(editor));
    container.add(new Sidebar.Properties(editor));
    container.add(new Sidebar.Grid(editor));
    return container;
};