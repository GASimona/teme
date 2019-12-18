var w = 10;
var h = 20;

for (i = 0; i <= w; i++) {
    for (j = 0; j <= h; j++) {
        if (i == 0 || i == w || j == 0 || j == h) {
            document.write("#");
        }
        else {
            document.write("0");
        }
    }
    document.writeln();
}