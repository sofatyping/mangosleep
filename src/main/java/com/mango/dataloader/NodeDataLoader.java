package com.mango.dataloader;

import com.mango.datamodel.Node;
import com.mango.repository.NodeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class NodeDataLoader implements CommandLineRunner {

    private final NodeRepository repository;

    @Autowired
    public NodeDataLoader(NodeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Node(
                "ViewNode", "Hot Destinations"));
        this.repository.save(new Node(
                "ViewNode", "Popular Trips"));
    }
}
