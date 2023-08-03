package com.example.demoCRUD.Controller;

import com.example.demoCRUD.Model.Customer;
import com.example.demoCRUD.Repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepo customerRepo;
    @PostMapping("/customer")
    Customer newCustomer (@RequestBody Customer newCustomer){
        return customerRepo.save(newCustomer);
    }
    @GetMapping("/customers")
    List<Customer> getAllCustomer(){
        return customerRepo.findAll();
    }

}
