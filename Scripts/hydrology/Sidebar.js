var Sidebar = function (editor) {
    var container = new EditorUI.Panel();
    container.add(new Sidebar.Properties(editor));
    return container;
};