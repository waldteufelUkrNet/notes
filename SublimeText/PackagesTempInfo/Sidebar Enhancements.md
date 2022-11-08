##### Sidebar Enhancements

###### Меню Sidebar Enhancements

Щоб позбутися стандартних елементів меню Sublime Text, потрібно створити два
порожніх файли в Preferences ▶ Browse Packages:

  Default/Side Bar Mount Point.sublime-menu
  Default/Side Bar.sublime-menu


File ▶ Save as Admin

Preferences ▶ Package Settings ▶ Side Bar

Tab Context ▶ Locate (locate_in_sidebar)

Side Bar Context ▶ New File… (side_bar_new_file)
                   New Folder… (side_bar_new_directory)
                   Save Views (side_bar_folder_save_views)
                   Close Views (side_bar_folder_close_views)
                   Close Other Views(side_bar_folder_close_other_views)
                   Edit (side_bar_edit)
                   Edit to Right (side_bar_edit_to_right)
                   Open / Run (side_bar_open)
                   Open In Browser ▶ Default (side_bar_open_in_browser)
                                     Firefox (side_bar_open_in_browser)
                                     Firefox Developer Edition
                                     Chromium
                                     Chrome
                                     Canary
                                     Opera
                                     Safari
                                     Internet Explorer
                                     Edge
                                     Open In All Browsers (side_bar_open_browsers)
                   Open In New Window (side_bar_open_in_new_window)
                   Open With Finder (side_bar_open_with_finder)
                   Open With ▶ Edit Applications… (side_bar_files_open_with_edit_applications)
                   Reveal (side_bar_reveal)
                   Find & Replace… (side_bar_find_in_selected)
                   Find Files Named… (side_bar_find_files_path_containing)
                   Find Advanced ▶ In Parent Folder… (side_bar_find_in_parent)
                                   In Project… (side_bar_find_in_project)
                                   In Project Folder… (side_bar_find_in_project_folder)
                                   In Project Folders… (side_bar_find_in_project_folders)
                                   In Files With Extention \*.ext (side_bar_find_in_files_with_extension)
                                   In Paths Containing… (side_bar_find_files_path_containing)
                                   Mass Rename Selection… (side_bar_mass_rename)
                   Cut (side_bar_cut)
                   Copy (side_bar_copy)
                   Copy Name (side_bar_copy_name)
                   Copy Path (side_bar_copy_path_relative_from_project_encoded)
                   Copy Path (Windows) (side_bar_copy_path_absolute_from_project_encoded_windows)
                   Copy Dir Path (side_bar_copy_dir_path)
                   Copy as Text ▶ Relative Path To Last Selected View (side_bar_copy_path_relative_to_last_selected_view)
                                  Relative Path From View Encoded (side_bar_copy_path_relative_from_view_encoded)
                                  Relative Path From View (side_bar_copy_path_relative_from_view)
                                  Relative Path From Project Encoded (side_bar_copy_path_relative_from_project_encoded)
                                  Relative Path From Project (side_bar_copy_path_relative_from_project)
                                  Absolute Path From Project Encoded (side_bar_copy_path_absolute_from_project_encoded)
                                  Absolute Path From Project (side_bar_copy_path_absolute_from_project)
                                  Path as URI (side_bar_copy_path_encoded)
                                  Path (side_bar_copy_path)
                                  Path Quoted (side_bar_copy_path_quoted)
                                  Name Encoded (side_bar_copy_name_encoded)
                                  URL (side_bar_copy_url)
                                  URL Decoded (side_bar_copy_url_decoded)
                                  Tag a (side_bar_copy_tag_ahref)
                                  Tag img (side_bar_copy_tag_img)
                                  Tag script (side_bar_copy_tag_script)
                                  Tag style (side_bar_copy_tag_style)
                                  Project Folders (side_bar_copy_project_directories)
                                  Content as UTF-8 (side_bar_copy_content_utf8)
                                  Content as Data URI (side_bar_copy_content_base64)
                   Paste (side_bar_paste)
                   Paste in Parent (side_bar_paste)
                   Duplicate… (side_bar_duplicate)
                   Rename… (side_bar_rename)
                   Move… (side_bar_move)
                   Delete (side_bar_delete)
                   Empty (side_bar_empty)
                   Refresh (refresh_folder_list)
                   Project ▶ Edit Project (side_bar_project_open_file)
                             Edit Preview URLs (side_bar_preview_edit_urls)",
                             Add Folder to Project… (prompt_add_folder)
                             Promote as Project Folder (side_bar_project_item_add)
                             Hide From Sidebar (In theory exclude from project) (side_bar_project_item_exclude)
                             Exclude From Index (Make As Binary) (side_bar_project_item_exclude_from_index)
                             Remove Folder from Project (side_bar_project_item_remove_folder)
                  Promote (side_bar_project_item_add)
                  Unpromote (side_bar_project_item_remove_folder)
                  Give 20 (side_bar_donate)


