## dispatch_async

Function

Submits a block for asynchronous execution on a dispatch queue and returns immediately.

## Declaration

```
void dispatch_async(dispatch_queue_t queue, dispatch_block_t block);
```

## samples

example 1

```
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^(void){
    // background thread

    dispatch_async(dispatch_get_main_queue(), ^(void){
        // run on main thread
    })
})

```

example 2

```
dispatch_queue_t * queue = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);

dispatch_async(queue, ^{
    // background thread
})
```
