---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
folder: "home"
banner: "ambiguous-banner-1.png"
permalink: "/"
---

<h1 style="text-align: center;">Hi, I'm Chris!</h1>
<p style="text-align: center;">Thanks for checking out my portfolio!</p>
<p style="text-align: center;">I'm a fourth-year Mechanical and Mechatronic Engineering student with a passion for programming and 3D printing.</p>
<p style="text-align: center;">Below are some projects I've worked on (click the cards to learn more):</p>

{% assign sorted_posts = site.posts | sort: 'coolness' | reverse %}

<div class="container-fluid p-0">
    <div class="row">
        {% for post in sorted_posts limit:3%}
            <a class="col-md-4 floaty-card" href="{{ post.url | relative_url }}">
                <div class="card p-2">
                    <h1>{{ post.title }}</h1>
                    <p>{{ post.summary }}</p>
                    <h2>Skills Used</h2>
                    <ul>
                        {% for item in post.skills %}
                            <li>{{ item }}</li>
                        {% endfor %}
                    </ul>
                    <img src="/assets/images/{{post.folder}}/{{post.thumbnail}}" class="img-fluid icon-img" style="aspect-ratio: 1.4; object-fit: cover" alt="...">
                </div>
            </a>
        {% endfor %}
    </div>
</div>
