This project contains all the tools I currently use to make my web projects.

Usage
=====   

Compilation
-----------

When I start a new project, I copy sample-build.xml to my new directory, change the <import> location to point to build-base.xml and then list all my JavaScript source files in the property called sources. Once it's done, the only time I change it again is when I add source files. Be aware that the order of the files might be important: that's why I don't try to just compile all js files from the directory.

To compile, just run ``ant compile`` for the standard compiler or ``ant advanced`` for advanced settings. The results will go respectively in a compiled/ and advanced/ directory.
    
Tests
-----

To run tests with JsTestDriver, you need to run a server, to capture some browsers and then
launch the tests. Here is how I do it.
 
1. Start the server with a command like: ``java -jar JsTestDriver-1.3.3b.jar --port 9876`` This must be done in the directory where JsTestDriver is located, but it can be anywhere.
2. Capture all the browsers you want by pointing them to ``http://localhost:9876/capture``
3. Run the tests of your project, generally from the project directory, with ``ant test-standard`` when testing the original JavaScript sources, ``ant test-compiled`` to test the sources compiled in standard mode, or ``ant test-advanced`` to test the sources compiled in advanced mode.

        
Files
=====

- **ant-contrib-1.0b3.jar** is a library of very useful ant tasks. Once you start using them, you just can't stop.
- **closure.jar** is Google's closure JavaScript compiler.
- **JsTestDriver-1.3.3b.jar** is a unit test library and server for JavaScript.
- **template_jsTestDriver.conf** is a sample of configuration for JsTestDriver.
- **externs.js** is the file containing the declaration extern functions from JsTestDriver, to allow compilation of your test suite in advanced mode with closure.
- **build-base.xml** is the base ant file that you can import.
- **sample-build.xml** is a sample of ant build file for a project. It's almost empty because all the useful stuff is already defined in build-base.xml.
- **README.rst** is this file, handy for presenting the project on github.
