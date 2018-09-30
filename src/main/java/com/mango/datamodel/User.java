package com.mango.datamodel;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class User {
    private @Id @GeneratedValue Long userId;
    private String firstName;
    private String lastName;


    private User () {}

    public User(
            String firstName,
            String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
