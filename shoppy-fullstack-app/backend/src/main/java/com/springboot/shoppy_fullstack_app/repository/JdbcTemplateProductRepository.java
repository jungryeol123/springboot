package com.springboot.shoppy_fullstack_app.repository;

import com.springboot.shoppy_fullstack_app.dto.Product;
import com.springboot.shoppy_fullstack_app.dto.ProductDetailinfo;
import com.springboot.shoppy_fullstack_app.dto.ProductQna;
import com.springboot.shoppy_fullstack_app.dto.ProductReturn;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class JdbcTemplateProductRepository implements ProductRepository{
    private JdbcTemplate jdbcTemplate;

    public JdbcTemplateProductRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Product> findAll() {
        String sql = "select pid, name, price, info, rate, image, imgList from product";
        List<Product> list = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Product.class));
        return list;
    }
    @Override
    public Product findByPid (int pid) {
        String sql = "select pid, name, price, info, rate, image, imgList from product where pid = ?";
        Product product = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Product.class), pid);
        return product;
    }
    @Override
    public ProductDetailinfo findDetailinfo(int pid) {
        String sql = "select pid, did, title_en as titleEn, title_ko as titleKo, list from product_detailinfo where pid = ?";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(ProductDetailinfo.class), pid);

    }
    @Override
    public List<ProductQna> findQna(int pid) {
        String sql = "select qid, title, content, is_complete as isComplete, is_lock as isLock, id, pid, cdate from product_qna where pid = ?";
        List<ProductQna> product = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(ProductQna.class), pid);
        return product;
    }
    @Override
    public ProductReturn findReturn() {
        String sql = "select rid, title, description, list from product_return";
        ProductReturn product  = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(ProductReturn.class));
        return product;
    }
}
