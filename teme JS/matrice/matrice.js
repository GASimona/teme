var w = 10;
var h = 20;

for (i = 1; i <= w; i++) {
    for (j = 1; j <= h; j++) {
        if (i == 1 || i == w || j == 1 || j == h) {
            document.write("#");
        }
        else {
            document.write("0");
        }
    }
    document.writeln();
}