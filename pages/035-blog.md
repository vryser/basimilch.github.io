---
title: Blog
description: Blog der Genossenschaft
permalink: /blog/
---

{% for post in site.posts %}
<div class="post-list-entry">
    <a href="{{ post.url }}">
        <div class="post-list-thumbnail" style="background-image: url('/images/{{post.header-image}}');"></div>
    </a>
    <div class="post-list-date-title">
        <a href="{{ post.url }}">{{ post.title }}</a>, {% include short_date_german date=post.date %}
    </div>
    <div class="post-list-excerpt">
        {{ post.excerpt }}
    </div>
</div>
{% endfor %}
