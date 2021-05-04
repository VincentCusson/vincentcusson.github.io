---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

{% if site.author.googlescholar %}
  You can also find some of my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.
{% endif %}
<br><br>

# Talks
{% for post in site.talks reversed %}
  {% include archive-single.html %}
{% endfor %}