###### Налаштування Sidebar Enhancements

statusbar_modified_time              ???
                                     false

statusbar_modified_time_format       ???
                                     "%A %b %d %H:%M:%S %Y"

statusbar_modified_time_locale       ???
                                     ""

statusbar_file_size                  ???
                                     false

close_affected_buffers_when_deleting_even_if_dirty ???
                                                   false

hide_open_with_entries_when_there_are_no_applicable ???
                                                    false

confirm_before_deleting              ???
                                     true

confirm_before_permanently_deleting  ???
                                     true

new_files_relative_to_project_root   ???
                                     false

new_folders_relative_to_project_root ???
                                     false

disabled_menuitem_edit               ???
                                     false

disabled_menuitem_edit_to_right      ???
                                     false

disabled_menuitem_open_run           ???
                                     false

disabled_menuitem_open_in_browser    ???
                                     false

disabled_menuitem_open_in_new_window ???
                                     false

disabled_menuitem_find_in_project    ???
                                     false

disabled_menuitem_copy_name          ???
                                     false

disabled_menuitem_copy_path          ???
                                     false

disabled_menuitem_copy_path_windows  ???
                                     true

disabled_menuitem_copy_dir_path      ???
                                     true

disabled_menuitem_paste_in_parent    ???
                                     false

disabled_menuitem_empty              ???
                                     true

disabled_menuitem_folder_save        ???
                                     false

disabled_menuitem_folder_close       ???
                                     false

default_browser                      браузер за замовчуванням, у якому
                                     відкриватимуться файли (одне значення з:
                                     firefox, firefox-developer-edition, chrome,
                                     canary, chromium, opera, safari, ie, edge)
                                     ""

open_all_browsers                    масив значень зі списку:firefox,
                                     firefox-developer-edition, chrome, canary,
                                     chromium, opera, safari, ie, edge
                                     [ "firefox", "firefox-developer-edition",
                                     "chrome", "opera", "safari", "ie", "edge"]

portable_browser                     повний шлях до виконуваного файлу, напр.
                                     "C:/Program Files (x86)/Nightly/firefox.exe"
                                     ""

disable_send_to_trash                ???
                                     false

use_powershell                       ???
                                     true

use_command                          ???
                                     ""

copy_path_absolute_from_project_includes_line_number ???
                                                     false

find_and_replace_discards_previous_search            ???
                                                     false

find_and_replace_opens_in_new_view                   ???
                                                     true

i_donated_to_sidebar_enhancements_developer видалити попрошайку, ключ або false
                                            false


###### Команди Sidebar Enhancements

aaaaa_side_bar                aaaaa_side_bar

reveal_in_side_bar            File: Locate
                              підсвітити файл у бічній панелі (якщопанель
                              закрита, команда її відкриє)

side_bar_copy                 ???

side_bar_copy_content_base64  ???

side_bar_copy_content_utf8    ???

side_bar_copy_dir_path        ???

side_bar_copy_name            File: Copy Name
                              скопіювати ім'я файлу із розширенням

side_bar_copy_name_encoded    File: Copy Name Encoded
                              скопіювати файл у форматі придатному для URL (усі
                              пробіли і не латинські літери замінюються їх
                              UTF-8-кодами, напр. пробіл - %20)

side_bar_copy_path            File: Copy Path
                              скопіювати шлях до файлу

