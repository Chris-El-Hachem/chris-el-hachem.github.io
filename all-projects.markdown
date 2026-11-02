---
layout: default
title: "All Projects"
folder: "all-projects"
banner: "ambiguous-banner-2.png"
permalink: /all-projects/
---

<h1>All Projects</h1>

<div class="container-fluid p-0">
    <div class="row">
        {% for post in site.posts %}
            <div class="floaty-card col-xs-6 col-sm-6 col-md-4 col-lg-3">
                <a href="{{ post.url | relative_url }}" class="thumbnail">
                    <img src="/assets/images/{{post.folder}}/{{post.thumbnail}}" class="img-fluid icon-img" alt="...">
                    <p style="text-align: center;">{{post.title}}</p>
                </a>
            </div>
        {% endfor %}
    </div>
</div>
