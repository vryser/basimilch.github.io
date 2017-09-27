---
title: Kontakt
description: Adresse und Ortsplan
permalink: /kontakt/
---

**{{ site.info.name }}**<br>
{{ site.info.subtitle }}

{{ site.info.address.street }},<br>
{{ site.info.address.plz }} {{ site.info.address.city }}

IBAN: <code>{{ site.info.iban }}</code><br>

{% include email_link %}

{% include info-address-map.html %}
