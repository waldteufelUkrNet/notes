##### MarkdownEditing

https://sublimetext-markdown.github.io/MarkdownEditing/


###### Меню MarkdownEditing

Preferences ▶ Package Settings ▶ Markdown Editing
Context ▶ MarkdownEditing


###### Налаштування MarkdownEditing

mde.auto_fold_link.enabled              Enable automatic folding of url parts of
                                        inline references or images
                                        true

mde.auto_fold_link.selector             Selector for urls to automatically fold
                                        "( meta.image.inline.metadata.markdown | meta.image.reference.metadata.markdown | meta.link.inline.metadata.markdown | meta.link.reference.metadata.markdown ) - punctuation.definition.metadata"

mde.auto_increment_ordered_list_number  Auto increments ordered list number. Set
                                        to false if you want always "1"
                                        true

mde.auto_match_heading_hashes           If "true", trailing heading hashes are
                                        added or removed automatically,
                                        depending on a view's
                                        "mde.match_heading_hashes" setting value.
                                        Headings are fixed:
                                        a) when hitting enter at the end of a
                                           heading line
                                        b) after loading or before saving a file
                                           if "mde.auto_detect_match_heading_hashes"
                                           is "true".
                                        true

mde.bold_marker_asterisk                If "true" asterisk is used to markup
                                        bold text, underscore otherwise
                                        true

mde.detect_heading_style                auto detect whether to add trailing #'s
                                        to headlines.  If "true"
                                        "mde.match_heading_hashes" is set per
                                        view depending on majority of first 10
                                        headings containing trailing #'s or not.
                                        true

mde.italic_marker_asterisk              If "true" asterisk is used to markup
                                        italic text, underscore otherwise
                                        false

mde.keep_centered                       Always keep current line vertically
                                        centered
                                        false

mde.keymap_disable.fold_section         Fold current section Default keys:
                                        (OSX/Linux/Win) shift+tab
                                        false

mde.keymap_disable.goto_next_heading    Jump to the next heading (any level/same
                                        or higher level) Default keys:
                                        (OSX) super+ctrl/shift+pagedown
                                        (Linux/Win) ctrl+shift(+alt)+pagedown
                                        false

mde.keymap_disable.goto_previous_heading Jump to the previous heading (any level
                                        /same or higher level) Default keys:
                                        (OSX) super+ctrl/shift+pageup
                                        (Linux/Win) ctrl+shift(+alt)+pageup
                                        false

mde.keymap_disable.list_back_links      List pages the link to the current page
                                        false

mde.keymap_disable.make_page_reference  Make page reference
                                        true

mde.keymap_disable.open_home_page       Open the home page
                                        true

mde.keymap_disable.open_journal         Open the journal
                                        true

mde.keymap_disable.open_page            Open the page referenced
                                        false

mde.keymap_disable.reference_jump       Jump between link/image/footnote
                                        reference and definition. Default keys:
                                        (OSX) super+ctrl+shift+l (Linux/Win)
                                        ctrl+alt+g
                                        false

mde.keymap_disable.reference_new_footnote Add a new footnote Default keys:
                                          (OSX/Linux/Win) alt+shift+6
                                          false

mde.keymap_disable.reference_new_inline_image Add a new inline image Default
                                              keys: (OSX/Linux/Win) super+shift+k
                                              false

mde.keymap_disable.reference_new_inline_link Add a new inline link Default keys:
                                             (OSX) super+alt+v
                                             (Linux/Win) ctrl+super+v
                                             false

mde.keymap_disable.reference_new_reference Add a new link Default keys:
                                           (OSX) super+alt+r
                                           (Linux/Win) ctrl+super+r
                                           false

mde.keymap_disable.reference_organize   Reorganize footnotes footnote Default
                                        keys: (OSX) super+ctrl+s
                                        (Linux/Win) alt+shift+s
                                        true

mde.keymap_disable.set_heading_level    Set Heading Level. Default keys:
                                        (OSX/Linux/Win) alt+k, alt+0..9
                                        false

mde.keymap_disable.show_fold_all_sections Open a panel showing all functions
                                          related to folding. Default keys:
                                          (OSX/Linux/Win) ctrl+shift+tab
                                          false

mde.lint                                об'єкт з правилами для перевірки
                                        правопису. Див. файл налаштувань.

mde.list_align_text                     Align list item text at indentation
                                        level. Adds <Tab> after list items
                                        instead of a single <space>.
                                        false

mde.list_indent_auto_switch_bullet      Automatically switches list bullet when
                                        indenting blank list item with <Tab>
                                        true

