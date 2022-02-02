package com.example.mymaven.bean;

import javax.enterprise.context.Dependent;
import java.io.Serializable;
import java.util.Objects;

public class Bean implements Serializable {
    private double xValue;
    private double yValue;
    private double rValue;
    private String currentTime;
    private String executionTime;
    private boolean hit;

    public Bean(){};

    public Bean(
            double xValue,
            double yValue,
            double rValue,
            String currentTime,
            String executionTime,
            boolean hit
    ){
        this.setxValue(xValue);
        this.setyValue(yValue);
        this.setrValue(rValue);
        this.setCurrentTime(currentTime);
        this.setExecutionTime(executionTime);
        this.setHit(hit);
    }


    public double getxValue() {
        return xValue;
    }

    public void setxValue(double xValue) {
        this.xValue = xValue;
    }

    public double getyValue() {
        return yValue;
    }

    public void setyValue(double yValue) {
        this.yValue = yValue;
    }

    public double getrValue() {
        return rValue;
    }

    public void setrValue(double rValue) {
        this.rValue = rValue;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public String getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(String executionTime) {
        this.executionTime = executionTime;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bean bean = (Bean) o;
        return Double.compare(bean.xValue, xValue) == 0 && Double.compare(bean.yValue, yValue) == 0 && Double.compare(bean.rValue, rValue) == 0 && hit == bean.hit && Objects.equals(currentTime, bean.currentTime) && Objects.equals(executionTime, bean.executionTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(xValue, yValue, rValue, currentTime, executionTime, hit);
    }

    @Override
    public String toString() {
        return "Bean{" +
                "xValue=" + xValue +
                ", yValue=" + yValue +
                ", rValue=" + rValue +
                ", currentTime='" + currentTime + '\'' +
                ", executionTime='" + executionTime + '\'' +
                ", hit=" + hit +
                '}';
    }
}
