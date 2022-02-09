package com.eduanlima.microblog.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.eduanlima.microblog.dto.NewsDTO;
import com.eduanlima.microblog.services.NewsService;

@RestController
@RequestMapping(value = "news")
public class NewsResource {
	
	@Autowired
	private NewsService service;
	
	@GetMapping
	public ResponseEntity<Page<NewsDTO>> findAll(
			@RequestParam(value = "paged", defaultValue = "false") Boolean paged,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
			@RequestParam(value = "direction", defaultValue = "ASC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "id") String orderBy) {

		PageRequest pageRequest;
		
		if (paged) {
			pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		}
		else {
			pageRequest = PageRequest.of(page, Integer.MAX_VALUE, Direction.valueOf(direction), orderBy);
		}
		
		Page<NewsDTO> list = service.findAllPaged(pageRequest);
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping
	public ResponseEntity<NewsDTO> insert(@RequestBody NewsDTO dto) {
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
}
