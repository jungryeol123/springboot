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
    public void signup(Member member) {
        System.out.println("memberService.signp --> ");
        System.out.println(member.getId());
        System.out.println(member.getPwd());
        System.out.println(member.getName());
        System.out.println(member.getPhone());
        System.out.println(member.getEmail());

        memberRepository.save(member);
    }
}
