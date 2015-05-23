package com.ynon.demos;
/**
 * Created by ynonperek on 5/22/15.
 */
public class City {
    City(String name, String img) {
        _name = name;
        _img = img;
    }

    public String getName() {
        return _name;
    }

    public String getImg() {
        return _img;
    }

    private String _name;
    private String _img;

}
