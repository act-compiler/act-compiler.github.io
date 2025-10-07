---
layout: page
title: Tutorials
permalink: /tutorials/
nav: true
nav_order: 2
---

<div class="projects">

{% assign sorted_projects = site.tutorials | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include tutorials.liquid %}
    {% endfor %}
  </div>

</div>
