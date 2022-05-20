<template>
  <!-- Talks / Workshops  -->
  <div class="box topic">
    <h2 class="title is-3">
      <i class="fa fa-chalkboard-teacher highlight-color"></i> Talks / Workshops
    </h2>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Events</p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6">
            <i class="far fa-calendar-alt highlight-color"></i> Upcoming Events
          </p>
          <p>
            <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Talk / Workshop</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
          </p>

          <p class="title is-6"><i class="fa fa-calendar-check highlight-color"></i> Past Events</p>
          <table class="table is-striped is-hoverable is-fullwidth">
            <thead>
            <tr>
              <th>Date</th>
              <th>Event</th>
              <th>Talk / Workshop</th>
            </tr>
            </thead>
            <tbody>
              <tr>
              <td>2022-05-18</td>
              <td>Magdeburger Developer Days</td>
              <td>Getting into iOS Development as a Backend Developer</td>
            </tr>
            <tr>
              <td>2022-05-18</td>
              <td>Magdeburger Developer Days</td>
              <td>Real-Time Communication Made Easy - Eine Einführung in SignalR</td>
            </tr>
            <tr>
              <td>2021-06-29</td>
              <td>Developer Week '21</td>
              <td>Why "real world" TDD is hard and what you can do about it</td>
            </tr>
            <tr>
              <td>2019-12-07</td>
              <td>Technology Conference Hamburg</td>
              <td>Feature Management with examples in .NET</td>
            </tr>
            <tr>
              <td>2019-12-07</td>
              <td>Technology Conference Hamburg</td>
              <td>Introduction to ASP.NET Core SignalR (Workshop)</td>
            </tr>
            <tr>
              <td>2018-12-12</td>
              <td>Hamburger Technology Meetup</td>
              <td>The broken windows and burning cars of software development</td>
            </tr>
            <tr>
              <td>2019-04-10</td>
              <td>Hamburger Technology Meetup</td>
              <td>Why "real world" TDD is hard and what you can do about it</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Talk: Learning micro-steps with TCR -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Learning micro-steps with "test && commit || revert"</p>
            <p class="subtitle is-6">
              Even if you don't use it every day, you as a developer should be able to take
              "micro-steps"
              when developing the requested functionality. Just like most other skills, you need
              to practice this technique. "test && commit || revert" (TCR) is a great way to enforce
              micro-steps and sharpen your skills.

              In the course of this talk, we will explore the ideas behind
              "test && commit || revert",
              the new programming workflow invented by Kent Beck, Oddmund Str&oslash;mme,
              Lars Barlindhaug, and Ole Johannessen.
              After a short introduction we will dive right into an example. We will see why
              "losing code"
              can be a good thing and experience the beauty of
              "the test suite that is always green".
              But we will also loot at the limitations and problems of TCR.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">TCR</span>
            <span class="tag">Testing</span>
            <span class="tag">Micro-steps</span>
            <span class="tag">Unit Testing</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Learning micro-steps with TCR -->
    <!-- Talk: Unit-Testing Your Blazor Frontend -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Unit-Testing Your Blazor Frontend</p>
            <p class="subtitle is-6">
              The importance of an automated test suite probably doesn't need to be emphasized
              these days. And with Blazor, even classic backend developers can develop functional
              frontends today. While most backend developers are familiar with writing unit tests
              for your business logic, writing tests for your frontend is a whole different story.
              In this talk, we will see how easy it can be to write helpful tests for your
              Blazor components.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">.NET</span>
            <span class="tag">Blazor</span>
            <span class="tag">Unit Testing</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Unit-Testing Your Blazor Frontend -->
    <!-- Talk: Blazor: Beyond the ToDo App -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Blazor: Beyond the ToDo App</p>
            <p class="subtitle is-6">
              There are a lot of great tutorials out there to get started with Blazor. And they all
              help developers get into Blazor. But not every application is a simple ToDo app.
              In todays enterprise applications we rarely write all the code in a single
              ASP.NET Core project.

              In this talk, we will go beyond the popular ToDo app example. We will create a small
              app that separates the API and the UI in different projects. This lays the foundation
              for more complex applications. We will also use "Project Tye" to run the projects as
              Docker containers and simulate a microservice architecture.
              There are only a few slides
              used for the introduction. The rest of the time will be spent in the code to
              see how more complex solutions can be developed using Blazor.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">.NET</span>
            <span class="tag">Blazor</span>
            <span class="tag">ASP.NET Core</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Blazor: Beyond the ToDo App -->
    <!-- Talk: Server-side Blazor -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Server-side Blazor in Action</p>
            <p class="subtitle is-6">
              Not everybody loves JavaScript. Don't get me wrong. I don't hate JavaScript.
              But I love C#.
              I always dreamed about writing my frontend code in C#. Tell you what? It's possible.
              Even without WebAssembly.

              In this talk, we will dive into the the world of server-side Blazor.
              After a short walk through the default project template, we will create a custom
              component.
              There are only a few slides used for the introduction. The rest of the time will be
              spent in
              the code to see server-side Blazor development in action.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">Blazor</span>
            <span class="tag">Server-Side Rendering</span>
            <span class="tag">ASP.NET Core</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Server-side Blazor -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">FeatureManagement in .NET</p>
            <p class="subtitle is-6">
              Continous Integration and Continous Delivery are getting more and more popular.
              There are companies who will the new employees push
              changes to production on Day 1. Sounds easy, doesn't it? But if every commit/merge
              to "master" leads to an update on production,
              what do you do with your unfinished feature? Or the feature, which has not gotten
              through QA, yet?
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">Feature Toggles</span>
            <span class="tag">Branching Strategy</span>
            <span class="tag">.NET implementations</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Introduction to ASP.NET Core SignalR (Workshop)</p>
            <p class="subtitle is-6">
              Real-time communication is used in a lot of applications. In this workshop,
              we will go through the steps that it takes to use SignalR in your ASP.NET Core
              application.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">SignalR</span>
            <span class="tag">ASP.NET Core</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">The broken windows and burning cars of software development</p>
            <p class="subtitle is-6">
              It does not matter if you are a Senior Software Architect with a lot of experience
              or are junior dev who just started his second job.
              The truth is you might be still responsible for bad code written at companies, you
              no longer work for.
              In this talk we will explore the basic psychology behind the "Broken Window Theory"
              and see, why it relates to software development so well.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">Clean Code</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">Why "real world" TDD is hard and what you can do about it</p>
            <p class="subtitle is-6">
              Learning Test-Driven Development (TDD) is hard. There, I said it!
              But why is hard? And what can you do to make TDD less frustrating to learn/use?

              In this talk you will get to know the "missing pieces" of most TDD introductions.
              You will learn, why "red - green - refactor" isn't enough
              and how dependency injection and other techniques will help you write testable code.
            </p>
          </div>
        </div>
        <hr/>
        <div class="content">
          <p class="title is-6"><i class="fa fa-book highlight-color"></i> Topics</p>
          <div class="tags are-medium">
            <span class="tag">TDD</span>
            <span class="tag">Test-Driven Development</span>
            <span class="tag">Dependency Injection</span>
            <span class="tag">Design Patterns</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- / Talks / Workshops  -->
</template>

<script>
export default {
  name: "Talks",
};
</script>

<style scoped>
</style>
