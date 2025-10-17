package com.springboot.shoppy_fullstack_app.service;

import com.springboot.shoppy_fullstack_app.dto.Member;
import com.springboot.shoppy_fullstack_app.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service //memberServiceImpl
public class MemberServiceImpl implements MemberService{    //memberService memberService

    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }
    @Override
    public int signup(Member member) {
        return memberRepository.save(member);
    }
    @Override
    public boolean idCheck(String id) {
        boolean result = true;
        Long count = memberRepository.findById(id);
        System.out.println("count-->" + count);
        if(count == 0) result = false;
        return result;
    }
//    @Override
//    public Long login(Member member) {
//        return memberRepository.matchByIdPwd(member.getId(),member.getPwd());
//    }
    @Override
    public boolean matchCheck (String id, String pwd) {
        boolean result = true;
        Long count = memberRepository.matchByIdPwd(id,pwd);
        if (count == 1) result = false;
        return result;
    }
}
