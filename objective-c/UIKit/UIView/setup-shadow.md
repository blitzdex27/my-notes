
Pros: create shadows
Cons: Core animation must first perform an animation to determine the specific shape of the view before rendering the shadow, which is a very labor-intensive operation. 
————————————————
版权声明：本文为CSDN博主「zfpp25_」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lizhongfu2013/article/details/108534418
```
UIView * view = [[UIView alloc]init];

view.layer.shadowOffset = CGSizeMake(-1.0f, 1.0f);
view.layer.shadowRadius = 5.0f;
view.layer.shadowOpacity = 0.6;

```


Pros: better
```
view.layer.shadowPath = [[UIBezierPath bezierPathWithRect:view.bounds] CGPath];

```