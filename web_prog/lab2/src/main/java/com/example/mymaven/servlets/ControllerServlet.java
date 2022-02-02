package com.example.mymaven.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

            if (request.getParameter("clear") != null && request.getParameter("clear").equals("true")) {
            System.out.println(2);
            getServletContext().getNamedDispatcher("ClearTableServlet").forward(request, response);

        } else if (request.getParameter("xval") != null && request.getParameter("yval") != null &&
                request.getParameter("rval") != null) {
            System.out.println(3);
            getServletContext().getNamedDispatcher("AreaCheckServlet").forward(request, response);

        } else {
                System.out.println(4);
                request.getRequestDispatcher("/index.jsp").forward(request, response);
            }

    }


}
