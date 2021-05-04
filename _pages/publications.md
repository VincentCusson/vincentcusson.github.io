---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% for post in site.publications reversed %}
  {% include single.html %}
{% endfor %}

<br><br>

# Talks
{% for post in site.talks reversed %}
  {% include single.html %}
{% endfor %}