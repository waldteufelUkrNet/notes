##### Table Editor

Пакунок надає інструменти, які дозволяють зручно працювати з таблицями у формі
тексту: навігація по чарункам, додавання/видалення рядків/колонок, вирівнювання,
переміщення рядків/колонок, розбиття чарунок, об'єднання рядків тощо. Має добре
написаний файл readme. Більше не підтримується розробником.


###### Меню Table Editor

Preferences ▶ Package Settings ▶ Table Editor


###### Команди Table Editor

table_editor_align                      Re-align the table without change the
                                        current table field. Move cursor to
                                        begin of the current table field.
                                        ctrl+shift+a

table_editor_csv_to_table               Convert selected CSV region into table
                                        ctrl+k, |

table_editor_delete_column              Видалити поточну колонку
                                        alt+shift+left

table_editor_disable_for_current_syntax Table Editor: Disable for current syntax

table_editor_disable_for_current_view   Table Editor: Disable 'align_number_right' for current view
                                        args: {"prop": "table_editor_align_number_right"}

table_editor_disable_for_current_view   Table Editor: Disable 'detect_header' for current view 
                                        args: {"prop": "table_editor_detect_header"}

table_editor_disable_for_current_view   Table Editor: Disable 'keep_space_left' for current view 
                                        args: {"prop": "table_editor_keep_space_left"}

table_editor_disable_for_current_view   Table Editor: Disable for current view
                                        args: {"prop": "enable_table_editor"}

table_editor_enable_for_current_syntax  Table Editor: Enable for current syntax
                                        вмикає додаток для певного синтаксису

table_editor_enable_for_current_view    Table Editor: Enable 'keep_space_left' for current view 
                                        args: {"prop": "table_editor_keep_space_left"}

table_editor_enable_for_current_view    Table Editor: Enable 'align_number_right' for current view
                                        args: {"prop": "table_editor_align_number_right"}

table_editor_enable_for_current_view    Table Editor: Enable 'detect_header' for current view
                                        args: {"prop": "table_editor_detect_header"}

table_editor_enable_for_current_view    Table Editor: Enable for current view
                                        вмикає додаток для певного вікна
                                        args: {"prop": "enable_table_editor}

table_editor_film                       Table Editor: Show demo film in new scratch view
                                        показує перебіг самотестування у новому
                                        вікні

table_editor_hline_and_move             Insert a horizontal line below current
                                        row, and move the cursor into the row
                                        below that line. Doesn't make sense and
                                        doesn't supported for Textile syntaxes
                                        ctrl+k, enter

table_editor_insert_column              Вставити пусту колонку ліворуч від
                                        курсора
                                        alt+shift+right

table_editor_insert_double_hline        Insert double horizontal line below
                                        current row. Doesn't make sense and
                                        doesn't supported for Textile syntaxes
                                        ctrl+k, =

table_editor_insert_row                 Встивити порожній рядок над поточним
                                        alt+shift+down

table_editor_insert_single_hline        Insert single horizontal line below
                                        current row. Doesn't make sense and
                                        doesn't supported for Textile syntax
                                        ctrl+k, -

table_editor_join_lines                 Join current row and next row into one
                                        if next row is not hline
                                        ctrl+j

table_editor_kill_row                   Видалити поточний рядок
                                        alt+shift+up

table_editor_move_column_left           Пересунути поточну колонку ліворуч
                                        alt+left

table_editor_move_column_right          Пересунути поточну колонку праворуч
                                        alt+right

table_editor_move_row_down              Перемістити рядок вниз
                                        alt+down

table_editor_move_row_up                Перемістити рядок вгору
                                        alt+up

table_editor_next_field                 Re-align the table, move to the next
                                        field. Creates a new row if necessary. 
                                        tab

table_editor_next_row                   Re-align the table and move down to next
                                        row. Creates a new row if necessary. At
                                        the beginning or end of a line, enter
                                        still does new line.
                                        enter

table_editor_previous_field             Re-align, move to previous field
                                        shift+tab

table_editor_set_syntax                 Table Editor: Set table syntax 'EmacsOrgMode' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "EmacsOrgMode"}

table_editor_set_syntax                 Table Editor: Set table syntax 'MultiMarkdown' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "MultiMarkdown"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Pandoc' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Pandoc"}

table_editor_set_syntax                 Table Editor: Set table syntax 'reStructuredText' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "reStructuredText"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Simple' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Simple"}

table_editor_set_syntax                 Table Editor: Set table syntax 'Textile' for current view 
                                        встановити синтаксис для поточного вікна
                                        args: {"syntax": "Textile"}

table_editor_split_column_down          Split rest of cell down from current
                                        cursor position, insert new line bellow
                                        if current row is last row in the table
                                        or if next line is hline
                                        alt+enter


###### Клавіатурні скорочення

**ctrl+shift+a**

        Re-align the table without change the current table field. Move cursor
        to begin of the current table field.

**tab**

        Re-align the table, move to the next field. Creates a new row if
        necessary. 

**shift+tab**

        Re-align, move to previous field.

**enter**

        Re-align the table and move down to next row. Creates a new row if
        necessary.
        At the beginning or end of a line, enter still does new line.

**alt+left**

        Move the current column left.

**alt+right**

        Move the current column right.

**alt+shift+left**

        Kill the current column.

**alt+shift+right**

        Insert a new column to the left of the cursor position.

**alt+shift+up**

        Kill the current row or horizontal line.

**alt+shift+down**

        Insert a new row above the current row. 

**alt+up**

        Move current row up

**alt+down**

        Move current row down

**ctrl+k, -**

        Insert single horizontal line below current row. 
        Doesn't make sense and doesn't supported for Textile syntax

**ctrl+k, =**

        Insert double horizontal line below current row. 
        Doesn't make sense and doesn't supported for Textile syntaxes


**ctrl+k, enter**

        Insert a horizontal line below current row, and move the cursor into the
        row below that line. 
        Doesn't make sense and doesn't supported for Textile syntaxes


**ctrl+k, |**

        Convert selected CSV region into table

**alt+enter**
    
        Split rest of cell down from current cursor position,
        insert new line bellow if current row is last row in the table or if
        next line is hline

 **ctrl+j**
        
        Join current row and next row into one if next row is not hline
