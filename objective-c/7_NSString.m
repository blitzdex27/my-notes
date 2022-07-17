#import <Foundation/Foundation.h>

int main (int argc, const char * argv []) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    // NSString
    NSLog(@"Hello World");

    // pointer to NSString -> initialized with NSString object
    NSString * quote = @"Dogs have masters, while cats have staff";

    // NSString object methods
    NSLog(@"Size of string: %d", [quote length]);
    NSLog(@"Character at index 5: %c", [quote characterAtIndex : 5]);
    NSLog(@"Last character: %c", [quote characterAtIndex : [quote length]-1]);


    NSString * name = @"deks";
    // NSString class method
    NSString * nickname = [NSString stringWithFormat : @" - Deki%@", name];
    NSLog(@"Nickname: %@", nickname);

    // BOOL isStrEqual = [quote isEqualtoString : nickname];
    // NSLog("Is quote str equal to nickname str? %i", isStrEqual);

    // this won't work since nickname is of type NSString *
    // printf("%s", nickname);


    // convert NSString into regular string of type char *
    const char * uniString = [nickname UTF8String];
    printf("%s", uniString);

    // convert from string to NSString
    NSString * myNSString = [NSString stringWithUTF8String: "hello"];
    NSLog(@"%@",myNSString);

    // append string
    NSString * wholeQuote = [quote stringByAppendingString : nickname];

    // search string
    NSRange searchResult = [wholeQuote rangeOfString : @"Dekideks"];
    if (searchResult.location == NSNotFound) {
        NSLog(@"String not found");
    } else {
        printf("Dekideks is at index %lu and is %lu characters long", searchResult.location, searchResult.length);
    }

    // make another and replace strings in range
    NSRange range = NSMakeRange(searchResult.location, searchResult.length);
    NSString * newQuote = [wholeQuote stringByReplacingCharactersInRange : range withString : @"anonymous"];
    NSLog(@"%@", newQuote);

 

    [pool drain];

    return 0;
}