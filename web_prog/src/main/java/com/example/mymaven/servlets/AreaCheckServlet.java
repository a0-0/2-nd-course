package com.example.mymaven.servlets;

import com.example.mymaven.bean.Bean;
import com.example.mymaven.bean.BeanComponents;

import javax.inject.Inject;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

public class AreaCheckServlet extends HttpServlet {
    @Inject
    private BeanComponents beanComponents;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        long startTime = System.nanoTime();

        String xS = req.getParameter("xval").replace(',', '.');
        String yS = req.getParameter("yval").replace(',', '.');
        String rS = req.getParameter("rval").replace(',', '.');

        if (validateFields(xS, yS, rS)){
            double x = Double.parseDouble(xS);
            double y = Double.parseDouble(yS);
            double r = Double.parseDouble(rS);

            boolean isHit = checkHit(x, y, r);

            OffsetDateTime currentTime = OffsetDateTime.now();
            String currentTimeS;
            try {
                currentTime = currentTime.minusMinutes(Long.parseLong(req.getParameter("time")));
                currentTimeS = currentTime.format(DateTimeFormatter.ofPattern("HH:mm:ss"));
            } catch (Exception exception) {

                currentTimeS = "HH:mm:ss";
            }

            String executionTime = String.valueOf(System.nanoTime() - startTime);

            BeanComponents beanComponents = (BeanComponents) req.getSession().getAttribute("components");
//            if (beanComponents == null) beanComponents = new BeanComponents();
            beanComponents.getList().add(
                    new Bean(x,y,r,currentTimeS, executionTime, isHit)
            );

            req.getSession().setAttribute("components", beanComponents);

            req.getRequestDispatcher("/area.jsp").forward(req, resp);
        } else {
            req.getRequestDispatcher("/index.jsp").forward(req, resp);

        }
//        req.getSession().setAttribute("update_button", "true");




    }

    private boolean validateX(String xString){
        Double xValues[] = {-5.0, -4.0, -3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0};
        try {
            double xValue = Double.parseDouble(xString);
            return Arrays.asList(xValues).contains(xValue);
        } catch (NumberFormatException e){
            return false;
        }
    }

    private boolean validateY(String yString){
        try{
            double yValue = Double.parseDouble(yString);
            return (yValue < 5 && yValue > -3);
        } catch (NumberFormatException e){
            return false;
        }
    }

    private boolean validateR(String rString){
        try {
            double rValue = Double.parseDouble(rString);
            return (rValue >= 2 && rValue <= 5);
        } catch (NumberFormatException e){
            return false;
        }
    }

    private boolean validateFields(String x, String y, String r){
        return validateX(x) && validateR(r) && validateY(y);
    }

    private boolean checkCircle(double x, double y, double r){
        return x <= 0 && y <= 0 && Math.sqrt(x*x + y*y) <= r;
    }

    private boolean checkRectangle(double xValue, double yValue, double rValue) {
        return xValue >= 0 && yValue >= 0 && xValue <= rValue && yValue <= rValue;
    }

    private boolean checkTriangle(double xValue, double yValue, double rValue) {
        return xValue <= 0 && yValue >= 0 && yValue <= xValue + rValue/2;
    }

    private boolean checkHit(double x, double y, double r){
        return checkCircle(x, y, r) || checkRectangle(x, y, r) || checkTriangle(x, y, r);
    }
}
