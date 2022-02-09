package com.eduanlima.microblog.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduanlima.microblog.dto.CommentDTO;
import com.eduanlima.microblog.services.CommentService;

@RestController
@RequestMapping(value = "comments")
public class CommentResource {
	
	@Autowired
	private CommentService service;
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<List<CommentDTO>> findAllByIdNews(@PathVariable Integer id){
		List<CommentDTO> list = service.findAllByIdNews(id);
		return ResponseEntity.ok().body(list);
	}

}
