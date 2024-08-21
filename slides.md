---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Web engineering course conclusion
info: |
 ## Web engineering course conclusion @Univ Rennes
  Master @istic

  Learn more at [istic](https://istic.univ-rennes.fr/)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Conclusion

The browser: a wonderful application container platform

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/barais/web.conclusion" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: center
---

# Commonalities between frameworks
 
usage of components

---

# Methodology to design your webApp
- Start With A Mock
- Step 1: Break The UI Into A Component Hierarchy
- Step 2: Build A Static Version in React, Vue.js, Angular 
- Step 3: Identify The Minimal (but complete) Representation Of UI State
- Step 4: Identify Where Your State Should Live
- Step 5: Design your data-flow and the interactions between components

---
layout: center
---

# Personal recommandation

- Use TypeScript for all frameworks, even on the server side

- Use a CDN to deploy your front apps: You can use [surge.sh](https://surge.sh/), github page or netlify  for deploying your SPA.

---

# Hybrid development

- Build apps with web tech you know and love
- Ionic (Agular)
- ReactNative
- OnSen UI (Framework agnostic)
  - Written in pure JavaScript.
  - Support JQuery, AngularJS, Angular, React, Vue


---

 # Hybrid development (Apache cordova)

 <div align="center"><img src="/hybrid2.png" width="90%"></div>  

---

<div align="center"><img src="/hybrid3.png" width="65%"></div>  


---

# Ionic architecture

<div align="center"><img src="/hybrid.jpg" width="90%"></div>  

---

### OnSen architecture

<div align="center"><img src="/hybrid1.png" width="90%"></div>  


---

### Links

- https://vuejs.org/
- https://facebook.github.io/react/
- https://angular.io/
- https://angularjs.org/
- http://getbootstrap.com/
- https://jquery.com/
- https://facebook.github.io/react-native/
- https://ionicframework.com/
- https://cordova.apache.org/
- https://onsen.io/
- https://books.ninja-squad.com/
