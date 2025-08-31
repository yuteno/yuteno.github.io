---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true

---

{% include base_path %}

A list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ base_path }}/sitemap.xml) available for digesting as well.

<h2>Pages</h2>
{% for post in site.pages %}
  {% include archive-single.html %}
{% endfor %}

{% assign published_posts = site.posts | where_exp: "post", "post.published != false" %}
{% if published_posts.size > 0 %}
<h2>Posts</h2>
{% for post in published_posts %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" %}
  {% assign collection_posts = collection.docs | where_exp: "doc", "doc.published != false" %}
  {% if collection_posts.size > 0 %}
    {% capture label %}{{ collection.label }}{% endcapture %}
    {% if label != written_label %}
    <h2>{{ label }}</h2>
    {% capture written_label %}{{ label }}{% endcapture %}
    {% endif %}
    {% for post in collection_posts %}
      {% include archive-single.html %}
    {% endfor %}
  {% endif %}
{% endunless %}
{% endfor %}
