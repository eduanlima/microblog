package com.eduanlima.microblog.dto;

import java.io.Serializable;
import java.time.Instant;

public class CommentDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String content;
	private String author;
	private Instant date;
	
	public CommentDTO() {
	}
	
	public CommentDTO(Integer id, String content, String author, Instant date) {
		this.id = id;
		this.content = content;
		this.author = author;
		this.date = date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
	}
}
