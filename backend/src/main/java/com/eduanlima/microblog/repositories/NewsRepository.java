package com.eduanlima.microblog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduanlima.microblog.entities.News;

public interface NewsRepository extends JpaRepository<News, Integer>{

}
