---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---


## International Conferences
  1. Yosuke Ueno, Takayuki Hoshi, Atsushi Hiyama, and Masahiko Inami
    Virtual Experiments of Augmentation of Transparent Cockpit
  2. List item two
  3. List item three
  4. List item four




{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
