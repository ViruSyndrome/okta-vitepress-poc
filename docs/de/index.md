---
layout: home

hero:
  name: "Vereinheitlichte Docs"
  text: "VitePress Architektur PoC"
  tagline: "Evaluierung einer einheitlichen Docs-as-Code-Architektur für Unternehmensplattformen."
  actions:
    - theme: brand
      text: Entwickler-Docs ansehen
      link: /de/guides/quickstart
    - theme: alt
      text: Hilfe-Center ansehen
      link: /de/help/user-management
---

## Architekturevaluierung
Dieser Proof of Concept demonstriert einen Evaluierungspfad zur Vereinheitlichung unterschiedlicher Dokumentations-Toolchains in einem einzigen SSG mit hoher Geschwindigkeit.

* **Build-Zeit-Benchmarks:** Ein lokaler VitePress-Build dieses Gerüsts wurde in **2,30 Sekunden** abgeschlossen. Im Vergleich zu alten Webpack-basierten SSGs (die bei Skalierung über 15 Minuten dauern können) reduzieren Vite-basierte Frameworks CI/CD-Engpässe radikal.
* **Evaluierung DITA vs. Markdown:** DITA-OT bietet beispiellose Stärken für die Unternehmenslokalisierung (XLIFF/Translation Memory) und die Wiederverwendung von Inhalten (conrefs). Es führt jedoch zu einer steilen Lernkurve. Dieser PoC bewertet die Kompromisse beim Übergang zu einem einheitlichen MDX-Ökosystem und prüft, ob moderne Markdown-Erweiterungen die Wiederverwendbarkeitsfunktionen von DITA ersetzen können, ohne die Lokalisierungsintegrität zu beeinträchtigen.

<br>
<hr>
<br>

*Haftungsausschluss: Dies ist ein unabhängiger Proof of Concept der Architektur, der von Vinod J Isaac zu Demonstrationszwecken für Vorstellungsgespräche erstellt wurde. Er ist nicht mit Okta, Inc. verbunden, wird nicht von Okta gewartet oder unterstützt.*
