package com.example.mymaven.bean;

import javax.enterprise.context.Dependent;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@Dependent
public class BeanComponents {
    private List<Bean> list;

    public BeanComponents(){
        this.list = new ArrayList<>();
    }

    public BeanComponents(List<Bean> list){
        this.list = list;
    }

    public List<Bean> getList() {
        return list;
    }

    public void setList(List<Bean> list) {
        this.list = list;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BeanComponents that = (BeanComponents) o;
        return Objects.equals(list, that.list);
    }

    @Override
    public int hashCode() {
        return Objects.hash(list);
    }

    @Override
    public String toString() {
        return "BeanComponents{" +
                "list=" + list +
                '}';
    }
}
