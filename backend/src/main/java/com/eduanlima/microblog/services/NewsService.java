package com.eduanlima.microblog.services;

import java.time.Instant;
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
import com.eduanlima.microblog.repositories.NewsRepository;

@Service
public class NewsService {
	
	@Autowired
	private NewsRepository newsRepository;
	
	@Transactional(readOnly = true)
	public Page<NewsDTO> findAllPaged(PageRequest pageRequest) {
		Page<News> list = newsRepository.findAll(pageRequest);
		return list.map(x -> new NewsDTO(x));
	}
	
	@Transactional(readOnly = true)
	public NewsDTO findById(Integer id) {
		Optional<News> obj = newsRepository.findById(id);
		News entity = obj.get();
		return new NewsDTO(entity);
	}

	@Transactional
	public NewsDTO insert(NewsDTO dto) {
		News entity = new News();
		
		entity = setDtoInEntity(dto, entity);
		entity.setDate(Instant.now());
		entity = newsRepository.save(entity);
		
		return new NewsDTO(entity);
	}
	
	@Transactional
	public NewsDTO update(Integer id, NewsDTO dto) {
		News entity = new News();
		
		entity = newsRepository.getById(id);
		entity = setDtoInEntity(dto, entity);
		entity = newsRepository.save(entity);
		
		return new NewsDTO(entity);
	}
	
	@Transactional
	public NewsDTO insertComment(Integer id, CommentDTO dto) {
		News entity = new News();
		entity = newsRepository.getById(id);
		
		Comment comment = new Comment(dto.getContent(), dto.getAuthor(), Instant.now());
		entity.addComment(comment);
		
		entity = newsRepository.save(entity);
		
		return new NewsDTO(entity);
	}
	
	public void delete(Integer id) {
		try {
			newsRepository.deleteById(id);
		}
		catch(Exception e) {
			new RuntimeException(e);
		}
	}
	
	private News setDtoInEntity(NewsDTO dto, News entity) {
		entity.setTitle(dto.getTitle());
		entity.setContent(dto.getContent());
		entity.setAuthor(dto.getAuthor());
		entity.setTags(dto.getTags());
		
		return entity;
	}
}
