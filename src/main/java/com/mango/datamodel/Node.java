package com.mango.datamodel;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Node {
    private @Id @GeneratedValue Long nodeId;
    private String nodeType;
    private String title;

    private Node () {}

    public Node(String nodeType, 
                String title) {
        this.nodeType = nodeType;
        this.title = title;
    }
}