package com.eduanlima.microblog.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eduanlima.microblog.dto.NewsDTO;
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
		entity = newsRepository.save(entity);
		
		return new NewsDTO(entity);
	}
	
	private News setDtoInEntity(NewsDTO dto, News entity) {
		entity.setTitle(dto.getTitle());
		entity.setDate(dto.getDate());
		entity.setContent(dto.getContent());
		entity.setAuthor(dto.getAuthor());
		entity.setTags(dto.getTags());
		
		return entity;
	}
}
