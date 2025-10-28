package com.springboot.shoppy_fullstack_app.repository;

import com.springboot.shoppy_fullstack_app.dto.KakaoPay;
import org.springframework.stereotype.Repository;

@Repository
public class JdbcTemplateOrderRepository implements OrderRepository{
    public int saveOrders(KakaoPay kakaoPay){
        String sql = """
                insert into orders(
                	order_code, member_id, shipping_fee, discount_amount, total_amount, receiver_name, 
                	receiver_phone, zipcode, address1, address2, memo, odate
                    )
                 values(?,?,?,?,?,?,?,?,?,?,?,now())
                """;
        Object[] params = {
                kakaoPay.getOrderId(),
                
        };
        return 0;
    }
    public int saveOrderDetail(KakaoPay kakaoPay){
        String sql_orders
        return 0;
    }
}
