---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

# Publications

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

# Talks
{% for post in site.talks reversed %}
  {% include archive-single.html %}
{% endfor %}