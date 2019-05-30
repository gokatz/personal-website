---
title: "EmberJS in 2019 (#EmberJS2019)"
date: "2019-05-30T10:00:32.169Z"
template: "post"
draft: false
slug: "/blog/emberjs-2019-roadmap/"
category: "Automation"
tags:
  - "extension"
  - "automation"
  - "CI/CD"
description: "My list of features and improvements that I love to see in Ember core framework in 2019"
---

# EmberJS in 2019 #EmberJS2019

This is the first time I'm participating in Ember roadmap blog post series.
I personally like Ember and it's reasonable abstractions to enable and increase productivity out of the box.

In order to write this blog, I curated a list of things wrt documentation and communication in the ecosystem that can be improved. I'm really surprised that most of those points are already addressed in the Guides and API docs. That's really a great direction. Thanks to all the Core teams and the contributors.

Below is a list of few things that I love to see in the core framework and surrounding ecosystems in the coming years.

## 1) Lightweight builds

One of the reasons Ember is not considered among modern frameworks (That's the bitter truth) is that we aim to build a full-fledged framework with all the batteries included and ended up as a fat baby. I personally love this nature of Ember as most of the web apps ended up adding these batteries at some point of development.

However, when a developer from other framework or a new javascript developer evaluates frameworks, the bundle size will be a predominant deciding factor. So, tree shaking the framework modules until that's being used will impact the above-said evaluation. I love to see these such builds being the default behavior in future Ember apps.

One personal case I came across is that, When starting a new internal project, despite Ember outperform most other popular frameworks like React or Vue in rendering speed, we ended up leaving Ember behind because of this fact.


## 2) Embroider

I personally think we were hanging too much with specialized build took that built around broccoli for a long time. Experimenting with existing popular toolkits like Webpack with Embroider is so cool and the features that other framework users enjoying such as HMR, Code Splitting at various levels (route, component, etc.,) can be brought in to the ember ecosystem with Embroider. I love to see embroider being the default built tool in 2019.

## 3) Docs around Ember CLI and Broccoli internals

Developing Addon that are not presntational is really a harder process in Ember for a log time. The actual [API documentation](https://ember-cli.com/api/) for CLI is really not helpful to accomplish a task easily (TBH, that's impossible). I usually refer other similar addons that utilizes these hooks and learn from them in order to implement my own logic. Since this involves pretty lower level stuff, proper documentation would be really great.


## 4) Developer Onboarding

I must accept that the onboarding of a new developer becomes much easier compared to an earlier day. But there are few little bumps I've seen personally in the past years.

### QueryParams

This might be a little thing but its really not intuitive. I've seen in new developers while working with query params is that it is not obvious to them that we may have to make an entry if different files and in different properties to make a query param work. I have to declare them in [controller](https://api.emberjs.com/ember/3.10/classes/Controller/properties/queryParams?anchor=queryParams) in `queryParams`  and tweak them in the corresponding [route](https://api.emberjs.com/ember/3.10/classes/Route/properties/queryParams?anchor=queryParams) file and TBH, I personally cannot justify why that is being implemented in such a way.

### Testing as a separate section in the tutorials

This might be an "Unpopular Opinion" but keeping the testing section separate in the tutorial might be a good option especially when a new developer tries out the framework for the first time. Usually, a new developer loves to see something on the screen as quickly as possible and most time I see many developers skipping this testing section and start over as after they are comfortable with the actual framework.

### Component composition and best practices

Basic preaching of topics like "why we need components?" and "How UI pieces can be built using different component compositions" and maybe few prevailing anti-patterns would be really helpful. I accept most of these topics are heavily opinionated towards the individual, but, it would great if we could document at least most acceptable one (maybe in a section named, "Advanced Component Concepts" or something similar)


## 5) Ember CLI Presets or Proejct template

I personally like the way Vue uses it's CLI. We can manually choose the features that we are going to use in our projects, like TS or JS, Class-based component or Classic Components, Need Service worker or not from the CLI itself and the supporting packages will be installed by the CLI for us. Then we can save this as a preset and can be used in future projects. In Ember, we use `features` json to modify these settings and it would be cool to have this integrated with the CLI service itself.

