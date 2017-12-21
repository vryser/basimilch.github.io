---
title: Blog
description: Blog der Genossenschaft
permalink: /blog/
---

{% for post in site.posts %}
<div class="post-list-entry">
    <div class="post-list-thumbnail">
        <a href="{{ post.url }}">
            <div style="background-image: url('/images/{{post.header-image}}');"></div>
        </a>
    </div>
    <div class="post-list-info">
        <div class="post-list-title">
            <a href="{{ post.url }}">{{ post.title }}{% if post.subtitle %}, {{ post.subtitle }}{% endif %}</a>
        </div>
        <div class="post-list-date">
            {% include long_date_german date=post.date %}
        </div>
        <div class="post-list-excerpt">
            &#187;{{ post.content | strip_html | truncatewords: 20, '...' }}
        </div>
    </div>
</div>
{% endfor %}
