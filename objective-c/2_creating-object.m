#import <Foundation/Foundation.h>

// Creating object interface (blueprint)
@interface Rectangle : NSObject {
    int width;
    int height;

}
- (void) setWidth : (int) w;
- (void) setHeight : (int) h;
- (int) getWidth;
- (int) getHeight;
- (int) area;
- (int) perimeter;
- (void) setWH : (int) w : (int) h;
@end

// Creating implementation of object (how blueprint be implemented)
@implementation Rectangle 

- (void) setWidth : (int) w {
    width = w;
}
- (void) setHeight : (int) h {
    height = h;
}
- (int) getWidth {
    return width;
}
- (int) getHeight {
    return height;
}

- (int) area {
    return width * height;
}
- (int) perimeter {
    return 2 * width + 2 * height;
}
- (void) setWH : (int) w : (int) h {
    width = w;
    height = h;
}

@end

int main (int argc, char * argv[]) {
    NSAutoreleasePool * pool = [[NSAutoreleasePool alloc] init];
    
    // Creation of Rectangle object instance
    // Construction from blueprint
    // - allocate memory (based on header file or interface)
    // - initialize methods onto memory (based on main file or implementation)
    // [Rectangle alloc] -> (Rectangle *)malloc(sizeof(Rectangle))
    // [[Rectangle alloc] init] -> iterate through methods while saving the address of each into the heap memory (e.g. &setWidth)
    
    Rectangle * rec = [[Rectangle alloc] init];
    
    [rec setWidth: 2];
    [rec setHeight: 3];
    
    printf("-------------------------------------------\n");
    printf("Rectangle\n");
    NSLog(@"width = %i", [rec getWidth]);
    NSLog(@"height = %i", [rec getHeight]);
    NSLog(@"area = %i", [rec area]);
    NSLog(@"perimeter = %i", [rec perimeter]);
    
    // Using a method with two parameters
    [rec setWH : 6 : 7];
    NSLog(@"area = %i", [rec area]);
    NSLog(@"perimeter = %i", [rec perimeter]);
    
    [pool drain];
    
    return 0;
}