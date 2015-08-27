---
layout: post
title: "Wikipedia Love"
cover:
date:   2015-08-27 23:58:00
categories: d3 wikipedia love languages
custom_div_id: love
custom_css: tip
custom_js:
- d3.min
- d3-tip
- rawwikis
- love
---
Who loves Wikipedia? Of course, I do. But I wanted to see roughly which language's Wiki had the most love, proportionally to the number of speakers. Of course, there are a number of other metrics to go by, [depth or number of active users](https://meta.wikimedia.org/wiki/List_of_Wikipedias#Notes) being notable, but, for simplicity, raw numbers will suffice. I ended up choosing a *Nationalencyklopedin*--a Swedish encyclopedia--dataset for native language usage numbers, due to its fullness of language statistics, available on [this page](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers#Nationalencyklopedin). I then used [Ethnologue](https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers#Ethnologue_.282013.2C_17th_edition.29) numbers for English, French, German, Spanish, Persian, Mandarin, and Russian because the difference between total and native speakers was rather great. I believe even these rough statistics provide a telling story. The color intensity shows how a language proportionally compared to its peers in terms of number of articles divided by number of speakers.
{% highlight js %}
{% endhighlight %}
