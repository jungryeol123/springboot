package com.springboot.shoppy_fullstack_app.service;

import com.springboot.shoppy_fullstack_app.dto.Member;
import com.springboot.shoppy_fullstack_app.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service //memberServiceImpl
@Transactional //:DB가 auto-commit 모드이면 생략가능
public class MemberServiceImpl implements MemberService{    //memberService memberService


    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public int signup(Member member) {
        String encodePwd = passwordEncoder.encode(member.getPwd()); //UUID타입으로 생성됨
        member.setPwd(encodePwd);
//        System.out.println("encodePwd-->" + encodePwd);
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
    public boolean login (Member member) {
        String encodePwd = memberRepository.loginCheck(member.getId());
        boolean result = passwordEncoder.matches(member.getPwd(),encodePwd);
        if (idCheck(member.getId()) ) {
            return false;
        } else {
            return !result;
        }
    }
}
