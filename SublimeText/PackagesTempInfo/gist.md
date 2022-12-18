##### gist

Пакунок надає інтерфейс до збереження і використання шматків коду на GitHub (так
звані gist'и).

На сайті packagecontrol.io пакунок має назву gist (автор condemil), у цього
автора є ще один пакунок з тим самим функціоналом, але застарілий - Gist.


###### Меню gist

Tools ▶ Gist
Preferences ▶ Package Settings ▶ Gist
Context ▶ Create Public Gist…
Context ▶ Create Private Gist…


###### Налаштування gist

setting_name пояснення налаштування
               варіант 1: пояснення
                 lorem
               варіант 2: пояснення
                 lorem
             type or default value

token               токен доступу до API gist'ів, робиться на сайті github.com
                    по шляху: Account ▶ Settings ▶ Developer Settings ▶ Personal
                    Access Tokens
                    ""

include_orgs        Show GitHub organizations
                    []

include_users       Show GitHub users
                    []

show_authors        Show the authors of Gists
                    false

prefer_filename     Prefer first file name instead of description in Open Gist
                    menu
                    false

https_proxy         проксі сервер у форматі "http://user:pass@proxy:port"
                    ""

api_url             Github URL
                    "https://api.github.com"

max_gists           максимальна кількість гістів, які додаток може запросити з
                    сервера. Не може бути більше 100 через обмеження GitHub API
                    100

use_starred         Only use starred gists
                    false

supress_save_dialog Disable the "save file..." dialog when closing a Gist
                    true

update_on_save      Update the Gist upon saving the file, suppressing the
                    filename dialog
                    true

gist_prefix         фільтрування гістів для показу, видні тільки ті, що
                    починаються з префікса
                    ""

gist_tag            Limit to gists with specific tag (#tag)
                    ""


###### Команди gist

gist                    Gist: Create Public Gist
                        ctrl+k, ctrl+i

gist_add_file           Gist: Add File to Gist
                        ctrl+k, ctrl+]

gist_change_description Gist: Change Gist Description

gist_copy_url           Gist: Copy Gist URL

gist_delete             Gist: Delete Gist

gist_delete_file        Gist: Delete Gist File

gist_gitio              Gist: Shorten a GitHub.com URL
                        ctrl+k, ctrl+g

gist_list               Gist: Open Gist
                        ctrl+k, ctrl+o

gist_open_browser       Gist: Open Gist in Browser

gist_private            Gist: Create Private Gist
                        ctrl+k, ctrl+p

gist_rename_file        Gist: Rename File

gist_update_file        Gist: Update File
                        ctrl+k, ctrl+s

insert_gist_embed_list  Gist: Embed as script

insert_gist_list        Gist: Insert Gist
                        ctrl+k, ctrl+[