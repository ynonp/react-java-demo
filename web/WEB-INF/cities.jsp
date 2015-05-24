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

<main></main>

<script>
    window.__APP_DATA = JSON.parse('${props}');
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js"></script>
<script src="/js/bundle.js"></script>

</body>
</html>
