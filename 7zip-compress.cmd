rem "%ProgramFiles%\7-Zip\7z.exe" a -tzip .\dist\Ghostination.zip @7zip-compress-files.txt
del .\dist\Ghostination.zip
"%ProgramFiles%\7-Zip\7z.exe" a -mm=Deflate -mfb=258 -mpass=15 .\dist\Ghostination.zip @7zip-compress-files.txt