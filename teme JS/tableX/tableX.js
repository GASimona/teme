for (i = 1; i < 10; i++) {
    document.write('<span style="display:inline-block"> <pre>');
    for (j = 1; j < 10; j++) {
        document.write(i + " * " + j + " = " + i * j + " ");
        document.writeln(" " + " " + " ");

    }

    document.writeln("</pre> </span> ");
}