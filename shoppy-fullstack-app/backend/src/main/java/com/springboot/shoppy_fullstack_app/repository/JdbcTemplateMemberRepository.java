package com.springboot.shoppy_fullstack_app.repository;

import com.springboot.shoppy_fullstack_app.dto.Member;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import javax.sql.DataSource;

@Repository //JdbcTemplateMemberRepository
public class JdbcTemplateMemberRepository implements MemberRepository{

    private final JdbcTemplate jdbcTemplate;

    public JdbcTemplateMemberRepository (DataSource dataSource) {
            this.jdbcTemplate = new JdbcTemplate(dataSource); //커넥션 생성
    }

    @Override
    public void save(Member member) {
        System.out.println("memberRepository.save -->");
        System.out.println(member.getId());
        System.out.println(member.getPwd());
        System.out.println(member.getName());
        System.out.println(member.getPhone());
        System.out.println(member.getEmail());
    }
}
