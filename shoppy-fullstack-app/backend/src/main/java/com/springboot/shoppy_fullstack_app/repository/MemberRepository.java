package com.springboot.shoppy_fullstack_app.repository;

import com.springboot.shoppy_fullstack_app.dto.Member;

public interface MemberRepository {
    public int save(Member member);
    public Long findById(String id);
    public Long matchByIdPwd(String id, String pwd);

}
