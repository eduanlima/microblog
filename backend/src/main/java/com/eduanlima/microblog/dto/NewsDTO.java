package com.eduanlima.microblog.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import com.eduanlima.microblog.entities.Comment;
import com.eduanlima.microblog.entities.News;

public class NewsDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private String title;
	private Instant date;
	private String content;
	private String author;
	private String tags;
	
	Set<Comment> comments = new HashSet<>();

	public NewsDTO() {
	}

	public NewsDTO(Integer id, String title, Instant date, String content, String author, String tags) {
		this.id = id;
		this.title = title;
		this.date = date;
		this.content = content;
		this.author = author;
		this.tags = tags;
	}
	
	public NewsDTO(News news) {
		id = news.getId();
		title = news.getTitle();
		date = news.getDate();
		content = news.getContent();
		author = news.getAuthor();
		tags = news.getTags();
		comments = news.getComments();
	}
		
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Instant getDate() {
		return date;
	}

	public void setDate(Instant date) {
		this.date = date;
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

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public Set<Comment> getComments() {
		return comments;
	}
}
