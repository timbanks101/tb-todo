# To do list app

> Build in Vue js by Tim Banks

## Getting setup

``` bash
# install dependencies
npm install

# serve in dev mode with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build

# unit tests are run with
npm run test:unit

# end to end tests are run with
npm run test:e2e

# lint and prettify code with
npm run lint
```

## Acceptance Criteria

* List todo items in readable manner (grid, list, etc...) with the appropriate priority displayed
* Add a new item to the list with priority
* Remove an item from the list
* Clear the entire list

## UX Acceptance Criteria

* It should be clear for users how they add new items
* Once a user adds an item it should be clear where that item sits within their list
* Users should see clearly see the status of a items in the list
* Animation is used to give users clear feedback when list items are re-ordered


## Technical focus

Having a small amount of Vue.js experiance (one tiny app in production),
I wanted to use this as an oppertunity to learn some new things about Vue.

I find Vue really nice to work with, which is a personal trap for me because I
typically get excited and start off trying to do too much at once!

The technical things I really want to try / learn more about here:
* Vue cli 3 build in unit testing with jest. I have experiance of phpunit
testing for Drupal but really want to translate this to my JS apps.
* Vue cli 3 build in e2e testing with nightwatch. I have worked with QA teams to
better define user journey maps into test plans but have yet to write e2e tests
myself.

## User experiance focus

Numerous studies and theories over time can be found that show the role of lists
in helping people get things done.

> “You don't actually do a project; you can only do action steps related to it.
> When enough of the right action steps have been taken, some situation
> will have been created that matches your initial picture of the outcome
> closely enough that you can call it "done.”
― David Allen, Getting Things Done: The Art of Stress-Free Productivity

I want to make sure I keep my app fairly simple, intuative and smooth.
As much as it always like to build things that people will use, this is not
going to be one of those. There are loads of really great todo apps out there
so I will thing of this as a basic prototype to avoid over complicating it.

## Thing that would make this better

* Adding Speech api input for to do items, see: https://codepen.io/JamieCurnow/pen/ZoxVQg?editors=1010
* Persist list between sessions (local storage), see: https://travishorn.com/add-localstorage-to-your-vue-app-in-2-lines-of-code-56eb2c9f371b
* Create groups or categories for todos so they can be organised in groups or trello style swim lanes

## Cool Vue things I didn't use

* Nuxt; a go to for server side rendering so the app aces seo and performance measures
*
