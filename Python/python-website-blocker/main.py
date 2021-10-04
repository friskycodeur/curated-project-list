import sys

#This script need be lauch with admin privilege on powershell or CMD (exemple : py main.py google.com twitter.com)
#Add websites you want to block in argument

with open("C:\Windows\System32\drivers\etc\hosts", "a") as hosts:
    for arg in sys.argv:
        if arg is not sys.argv[0]: #Sys.argv[0] is the name of script
            hosts.write("\n127.0.0.1 " + arg)

