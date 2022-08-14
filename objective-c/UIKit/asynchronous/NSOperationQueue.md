```
NSOperationQueue * q = [[NSOperationQueue alloc]init];

// some data you need to process asynchronously
NSData * data = [@"i am a super large data" dataUsingEncoding: NSUTF8StringEncoding];

// push an expensive computation to the operation queue
// then display the response to the user main thread

[q addOperationUsingBlock: ^{
    NSString * string = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];

    // update ui for example on main thread
    
}]

```