side_bar_copy_path_absolute_from_project File: Copy Path Absolute To Project
                                         скопіювати абсолютний шлях від теки
                                         проекту

side_bar_copy_path_absolute_from_project_encoded File: Copy Path Absolute To Project Encoded
                                                 скопіювати абсолютний шлях від
                                                 теки проекту в URL-подібному
                                                 форматі

side_bar_copy_path_absolute_from_project_encoded_windows File: Copy Path (Windows)
                                                         скопіювати шлях до
                                                         файлу відносно проекту
                                                         (для Windows)

side_bar_copy_path_encoded    File: Copy Path as URI
                              скопіювати шлях до файлу в URL-подібному форматі

side_bar_copy_path_quoted     File: Copy Path Quoted
                              скопіювати шлях до файлу і огорнути його в лапки

side_bar_copy_path_relative_from_project File: Copy Relative Path To Project
                                         скопіювати відносний шлях від теки
                                         проекту

side_bar_copy_path_relative_from_project_encoded ???

side_bar_copy_path_relative_from_view ???

side_bar_copy_path_relative_from_view_encoded ???

side_bar_copy_path_relative_to_last_selected_view File: Copy Path Relative To Last Selected View
                                                  скопіювати відносний шлях
                                                  відносно останнього активного
                                                  вікна

side_bar_copy_project_directories Project Folders
                                  скопіювати шлях до кореневої теки проекту

side_bar_copy_tag_ahref       File: Copy as Tag a
                              копіює шлях до файлу і огортає його в тег
                              посилання

side_bar_copy_tag_script      File: Copy as Tag script
                              копіює шлях до js-файлу і огортає його в тег
                              скрипта

side_bar_copy_tag_style       File: Copy as Tag style
                              копіює шлях до css-файлу і огортає його в тег
                              style

side_bar_copy_url             File: Copy URL
                              ???

side_bar_copy_url_decoded     ???

side_bar_cut                  ???

side_bar_delete               File: Delete
                              видалити файл

side_bar_donate               ???

side_bar_duplicate            File: Duplicate
                              зробити копію файла

side_bar_edit                 ???

side_bar_edit_to_right        ???

side_bar_empty                ???

side_bar_files_open_with_edit_applications ???

side_bar_find_files_path_containing File: Search Files
                                    відкриває вкладку для пошуку тексту у шляхах
                                    проекту

side_bar_find_in_files_with_extension ???

side_bar_find_in_parent       ???

side_bar_find_in_project      ???

side_bar_find_in_project_folder ???

side_bar_find_in_project_folders ???

side_bar_find_in_selected     ???

side_bar_folder_close_other_views ???

side_bar_folder_close_views   ???

side_bar_folder_save_views    ???

side_bar_mass_rename          ???

side_bar_move                 File: Move
                              перемістити файл

side_bar_new_directory        File: New Folder Relative to Current View
                              створити теку відносно поточної області перегляду

side_bar_new_directory2       File: New Folder Relative to Project Root
                              створити теку відносно кореневої теки проекту

side_bar_new_file             File: New File Relative to Current View
                              створити файл відносно поточної області перегляду

side_bar_new_file2            File: New File Relative to Project Root
                              створити файл відносно кореневої теки проекту

side_bar_open                 ???

side_bar_open_browsers        ???

side_bar_open_in_browser      File: Open In Browser - Testing Server
                              відкриває файл у дефолтному браузері
                              args: {
                                "paths": [],
                                "type": "testing"
                              }

side_bar_open_in_browser      File: Open In Browser - Production Server
                              відкриває файл у дефолтному браузері
                              args: {
                                "paths": [],
                                "type": "production"
                              }

side_bar_open_in_new_window   ???

side_bar_open_with_finder     ???

side_bar_paste                ???

side_bar_preview_edit_urls    ???

side_bar_project_item_add     ???

side_bar_project_item_exclude ???

side_bar_project_item_exclude_from_index ???

side_bar_project_item_remove_folder ???

side_bar_project_open_file    Project: Edit ???

side_bar_rename               File: Rename
                              перейменувати файл

side_bar_reveal               File: Reveal
                              відкрити теку, яка містить файл, через провідник
                              операційної системи