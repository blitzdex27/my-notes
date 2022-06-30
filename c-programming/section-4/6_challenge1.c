#include <stdio.h>

int main () {
    
    double height = 4;
    double width = 5;
    double area = 0.0;
    double perimeter = 0.0;
    
    area = height * width;
    perimeter = height * 2 + width * 2;
    
    printf("Area: %.2f\n", area);
    printf("Perimeter: %.2f", perimeter);
    
    return 0;
}