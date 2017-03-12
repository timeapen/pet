angular.module("petClient.config", [])
.constant("string", "my string")
.constant("integer", 12345)
.constant("object", {"one":2,"three":["four"]})
.constant("array", ["one",2,{"three":"four"},[5,"six"]]);
