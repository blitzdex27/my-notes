# Linux fixes

## Touchpad not working

Disable and enable psmouse

```
sudo modprobe -r psmouse
sudo modprobe psmosue
```

## user not in sudoers group

```bash
su

usermod -a -G sudo <user>
```

restart
