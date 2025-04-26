package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.model.User;
import com.example.ecommerce_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/student")
    public ResponseEntity<String> showStudent(){
        System.out.println("this is from /student");
        return ResponseEntity.ok("this  is from ecommerce backend");
    }


    @PostMapping("/signup")
    public User signup(@RequestBody User user){

        return userService.signup(user) ;
    }

    @PostMapping("/signin")
    public String signin(@RequestBody User user){
//        System.out.println("userindiii:"+user.getPassword());

        return  userService.verify(user);
    }


}
