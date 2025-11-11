de)
		on delete cascade   on update cascade,
	constraint fk_product_order_detail foreign key(pid)	references product(pid)
		on delete cascade  on update cascade
);

show tables;
desc order_detail;

select * from view_cartList;

desc orders;

insert into orders(
	order_code, member_id, shipping_fee, discount_amount, total_amount, receiver_name, receiver_phone, zipcode, address1, address2, memo, odate
    )
 values();
 
 select
	:orderCode, pid, name as pname, size, qty, totalPrice as pid_total_price,
    :discount
    from view_cartlist;
    
    set SQL_SAFE_UPDATES = 0;
    delete  from orders;
    delete  from order_detail;
select * from order_detail;
select * from orders;
select * from cart;
select * from view_cartList
where cid in (3,4,5);

select ifnull(Max(pwd), null) as pwd from 