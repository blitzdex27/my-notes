# Choose the correct data storage method

What are your options when it comes to storing and reading big data ?

You have some options, including:

- Use NSUserDefaults to store them.
- Stored in structured files, XML, JSON, Plist formats.
- Is it packaged with NSCoding?
- Stored in a local database, such as SQLite
- use NSData

What's wrong with NSUserDefaults? While NSUserDefaults is nice and simple, it's really good only if you have very little data to store (like your level, or whether the volume is on or off). Once you get into big data, there are better alternatives.

Saving in structured files can also be problematic. Typically, before parsing, you need to load the entire file into memory, which is a very time-consuming operation. You can use SAX to process XML files, but that's a complicated approach. At the same time you load all the objects into memory, both the ones you want and the ones you don't.

So what about NSCoding? Unfortunately, it also has to read and write files, which has the same problem as the above method.

Your best solution is to use SQLite or Core Data. With these techniques, you can perform specific queries to load only the objects you need, avoiding brute force search methods to retrieve data. Performance-wise, SQLite and Core Data are very close.

The biggest difference between SQLite and Core Data is how they are used. Core Data presents an object graph model, but SQLite is a traditional DBMS ( database management system). Usually Apple recommends you use Core Data, but unless you have a specific reason not to make you want to avoid it, use a lower level SQLite.

If you use SQLite in your app, a handy library [FMDB](https://github.com/ccgus/fmdb) allows you to use SQLite without having to delve into SQLite's C API.
[SQLite org](https://www.sqlite.org/docs.html)
————————————————
版权声明：本文为 CSDN 博主「zfpp25*」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lizhongfu2013/article/details/108534418
————————————————
版权声明：本文为 CSDN 博主「zfpp25*」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/lizhongfu2013/article/details/108534418
