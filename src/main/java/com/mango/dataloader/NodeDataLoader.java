package com.mango.dataloader;

import com.mango.datamodel.Node;
import com.mango.repository.NodeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.ArrayList;

@Component
public class NodeDataLoader implements CommandLineRunner {

    private final NodeRepository repository;

    @Autowired
    public NodeDataLoader(NodeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {

        Node[] list = new Node[3];
        list[0] = new Node("TripNode", "Oregon", "http://placehold.it/350x150");
        list[1] = new Node("TripNode", "Seattle", "http://placehold.it/350x150");
        list[2] = new Node("TripNode", "Ohio", "http://placehold.it/350x150");
        Node n = new Node("ViewNode", "Hot Destinations", "http://placehold.it/350x150");
        this.repository.save(n);
    }
}
