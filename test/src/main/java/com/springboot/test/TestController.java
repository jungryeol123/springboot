package com.springboot.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping("/testServer")
    public String test () {
    return "test";
    }

}
