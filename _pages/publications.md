---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<br><br>

# Talks
{% for post in site.talks reversed %}
  {% include archive-single.html %}
{% endfor %}