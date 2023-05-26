The PATH variable contains a list of directories the system checks before running a command. Updating the PATH variable will enable you to run any executables found in the directories mentioned in PATH from any directory without typing the absolute file path.


You can view the PATH variable with the following command:

```cmd
echo $PATH
```

A directory can be added to PATH in two ways: at the start or the end of a path.

Adding a directory (/the/file/path for example) to the start of PATH will mean it is checked first:

```cmd
export PATH=/the/file/path:$PATH
```

Adding a directory to the end of PATH means it will be checked after all other directories:

```cmd
export PATH=$PATH:/the/file/path
```

Multiple directories can be added to PATH at once by adding a colon : between the directories:

```cmd
export PATH=$PATH:/the/file/path:/the/file/path2
```