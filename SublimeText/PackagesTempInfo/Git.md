##### Git

Пакунок додає в редактор основні команди Git.
https://github.com/kemayo/sublime-text-git/wiki


###### Меню Git

Tools ▶ Git
Preferences ▶ Package Settings ▶ Git


###### Налаштування Git

annotations              Annotations default to being on for all files. Can be
                         slow in some cases
                         false

commit_rulers            Rulers for commit view
                         [70]

diff_panel               use the panel for diff output, rather than a new
                         scratch window (new tab)
                         false

diff_syntax              e.g. "Packages/Git/syntax/Git Commit Message.tmLanguage"
                         "Packages/Diff/Diff.tmLanguage"

flow                     Show git flow commands
                         false

git_command              if present, use this command instead of plain "git"
                         e.g. "/Users/kemayo/bin/git" or "C:\bin\git.exe"
                         false

git_flow_command         point this the installation location of git-flow
                         "/usr/local/bin/git-flow"

gitignore_sync           Watch for gitignore changes?
                         false

gitk_command             if present, use this command instead of plain "gitk"
                         e.g. "/Users/kemayo/bin/gitk" or "C:\bin\gitk.exe"
                         false

history_size             How many commit messages to store in the history. Set
                         to 0 to disable.
                         5

low-notag                By default git flow release and hotfix will tag a
                         version. Set to true to disable.
                         false

save_first               save before running commands
                         true

status_opens_file        If you'd rather have your status command open files
                         instead of show you a diff, set this to true.  You can
                         still do `Git: Status` followed by 'Git: Diff Current
                         File' to get a file diff
                         false

statusbar_branch         statusbar
                         true

statusbar_status         Symbols for quick git status in status bar
                         true

statusbar_status_symbols {"modified": "≠", "added": "+", "deleted": "×", "untracked": "?", "conflicts": "‼", "renamed":"R", "copied":"C", "clean": "✓", "separator": " "}

verbose_commits          Use --verbose flag for commit messages
                         true


###### Команди Git

git_add_choice                       Git: Add...

git_add_selected_hunk                Git: Add Selected Hunk

git_blame                            Git: Blame

git_branch                           Git: Change Branch

git_checkout_tag                     Git: Checkout Tag

git_commit                           Git: Commit

git_commit_amend                     Git: Amend Commit

git_commit_history                   Git: Commit history

git_commit_selected_hunk             Git: Commit Selected Hunk

git_custom                           Git: Custom Command

git_delete_branch                    Git: Delete Branch

git_delete_tag                       Git: Delete Tag

git_diff                             Git: Diff Current File

git_diff                             Git: Diff Current File (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_all                         Git: Diff All Files

git_diff_all                         Git: Diff All Files (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_commit                      Git: Diff Staged Files

git_diff_commit                      Git: Diff Staged Files (Ignore Whitespace)
                                     args: { "ignore_whitespace": true }

git_diff_tool_commit                 Git: Diff Tool Current File Staged

git_diff_tool_commit_all             Git: Diff Tool Staged

git_document                         Git: Document Selection

git_flow_feature_finish              Git Flow: Feature Finish

git_flow_feature_start               Git Flow: Feature Start

git_flow_hotfix_finish               Git Flow: Hotfix Finish

git_flow_hotfix_start                Git Flow: Hotfix Start

git_flow_release_finish              Git Flow: Release Finish

git_flow_release_start               Git Flow: Release Start

git_gitk                             Git: Gitk

git_gitk_all                         Git: Gitk All

git_gitk_this_file                   Git: Gitk This File

git_goto_commit                      Git: View selected commits

git_graph                            Git: Graph Current File

git_graph_all                        Git: Graph All

git_gui                              Git: Gui

git_init                             Git: Init

git_log                              Git: Log Current File

git_log_all                          Git: Log All

git_merge                            Git: Merge Branch

git_new_branch                       Git: New Branch

git_new_tag                          Git: New Tag

git_open_file                        Git: Open...

git_open_modified_files              Git: Open Modified Files

git_pull_current_branch              Git: Pull Current Branch

git_push_current_branch              Git: Push Current Branch

git_quick_commit                     Git: Quick Commit (current file)

git_quick_commit                     Git: Quick Commit (repo)
                                     args: { "target": "*" }

git_quick_commit                     Git: Quick Commit (repo, only already added
                                     files)
                                     args: { "target": false }

git_raw                              Git: Stash Changes
                                     args: { "command": "git stash" }

git_raw                              Git: Fetch
                                     args: { "command": "git fetch "may_change_files": false }

git_raw                              Git: Reset (unstage) All
                                     args: { "command": "git reset HEAD "show_in": "suppress" }

git_raw                              Git: Reset (unstage) Current File
                                     args: { "command": "git reset HEAD "append_current_file": true, "show_in": "suppress" }

git_raw                              Git: Pull Using Rebase
                                     args: { "command": "git pull --rebase" }

git_raw                              Git: Add All
                                     args: { "command": "git add -A" }

git_raw                              Git: Add Current File
                                     args: { "command": "git add "append_current_file": true }

git_raw                              Git: Checkout Current File
                                     args: { "command": "git checkout "append_current_file": true }

git_raw                              Git: Diff Tool All
                                     args { "command": "git difftool "may_change_files": false }

git_raw                              Git: Diff Tool Current File
                                     args: { "command": "git difftool "append_current_file": true, "may_change_files": false }

git_raw                              Git: Pull
                                     args: { "command": "git pull" }

git_raw                              Git: Push
                                     args: { "command": "git push "may_change_files": false }

git_raw                              Git: Push Tags
                                     args: { "command": "git push --tags "may_change_files": false }

git_raw                              Git: Stash Pop
                                     args: { "command": "git stash pop" }

git_reset_hard_head                  Git: Reset (hard) HEAD

git_show                             Git: Show Previous Version of Current File

git_show_commit                      Git: Show Commit By Hash

git_show_tags                        Git: Show Tags

git_stash_apply                      Git: Stash Apply

git_stash_drop                       Git: Stash Drop

git_stash_list                       Git: Stash List

git_status                           Git: Status

git_toggle_annotations               Git: Toggle Annotations

git_track_remote_branch              Git: Track Remote Branch

git_update_ignore                    Git: Update Project Ignored Files

git_update_index_assume_unchanged    Git: Assume Unchanged

git_update_index_no_assume_unchanged Git: No Assume Unchanged