mde.logging.level                       set log level, valid values: "CRITICAL",
                                        "ERROR", "WARN", "INFO", "DEBUG"
                                        "ERROR"

mde.match_heading_hashes                add trailing #'s to headlines false

mde.ref_organize_sort                   The sorting method used by the Organize
                                        References command. Should be one of:
                                        "reference_order": List in order of
                                          appearance in document
                                        "alphabetical": Alphabetical based on
                                          reference name, sorting numerals
                                          lexagraphically
                                        "numeric": Alphabetical based on
                                          reference name, sorting numeral chunks
                                          numerically
                                        "reference_order"

mde.ref_organize_sort_reverse           те саме, що і mde.ref_organize_sort
                                        false


mde.wikilinks.homepage                  wiki home page
                                        "HomePage"

mde.wikilinks.markdown_extension        wiki file extensions
                                        ".md"

mde.wikilinks.templates                 wiki templates
                                        {"default_page": "templates/PageTemplate.md"}

mde.list_indent_bullets                 List bullets to be used for
                                        automatically switching. In their order.
                                        ["*", "-", "+"]                         


###### Команди MarkdownEditing

mde_select_color_scheme                 MarkdownEditing: Select Color scheme

mde_toggle_centered_line                MarkdownEditing: Toggle Centered Line

mde_markdown_lint                       MarkdownEditing: Markdown Lint

mde_markdown_lint_mdl                   MarkdownEditing: Run markdownlint

mde_match_heading_hashes                MarkdownEditing: Add Closing Heading Hashes
                                        args: { "enabled": true }

mde_match_heading_hashes                MarkdownEditing: Remove Closing Heading Hashes
                                        args: { "enabled": false }

mde_match_heading_hashes                MarkdownEditing: Fix Closing Heading Hashes

mde_fix_underlined_headings             MarkdownEditing: Fix Underlined Headings

mde_convert_underlined_headings_to_atx  MarkdownEditing: Convert Underlined Headings to ATX

