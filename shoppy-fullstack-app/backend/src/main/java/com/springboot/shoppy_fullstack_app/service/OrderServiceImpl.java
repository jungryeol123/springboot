package com.springboot.shoppy_fullstack_app.service;

import com.springboot.shoppy_fullstack_app.dto.KakaoPay;
import com.springboot.shoppy_fullstack_app.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
//@Transactional
public class OrderServiceImpl implements OrderService{
    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public int save(KakaoPay kakaoPay) {

        orderRepository.saveOrders(kakaoPay);
        orderRepository.saveOrderDetail(kakaoPay);
        return 0;
    }

//    private final OrderRepository orderRepository;
//    private final PaymentRepository paymentRepository;
//
//    @Transactional
//    public void createOrder(Order order, Payment payment) {
//        orderRepository.save(order);
//        paymentRepository.save(payment);
//
//        if (payment.getAmount() <= 0) {
//            throw new IllegalArgumentException("결제 금액이 0원 이하입니다.");
//        }
//    }
}
