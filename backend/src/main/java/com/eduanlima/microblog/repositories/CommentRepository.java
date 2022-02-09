package com.eduanlima.microblog.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.eduanlima.microblog.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
	
	@Query(value = "SELECT * FROM tb_comment WHERE news = ?1", nativeQuery = true)
	List<Comment> findAllByIdNews(Integer id);

}
