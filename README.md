# Pet Store

The pet store is composed of a backend created using Spring-Boot.  The front-end is written in Angular.

## Building

### Pet Server
The server is a maven project and can be built by executing the maven build at the root of the project.

```
mvn clean install

[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary:
[INFO] 
[INFO] pet ................................................ SUCCESS [  2.093 s]
[INFO] pet-server ......................................... SUCCESS [01:27 min]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:30 min
[INFO] Finished at: 2017-01-16T19:10:43-05:00
[INFO] Final Memory: 31M/154M
[INFO] ------------------------------------------------------------------------
```

This will run the unit test, dao tests and Spring container integration tests and build the executable WAR.

### Pet Client

This project was generted using the [Gulp Angular Generator](https://github.com/Swiip/generator-gulp-angular)

This project uses [Gulp](https://github.com/gulpjs/gulp) as its build tool.  All gulp tasks can be run from the root of the `pet-client` folder.

In order to perform any `gulp` tasks, make sure that `gulp` is installed globally:

```
npm install -g gulp
```

#### Karma Tests
Invoke Karma tests by invokking the following gulp command:
```
gulp test

[19:29:35] all files 26.38 kB
[19:29:35] Finished 'scripts' after 1.29 s
[19:29:35] Starting 'test'...
16 01 2017 19:29:36.086:WARN [watcher]: Pattern "/Users/TIM/Documents/dev/pet/pet-client/src/**/*.mock.js" does not match any file.
PhantomJS 1.9.8 (Mac OS X 0.0.0): Executed 26 of 26 SUCCESS (0.007 secs / 0.208 secs)
[19:29:44] Finished 'test' after 8.46 s

```

# Running Integration Tests Locally
Integration tests are written using Protractor and can be run locally doing the following:

1. Start the pet-server locally.  Navigate to the pet-server root and invoke the following maven goal:
    
    ```
    mvn spring-boot:run
    ```
1. In order to serve the front-end properly and execute the Protractor tests make sure install the projects npm dependencies:

    ```
    npm install
    ```
1. Install `bower dependencies`

    ```
    bower install
    ```
1. Run e2e tests via gulp:

    ```
    gulp protractor
    ```
    
# Build Tools
## Circle CI
A Circle CI build is configured via the `circle.yml` file.
## Travis CI
A Travis build is configured via the `.travis.yml` file.

