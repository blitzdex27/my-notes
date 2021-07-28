## Auto login on Windows 10

- run netplwiz
- select user
- uncheck "Users must enter a user name and password to use this computer"
- enter password
- done

For Windows 2004 version do this first:
> reg ADD “HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device” /v DevicePasswordLessBuildVersion /t REG_DWORD /d 0 /f
