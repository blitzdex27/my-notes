#import <Foundation/Foundation.h>

int main () {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];

    NSLog(@"Hello World");
    printf("Hello world");

    [pool drain]

}