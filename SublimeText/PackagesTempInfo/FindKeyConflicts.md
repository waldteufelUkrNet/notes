##### FindKeyConflicts

###### Меню FindKeyConflicts

Preferences ▶ Package Settings ▶ FindKeyConflicts


###### Налаштування FindKeyConflicts

debug                      увімкнути режим відладки
                           false

display_internal_conflicts чи відображати внутрішні конфлікти пакунків
                           true

ignore_patterns            список ігнорованих патернів
                           []

ignore_single_key          визначає, чи ігноруються команди з однієї клавіші
                           false

ignored_packages           масив пакунків, які не паревіряються на конфлікти.
                           Вимкнені пакунки (ignored_packages в налаштуваннях)
                           не перевіряються по дефолту
                           []


###### Команди FindKeyConflicts

find_all_key_conflicts            FindKeyConflicts: All Conflicts
                                  вивести усі конфлікти

find_key_conflicts                FindKeyConflicts: (Direct) Conflicts to Buffer
                                  args: {"output": "buffer"}
                                  виводить прямі конфлікти в додаткову вкладку

find_key_conflicts                FindKeyConflicts: (Direct) Conflicts to Quick
                                  Panel
                                  виводить прямі конфлікти у швидку панель

find_key_conflicts_command_search FindKeyConflicts: Command Search
                                  виводить на панель список пакунків, при виборі
                                  пакунку виводить його конфлікти з іншими
                                  пакунками

find_key_conflicts_with_package   FindKeyConflicts: Multiple Package Conflicts
                                  дозволяє вибрати кілька пакунків і вивести
                                  інфу про їхні конфлікти
                                  args: {"multiple": true}

find_key_conflicts_with_package   FindKeyConflicts: Single Package Conflicts
                                  виводить інфу по конфліктах одного пакунку

find_key_mappings                 FindKeyConflicts: All Key Maps to Buffer
                                  args: {"output": "buffer"}
                                  виводить інфу по всіх клавіатурних скороченнях
                                  в окрему вкладку

find_key_mappings                 FindKeyConflicts: All Key Maps to Quick Panel
                                  виводить інфу по всіх клавіатурних скороченнях
                                  у швидку панель

find_overlap_conflicts            FindKeyConflicts: Overlap Conflicts
                                  показує конфлікти з "частковим перекриттям"
                                  комбінацій, напр ["ctrl+t"] і ["ctrl+t", "t"]