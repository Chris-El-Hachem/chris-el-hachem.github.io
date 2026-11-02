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
            <a class="col-md-3 floaty-card p-2" href="{{ post.url | relative_url }}">
                <div class="card p-2">
                    <img src="/assets/images/{{post.folder}}/{{post.thumbnail}}" class="img-fluid icon-img" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                    <h3 style="text-align: center;">{{ post.title }}</h3>
                </div>
            </a>
        {% endfor %}
    </div>
</div>
