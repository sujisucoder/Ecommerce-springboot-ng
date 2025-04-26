package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.model.User;
import com.example.ecommerce_backend.model.UserPrincipal;
import com.example.ecommerce_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserServiceImplementation implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(username);

        if (user == null){
            System.out.println("user not found here:"+user);
            throw new UsernameNotFoundException("user not found");
        }
        System.out.println("user is here:"+user.getEmail());
        return new UserPrincipal(user);
    }
}
