##### Nodejs

Пакунок здатен запускати системи збірок. Для цього при відкритому js-файлі
потрібно вибрати систему (Tools ▶ Build System) і потім її запустити через
комбінацію клавіш Ctrl+B.

Пакунок має великий набір спіпетів, для їх використання потрібно набрати "node"
і натиснути Ctrl+Space.

Для автозавершення потрібно набрати частинку коду (напр. "fs") і натиснути
Ctrl+Space.


###### Меню Nodejs

Tools ▶ Nodejs
Preferences ▶ Package Settings ▶ Nodejs
Context ▶ Nodejs


###### Налаштування Nodejs

save_first        save before running commands
                  true

node_command      if present, use this command instead of plain "node"  e.g.
                  "/usr/bin/node" or "C:\bin\node.exe"
                  false

npm_command       if present, use this command instead of plain "npm"
                  false

node_path         as 'NODE_PATH' environment variable for node runtime
                  false

expert_mode       false

output_to_new_tab false


###### Команди Nodejs


node_run            Nodejs::Run::Current File
                    alt+r

node_run_arguments  Nodejs::Run::Current File + Arguments
                    ctrl+alt+r

node_drun           Nodejs::Debug::Run::Current File
                    alt+d

node_drun_arguments Nodejs::Debug::Run::Current File + Arguments
                    ctrl+alt+d

node_npm            Nodejs::NPM::Command

node_npm_install    Nodejs::NPM::Install

node_npm_uninstall  Nodejs::NPM::Uninstall

node_npm_update     Nodejs::NPM::Update

node_npm_list       Nodejs::NPM::List

node_npm_publish    Nodejs::NPM::Publish

node_npm_search     Nodejs::NPM::Search

node_builddocs      Nodejs::Build Completions

node_uglify         Nodejs::UglifyJS

edit_settings       Nodejs::User File Settings
                    args: {
                      "base_file": "${packages}/Nodejs/Nodejs.sublime-settings",
                      "default": "// Settings in here override those in \"Nodejs/Nodejs.sublime-settings\",\n// and are overridden in turn by syntax-specific settings.\n{\n\t$0\n}\n"
                    }

edit_settings       Nodejs::User Key Bindings
                    args: {
                      "base_file": "${packages}/Nodejs/Default ($platform).sublime-keymap",
                      "default": "// Settings in here override those in \"Nodejs/Default.sublime-keymap\"\n{\n\t$0\n}\n"
                    }