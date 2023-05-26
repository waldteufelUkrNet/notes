##### Origami

Пакунок дозволяє створювати довільні групи вкладок і надає зручну по них
навігацію.


###### Меню Origami

View ▶ Origami
Preferences ▶ Package Settings ▶ Origami
Context ▶ Origami


###### Налаштування Origami

saved_layouts                масив збережених макетів (команда "Origami: Save
-                             Current Layout")

create_new_pane_if_necessary створити нову групу вкладок, якщо її нема, але була
                             викликана команда навігації в її сторону
                             true

auto_zoom_on_focus           автомтичний зум активної панелі, boolean або число
                             від 0 до 1
                             false

auto_close_empty_panes       автоматичне закриття групи вкладок,
                             коли закривається остання вкладка 
                             false

destroy_empty_panes          видаляти не використовувані групи вкладок при
                             втраті фокусу
                             false


###### Команди Origami

travel_to_pane                 Origami: Focus on Pane Above/Below/Left/Right
                               ctrl+k, up/down/left/right

carry_file_to_pane             Origami: Move File to Pane Above/Below/Left/Right
                               ctrl+k, shift+up/down/left/right

clone_file_to_pane             Origami: Clone File to Pane Above/Below/Left/Right
                               ctrl+k, alt+up/down/left/right

create_pane                    Origami: Create Pane Above/Below/Left/Right
                               Origami: Create and Focus Pane Above/Below/Left/Right
                               ctrl+k, ctrl+up/down/left/right

pull_file_from_pane            Origami: Pull File from Pane Above/Below/Left/Right

destroy_pane                   Origami: Destroy Pane Above/Below/Left/Right
                               ctrl+k, ctrl+shift+up/down/left/right

create_pane_with_file          Origami: Create Pane with File Above/Below/Left/Right
                               ctrl+k, ctrl+alt+up/down/left/right

save_layout                    Origami: Save Current Layout

restore_layout                 Origami: Restore Saved Layout

remove_layout                  Origami: Remove Saved Layout

new_window_from_saved_layout   Origami: New Window from Saved Layout

new_window_with_current_layout Origami: New Window with Current Layout

toggle_zoom_pane               Origami: Zoom/Unzoom Current Pane (Toggle Zoom)

zoom_pane                      Origami: Zoom Current Pane

unzoom_pane                    Origami: Unzoom Current Pane