# Linux fixes

## Touchpad not working

Disable and enable psmouse
```
sudo modprobe -r psmouse
sudo modprobe psmosue
```