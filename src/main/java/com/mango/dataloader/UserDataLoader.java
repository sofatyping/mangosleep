package com.mango.dataloader;

import com.mango.datamodel.User;
import com.mango.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserDataLoader implements CommandLineRunner {

    private final UserRepository repository;

    @Autowired
    public UserDataLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new User(
                "Mango",
                "Lin"));
    }
}
