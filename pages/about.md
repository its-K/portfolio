---
layout: page
title: About
permalink: /about/
weight: 1
---

# **About Me**

Hi I am **{{ site.author.name }}** :wave:,<br>

<b>When I was born I was so Suprised that I Didn't Talk for a Year and Half !</b>

A Developer based out of Coimbatore. I got passionate towards Technology and entered into Coding. I have worked on more projects therby gaining teamwork and leadership skills.

<div class="row">
{% include about/skills.html title="Interests" source=site.data.interests %}
{% include about/skills.html title="Programming Skills" source=site.data.programming-skills %}
{% include about/skills.html title="Other Skills" source=site.data.other-skills %}
</div>

<div class="row">
{% include about/timeline.html %}
</div>
