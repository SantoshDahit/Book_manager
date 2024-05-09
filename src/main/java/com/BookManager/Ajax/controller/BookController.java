package com.BookManager.Ajax.controller;

import com.BookManager.Ajax.Service.ServiceResponse;
import com.BookManager.Ajax.dto.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {


    List<Book> bookStore = new ArrayList<>();

    @PostMapping("/saveBook")
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        bookStore.add(book);
        ServiceResponse<Book> response = new ServiceResponse<Book>("success", book);
        return new ResponseEntity<Book>(book,HttpStatus.OK);
    }

    @PostMapping("/getBooks")
    public ResponseEntity<Book> getAllBooks() {

        ServiceResponse<List<Book>> response = new ServiceResponse<List<Book>>("success", bookStore);
        return new ResponseEntity<Book>((MultiValueMap<String, String>) response,HttpStatus.OK);
    }
}
