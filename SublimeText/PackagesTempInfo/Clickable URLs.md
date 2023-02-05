##### Clickable URLs

У Sublime в контекстному меню уже є пункт меню Open <url>, який викликає
системну команду open_context_url, на яку можна додати комбінацію клавіш. Якщо
цього достатньо, пакунок не потрібен. Проте пакунок як мінімум підсвічує
посилання в тексті і дає можливість вибрати браузер для відкриття посилання.

Плагін автоматично вимкнеться, якщо у документі 200+ посилань. Цей ліміт можна
змінити у налаштуваннях.


###### Меню Clickable URLs

Preferences ▶ Package Settings ▶ Clickable URLs


###### Налаштування Clickable URLs

max_url_limit          кількість url в документі, при яких пакунок вимикається
                       200

clickable_urls_browser браузер, який відкриє посилання. Значення - одне на вибір
                       зі списку https://docs.python.org/2/library/webbrowser.html#webbrowser.register
                       Якщо у Windows браузер не спрацьовує, потрібно прописати
                       повний шлях до exe-файла:

```json
{
    "clickable_urls_browser": "\"c:\\program files\\mozilla firefox\\firefox.exe\" %s &"
}
```


###### Команди Clickable URLs

open_url_under_cursor Open URL under cursor
                      Ctrl+Alt+Enter
                      відкриває в браузері url, на якому знаходиться курсор

open_all_urls         Open all URLs
                      відкриває усі url, які є в документі