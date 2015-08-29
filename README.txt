2015-08-27
    搭建基本的水文框架:
    1. hydrologyModeling/main.html - 水文主页面，新建编辑器并加入菜单栏，侧边栏，工具条，视图窗口。
    2. Scripts/hydrology文件夹下包含水文相关的js
        Editor.js - 总编辑器包含以下四个部分：
            Menubar.js - 菜单栏
            Sidebar.js - 侧边栏
            Toolbar.js - 工具条
            Viewport.js - 视图窗口
    3. Scripts/libs文件夹下包含各种js库
    4. Styles文件夹下包含样式表
2015-08-28
    1. 改进基本的水文框架:
        添加ui.editor.js和ui.editor.factory.js，
        EditorUI负责创建网页界面的基本元素（支持自定义），
        EditorUIFactory工厂类负责组合基本元素，创建界面组件。
    2. 添加Sidebar.Properties.js，负责物性输入部分
2015-08-29
    1. 添加Config.js, 配置程序中的字符串，样式等
