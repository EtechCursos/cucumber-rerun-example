package br.com.application.name.commons;

import com.github.javafaker.Faker;

import java.util.Locale;
import java.util.Random;

public class DataGenerator {

    private Faker faker;
    private String fullName;
    private String email;
    private String telephone;
    private String password;
    private String cpf;

    public DataGenerator() {
        double x = (Math.random() * ((999 - 0) + 1)) + 0;
        GeraCpfCnpj gerador = new GeraCpfCnpj();
        this.faker = new Faker(new Locale("pt-BR"));
        this.setFullName(faker.name().fullName());
        this.setEmail(faker.internet().emailAddress()+(int)x);
        this.setTelephone(faker.phoneNumber().cellPhone());
        this.setPassword(faker.internet().password(4,20));
        this.setCpf(gerador.cpf(false));
    }

    public String getFullName() {
        return fullName;
    }

    private void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    private void setEmail(String email) {
        this.email = email;
    }

    public String getTelephone() {
        return telephone;
    }

    private void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getPassword() {
        return password;
    }

    private void setPassword(String password) {
        this.password = password;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
