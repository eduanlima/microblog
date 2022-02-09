package com.eduanlima.microblog.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduanlima.microblog.dto.CommentDTO;
import com.eduanlima.microblog.dto.NewsDTO;
import com.eduanlima.microblog.entities.Comment;
import com.eduanlima.microblog.entities.News;
import com.eduanlima.microblog.repositories.CommentRepository;
import com.eduanlima.microblog.repositories.NewsRepository;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepository commentRepository;
	
	@Autowired
	private NewsRepository newsRepository;
	
	@Transactional(readOnly = true)
	public List<CommentDTO> findAllByIdNews(Integer id) {
		List<Comment> list = commentRepository.findAllByIdNews(id);
		List<CommentDTO> listDto = new ArrayList<>();
		
		for(Comment c : list) {
			listDto.add(new CommentDTO(c));
		}
		
		return listDto;
	}

}