mde_change_headings_level               MarkdownEditing: Convert Heading to Text
                                        alt+k, alt+keypad0
                                        alt+k, alt+0
                                        args: { "to": 0 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 1
                                        alt+k, alt+keypad1
                                        alt+k, alt+1
                                        args: { "to": 1 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 2
                                        alt+k, alt+keypad2
                                        alt+k, alt+2
                                        args: { "to": 2 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 3
                                        alt+k, alt+keypad3
                                        alt+k, alt+3
                                        args: { "to": 3 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 4
                                        alt+k, alt+keypad4
                                        alt+k, alt+4
                                        args: { "to": 4 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 5
                                        alt+k, alt+keypad5
                                        alt+k, alt+5
                                        args: { "to": 5 }

mde_change_headings_level               MarkdownEditing: Set Headings Level 6
                                        alt+k, alt+keypad6
                                        alt+k, alt+6
                                        args: { "to": 6 }

mde_change_headings_level               MarkdownEditing: Increase Headings Level
                                        #
                                        shift+alt+.
                                        args: { "by": 1 }

mde_change_headings_level               MarkdownEditing: Decrease Headings Level
                                        backspace
                                        delete
                                        shift+alt+
                                        args: { "by": -1 }

mde_goto_next_heading                   MarkdownEditing: Goto Next Heading (same or higher level)
                                        args: { "same_level": true }
                                        ctrl+shift+alt+pagedown

mde_goto_next_heading                   MarkdownEditing: Goto Next Heading (any level)
                                        args: { "same_level": false }
                                        ctrl+shift+pagedown

mde_goto_previous_heading               MarkdownEditing: Goto Previous Heading (same or higher level)
                                        args: { "same_level": true }
                                        ctrl+shift+alt+pageup

mde_goto_previous_heading               MarkdownEditing: Goto Previous Heading (any level)
                                        args: { "same_level": false }
                                        ctrl+shift+pageup

mde_fold_section                        MarkdownEditing: Fold Current Section
                                        ctrl+shift+[

mde_unfold_section                      MarkdownEditing: Unold Current Section
                                        ctrl+shift+]

mde_fold_all_sections                   MarkdownEditing: Fold Level 1 Sections
                                        args: { "target_level": 1 }
                                        ctrl+k, ctrl+keypad1
                                        ctrl+k, ctrl+1

mde_fold_all_sections                   MarkdownEditing: Fold Level 2 Sections
                                        args: { "target_level": 2 }
                                        ctrl+k, ctrl+keypad2
                                        ctrl+k, ctrl+2

mde_fold_all_sections                   MarkdownEditing: Fold Level 3 Sections
                                        args: { "target_level": 3 }
                                        ctrl+k, ctrl+keypad3
                                        ctrl+k, ctrl+3

mde_fold_all_sections                   MarkdownEditing: Fold Level 4 Sections
                                        args: { "target_level": 4 }
                                        ctrl+k, ctrl+keypad4
                                        ctrl+k, ctrl+4

mde_fold_all_sections                   MarkdownEditing: Fold Level 5 Sections
                                        args: { "target_level": 5 }
                                        ctrl+k, ctrl+keypad5
                                        ctrl+k, ctrl+5

mde_fold_all_sections                   MarkdownEditing: Fold Level 6 Sections
                                        args: { "target_level": 6 }
                                        ctrl+k, ctrl+keypad6
                                        ctrl+k, ctrl+6

mde_fold_all_sections                   MarkdownEditing: Fold All Sections
                                        ctrl+k, ctrl+keypad9
                                        ctrl+k, ctrl+9

mde_unfold_all_sections                 MarkdownEditing: Unfold All Sections
                                        args: { "target_level": 0 }
                                        ctrl+k, ctrl+keypad0
                                        ctrl+k, ctrl+0

mde_fold_links                          MarkdownEditing: Toggle Automatic Link URL Folding

mde_show_fold_all_sections              ???
                                        ctrl+shift+tab

mde_switch_list_bullet_type             MarkdownEditing: Switch List Bullet Type

mde_magic_footnotes                     MarkdownEditing: Magic Footnotes
                                        shift+f12
                                        f12

mde_reference_jump                      MarkdownEditing: Jump Reference
                                        shift+f12
                                        f12

mde_reference_new_reference             MarkdownEditing: New Reference
                                        ctrl+alt+r

mde_reference_new_inline_link           MarkdownEditing: New Inline Link
                                        ctrl+alt+v

mde_reference_new_inline_image          MarkdownEditing: New Inline Image
                                        super+shift+k

mde_reference_new_image                 MarkdownEditing: New Image

mde_reference_new_footnote              MarkdownEditing: New Footnote
                                        alt+shift+6

mde_reference_delete_reference          MarkdownEditing: Delete Reference

mde_convert_inline_links_to_references  MarkdownEditing: Convert all inline links to references

mde_convert_inline_link_to_reference    MarkdownEditing: Convert inline link to reference

mde_gather_missing_link_markers         MarkdownEditing: Add Missing Link Labels

mde_gather_missing_footnotes            MarkdownEditing: Gather Missing Footnotes

mde_reference_organize                  MarkdownEditing: Organize References
                                        ctrl+alt+s

mde_make_page_reference                 ???
                                        ctrl+alt+d

mde_add_numbered_reference_definition   ???
                                        keypad_enter
                                        enter

mde_open_home_page                      MarkdownEditing: Open Home Page
                                        ctrl+alt+h

mde_open_page                           MarkdownEditing: Open Page
                                        f12

mde_open_journal                        MarkdownEditing: Open Journal
                                        ctrl+alt+j

mde_list_back_links                     MarkdownEditing: List Back Links
                                        shift+f12

mde_indent_quote                        ctrl+shift+. - Increase block quote level
                                        > - Convert to or increase block quote level (selected text)
 
mde_unindent_quote                      Decrease block quote level
                                        ctrl+shift+,

mde_complete_underlined_headings        ???
                                        tab

mde_insert_task_list_item               Create new GFM Task
                                        alt+t

mde_number_list                         Extend Numbered Lists (also in block quotes)
                                        enter
                                        keypad_enter

mde_join_lines                          Join content of next into current line after removing its leading blockquote, list and GFM task punctuation
                                        delete
                                        ctrl+shift+j

mde_indent_list_item                    Indent list item if caret is in front of bullets
                                        Indent list item, if caret is directly behind bullet only if followed by whitespace
                                        Hitting "tab" directly after new list bullet should insert \t otherwise
                                        Indent list item if caret is behind bullets
                                        Indent selected list items
                                        tab

mde_unindent_list_item                  Unindent list item if caret is in front of bullets
                                        Unindent list item if caret is behind bullets
                                        Unindent list item if caret is at eol
                                        Unindent selected list items
                                        Unindent list item no matter of caret position if `shift_tab_unindent` is set
                                        shift+tab

mde_toggle_task_list_item               Toggle GFM tasks
                                        alt+x