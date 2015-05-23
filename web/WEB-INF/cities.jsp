<%--
  Created by IntelliJ IDEA.
  User: ynonperek
  Date: 5/22/15
  Time: 13:15
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
  <title></title>
  <style>
    ul {
      list-style:none;
      margin:0;
      padding:0;
      padding-bottom:10px;
    }
    .cityButton {
      padding: 20px;
      margin-right: 10px;
      background: lightblue;
      text-align:center;
      width:20%;
      display:inline-block;
      cursor:pointer;
    }
    .cityButton a {
      text-decoration: none;
      cursor:pointer;
    }
    .cityButton.active {
      background: darkorange;
      color: white;
    }
  </style>
</head>
<body>
<h1>React Demo</h1>

<h2>Pick a city to see its picture</h2>

<ul>
    <c:forEach var="city" items="${cities}">
        <li class="cityButton" data-img="${city.getImg()}"><a><c:out value="${city.getName()}"/></a></li>
    </c:forEach>
</ul>
<img id="canvas" />
<script>
    var img = document.querySelector('#canvas');
    var buttons = document.querySelectorAll('.cityButton');
    var prevActive;

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            img.src = this.dataset.img;
            this.classList.add('active');
            if (prevActive && prevActive !== this) {
                prevActive.classList.remove('active');
            }
            prevActive = this;
        });
    }
</script>
</body>
</html>
