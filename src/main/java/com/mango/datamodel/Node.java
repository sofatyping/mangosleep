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
    private String imgUrl;

    private Node[] children;

    private Node() {
    }

    // For ViewNode
    public Node(String nodeType, String title) {
        this.nodeType = nodeType;
        this.title = title;
    }

    // For TripNode
    public Node(String nodeType, String title, String imgUrl) {
        this.nodeType = nodeType;
        this.title = title;
        this.imgUrl = imgUrl;
    }
}