package com.ynon.demos;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by ynonperek on 5/24/15.
 */
public class CitiesServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        List<City> cities = new ArrayList<City>();
        cities.add(new City("Paris", "http://cache.graphicslib.viator.com/graphicslib/thumbs674x446/2050/SITours/eiffel-tower-paris-moulin-rouge-show-and-seine-river-cruise-in-paris-150305.jpg"));
        cities.add(new City("London", "http://i.telegraph.co.uk/multimedia/archive/02423/london_2423609k.jpg"));
        cities.add(new City("Berlin", "http://www.jobs-berlin.org/wp-content/uploads/2013/04/Fotolia_45852498_S.jpg"));

        request.setAttribute("cities", cities);

        getServletConfig().getServletContext().getRequestDispatcher(
                "/WEB-INF/cities.jsp").forward(request,response);

    }
}
