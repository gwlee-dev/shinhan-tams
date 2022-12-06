@echo off

xcopy build\css\* ..\tams2\src\main\webapp\resources\stylesheets /y
xcopy build\js\* ..\tams2\src\main\webapp\resources\javascripts /y
xcopy build\image\* ..\tams2\src\main\webapp\resources\images /y