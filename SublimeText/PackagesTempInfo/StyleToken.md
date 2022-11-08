##### StyleToken

Підтримує до 10 стилів (StyleToken.sublime-settings). За замовчуванням
клавіатурні скорочення має тільки для Windows.


###### Меню StyleToken

Context ▶ Style Token


###### Команди StyleToken

token_style         Style [1-5]
                    підсвічує виділений текст відповідним стилем
                    args:
                      styleIndex: порядковий номер стилю

token_style_clear   Clear All
                    видаляє підсвітку обраного стилю, якщо без аргументів - 
                    видаляє підсвітку усіх стилів
                    args:
                      styleIndex: порядковий номер стилю

token_style_go      Jump to next token
                    переходить до наступного виділеного фрагменту даного стилю,
                    якщо без аргументу - переходить до наступного фрагменту
                    довільного стилю
                    args:
                      styleIndex: порядковий номер стилю

token_style_go_back Jump to prev token
                    переходить до попереднього виділеного фрагменту даного стилю,
                    якщо без аргументу - переходить до попереднього фрагменту
                    довільного стилю
                    args:
                      styleIndex: порядковий номер стилю