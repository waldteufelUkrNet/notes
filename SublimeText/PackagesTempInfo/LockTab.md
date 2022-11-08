##### LockTab

Для блокування/розблокування вкладки потрібно викликати контекстне меню не на
заголовку вкладки, а на полі, де знаходиться код.


###### Меню LockTab

Preferences ▶ Package Settings ▶ LockTab
Context ▶ Lock Tab
Context ▶ UnLock Tab
Context ▶ Toggle Tab Lock


###### Налаштування LockTab

alert               показувати попап, якщо вкладка заблокована
                    true

focus_on_closed_tab set the focus always on the closed tab (if locked)
                    true

hide_all            приховати усі пункти меню
                    false

locked              масив зі шляхами файлів, які є заблокованими вкладками
                    [ ]

show_toggle         якщо true, видно тільки пункт меню "Toggle Tab Lock", якщо
                    false - будуть видні пункти "Lock Tab" / "UnLock Tab"
                    false


###### Команди LockTab

lock_tab        заблокувати вкладку

unlock_tab      розблокувати вкладку

toggle_tab_lock перемкнути стан вкладки