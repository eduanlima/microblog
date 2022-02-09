package com.eduanlima.microblog.services;

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
}
