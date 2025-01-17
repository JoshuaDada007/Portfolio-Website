package org.example.backend;

public class Dummy {
    public static void main(String[] args) {
        System.out.println(Dummy.class.getClassLoader().getResource("keystore.p12"));
    }
}
