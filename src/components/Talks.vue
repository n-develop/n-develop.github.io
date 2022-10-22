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
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="far fa-calendar-alt highlight-color"></i> Upcoming Events
          </p>
          <p>No upcoming events</p>

          <p class="title is-6">
            <i class="fa fa-calendar-check highlight-color"></i> Past Events
          </p>
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
                <td>
                  Real-Time Communication Made Easy - Eine Einführung in SignalR
                </td>
              </tr>
              <tr>
                <td>2021-06-29</td>
                <td>Developer Week '21</td>
                <td>
                  Why "real world" TDD is hard and what you can do about it
                </td>
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
                <td>
                  The broken windows and burning cars of software development
                </td>
              </tr>
              <tr>
                <td>2019-04-10</td>
                <td>Hamburger Technology Meetup</td>
                <td>
                  Why "real world" TDD is hard and what you can do about it
                </td>
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
            <p class="title is-4">
              Learning micro-steps with "test && commit || revert"
            </p>
            <p class="subtitle is-6">
              Even if you don't use it every day, you as a developer should be
              able to take "micro-steps" when developing the requested
              functionality. Just like most other skills, you need to practice
              this technique. "test && commit || revert" (TCR) is a great way to
              enforce micro-steps and sharpen your skills. In the course of this
              talk, we will explore the ideas behind "test && commit || revert",
              the new programming workflow invented by Kent Beck, Oddmund
              Str&oslash;mme, Lars Barlindhaug, and Ole Johannessen. After a
              short introduction we will dive right into an example. We will see
              why "losing code" can be a good thing and experience the beauty of
              "the test suite that is always green". But we will also loot at
              the limitations and problems of TCR.
            </p>
          </div>
        </div>
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="fa fa-book highlight-color"></i> Topics
          </p>
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
    <!-- Talk: FeatureManagement in .NET -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">FeatureManagement in .NET</p>
            <p class="subtitle is-6">
              Continous Integration and Continous Delivery are getting more and
              more popular. There are companies who will the new employees push
              changes to production on Day 1. Sounds easy, doesn't it? But if
              every commit/merge to "master" leads to an update on production,
              what do you do with your unfinished feature? Or the feature, which
              has not gotten through QA, yet?
            </p>
          </div>
        </div>
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="fa fa-book highlight-color"></i> Topics
          </p>
          <div class="tags are-medium">
            <span class="tag">Feature Toggles</span>
            <span class="tag">Branching Strategy</span>
            <span class="tag">.NET implementations</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: FeatureManagement in .NET -->
    <!-- Talk: Introduction to ASP.NET Core SignalR -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              Introduction to ASP.NET Core SignalR (Workshop)
            </p>
            <p class="subtitle is-6">
              Real-time communication is used in a lot of applications. In this
              workshop, we will go through the steps that it takes to use
              SignalR in your ASP.NET Core application.
            </p>
          </div>
        </div>
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="fa fa-book highlight-color"></i> Topics
          </p>
          <div class="tags are-medium">
            <span class="tag">SignalR</span>
            <span class="tag">ASP.NET Core</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Introduction to ASP.NET Core SignalR -->
    <!-- Talk: The broken windows and burning cars of software development -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              The broken windows and burning cars of software development
            </p>
            <p class="subtitle is-6">
              It does not matter if you are a Senior Software Architect with a
              lot of experience or are junior dev who just started his second
              job. The truth is you might be still responsible for bad code
              written at companies, you no longer work for. In this talk we will
              explore the basic psychology behind the "Broken Window Theory" and
              see, why it relates to software development so well.
            </p>
          </div>
        </div>
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="fa fa-book highlight-color"></i> Topics
          </p>
          <div class="tags are-medium">
            <span class="tag">Clean Code</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: The broken windows and burning cars of software development -->
    <!-- Talk: Why "real world" TDD is hard and what you can do about it -->
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              Why "real world" TDD is hard and what you can do about it
            </p>
            <p class="subtitle is-6">
              Learning Test-Driven Development (TDD) is hard. There, I said it!
              But why is hard? And what can you do to make TDD less frustrating
              to learn/use? In this talk you will get to know the "missing
              pieces" of most TDD introductions. You will learn, why "red -
              green - refactor" isn't enough and how dependency injection and
              other techniques will help you write testable code.
            </p>
          </div>
        </div>
        <hr />
        <div class="content">
          <p class="title is-6">
            <i class="fa fa-book highlight-color"></i> Topics
          </p>
          <div class="tags are-medium">
            <span class="tag">TDD</span>
            <span class="tag">Test-Driven Development</span>
            <span class="tag">Dependency Injection</span>
            <span class="tag">Design Patterns</span>
          </div>
        </div>
      </div>
    </div>
    <!-- / Talk: Why "real world" TDD is hard and what you can do about it -->
  </div>
  <!-- / Talks / Workshops  -->
</template>

<script>
export default {
  name: 'Talks',
};
</script>

<style scoped>
</style>
