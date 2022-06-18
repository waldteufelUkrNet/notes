How to Copy Files and Directories in Linux

Copying files and directories is one of the most common tasks you’ll perform when working on the command line. There are several commands for copying files in Linux, with cp and rsync being the most widely used tools.

It is common practice to use the cp command to copy files and rsync to copy directories.

To be able to copy files and directories, you must have at least read permissions on the source file and write permission on the destination directory.
Copying Files with the cp Command

On Linux and Unix operating systems, the cp command is used for copying files and directories.

The most simple use case is to copy a file in the current working directory. For example, to copy a file named file.txt to a file named file_backup.txt in the current directory , you would run the following command:

cp file.txt file_backup.txt

If the destination file exists, it will be overwritten. To get a confirmation prompt before overwriting the files, use the -i option.

cp -i file.txt file_backup.txt

By default, when using the cp command to copy a file, the new file will be owned by the user performing the command. Use the -p option to preserve the file mode, ownership , and timestamps :

cp -p file.txt file_backup.txt

Another option that can be useful is -v. When using this option, the command prints what is being done:

cp -v file.txt file_backup.txt

'file.txt' -> 'file_backup.txt'

Copy a file to a directory

To copy a file to a directory, specify the absolute or the relative path to the directory. When the destination directory is omitted, the file is copied to the current directory.

In the following example, we are copying the file file.txt to the /backup directory:

cp file.txt /backup

When specifying only the directory name as a destination, the copied file will have the same name as the original file.

If you want to copy the file under a different name, you need to specify the desired file name:

cp file.txt /backup/new_file.txt

The command above will copy the file to the specified directory as new_file.txt.
Copy multiple files

To copy multiple files and directories at once, specify the names of source files and directories followed with the destination directory as the last argument:

cp file.txt dir file1.txt file2.txt dir1

When copying multiple files, the destination must be a directory.

The cp command also allows you to use pattern matching. For example, to copy all .png files from the current directory to the /backup directory, you would use:

cp *.png /backup

Copying Directories with cp Command

To copy a directory, including all its files and subdirectories, use the -R or -r option. In the following example, we are copying the directory Pictures to Pictures_backup:

cp -R Pictures Pictures_backup

The command above will create the destination directory and recursively copy all files and subdirectories from the source to the destination directory.

If the destination directory already exists, the source directory itself and its content are copied to the destination directory. To copy only the files and subdirectories but not the target directory, use the -T option:

cp -RT Pictures Pictures_backup

The options used when copying files can also be used when copying directories. The main difference is that when copying directories, you need to use the -R option.
Copying Files and Directories with the rsync Command

rsync is a fast and versatile command line-utility that synchronizes files and directories between two locations. It can be used to copy files to local and remote locations.

rsync includes many options that control every aspect of its behavior

The most useful option is -a that recursively copy directories, transfer special and block devices and preserve symbolic links, modification times, group, ownership, and permissions.

To copy a single file from one to another location, you would run the following command:

rsync -a file.txt file_backup.txt

If the destination file exists, rsync will overwrite it.

The same command can be used to copy a directory:

rsync -a /var/www/public_html/ /var/www/public_html_backup/

rsync threats the source directories that end with a trailing slash / differently. If you add a trailing slash on the source directory, the command will copy only the source directory’s contents to the destination directory. When the trailing slash is omitted, rsync will copy the source directory inside the destination directory. The safest option is always to include the trailing slash / on both the destination and source.

To learn more about rsync check the following articles:

    How to Use Rsync for Local and Remote Data Transfer and Synchronization
    How to Exclude Files and Directories with Rsync

Conclusion

We have shown you how to copy files and directories in Linux and Unix-based systems, using the cp and rsync utilities.

If you have any questions, please leave a comment below.

https://linuxize.com/post/how-to-copy-files-and-directories-in-linux/