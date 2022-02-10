package com.eduanlima.microblog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduanlima.microblog.entities.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
	
}
