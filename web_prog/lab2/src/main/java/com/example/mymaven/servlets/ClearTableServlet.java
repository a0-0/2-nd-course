package com.example.mymaven.servlets;

import com.example.mymaven.bean.Bean;
import com.example.mymaven.bean.BeanComponents;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ClearTableServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        req.getSession().setAttribute("components", new BeanComponents());
        BeanComponents beans = (BeanComponents) req.getSession().getAttribute("components");
        if (beans == null) beans = new BeanComponents();
        beans.getList().clear();
        req.getSession().setAttribute("components", beans);


        getServletContext().getRequestDispatcher("/index.jsp").forward(req,resp);
    }
}
