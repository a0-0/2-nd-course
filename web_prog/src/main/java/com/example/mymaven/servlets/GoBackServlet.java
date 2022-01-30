package com.example.mymaven.servlets;

import com.example.mymaven.bean.Bean;
import com.example.mymaven.bean.BeanComponents;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GoBackServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        req.getSession().setAttribute("components", new BeanComponents());



        req.getRequestDispatcher("/index.jsp").forward(req,resp);
    }
}
