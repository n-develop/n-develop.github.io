<template>
  <!-- About me  -->
  <div class="column is-3-tablet is-full-mobile">
    <div class="box is-hidden-tablet">
      <figure class="image is-170x170 mobile-profile-image">
        <img src="../assets/images/lars.jpg" alt="Profile image Lars Richter">
      </figure>
      <h4 class="title is-4">Hi, I'm Lars Richter</h4>
      <h5 class="subtitle is-6 has-text-grey">Team Lead, iOS Developer, Father &amp; Husband</h5>

      <p>
        I'm a team lead and iOS developer located in Hamburg, Germany.
        I love working with code. It doesn't matter if it's a greenfield project or a legacy
        codebase.
        I'm passionate about clean code, software craftsmanship, unit testing and a lot of other
        stuff.
      </p>
      <p>
        My current focus is on <strong>code quality</strong>. Static code analysis,
        unit and integration testing,
        as well as automated UI tests are some of my daily tools and practices.
        After all, code quality is a key factor
        in the development of maintainable software systems.
      </p>
      <p>
        You can reach me on one of my social media accounts, which you can find below.
      </p>
      <p>
        <a class="title is-3 social-account twitter" href="https://twitter.com/n_develop"
           rel="noreferrer" target="_blank">
          <i class="fab fa-twitter" title="Lars Richter's Twitter Profile"></i>
        </a>
        <a class="title is-3 social-account devto" href="https://dev.to/n_develop" rel="noreferrer"
           target="_blank">
          <i class="fab fa-dev" title="Lars Richter's DEV Profile"></i>
        </a>
        <a class="title is-3 social-account github" href="https://github.com/n-develop/"
           rel="noreferrer" target="_blank">
          <i class="fab fa-github" title="Lars Richter's GitHub profile"></i>
        </a>
        <a class="title is-3 social-account xing" href="https://www.xing.com/profile/Lars_Richter111"
           rel="noreferrer" target="_blank">
          <i class="fab fa-xing" title="Lars Richter's Xing Profile"></i>
        </a>
        <a class="title is-3 social-account linkedin" rel="noreferrer" target="_blank"
           href="https://www.linkedin.com/in/lars-richter-667857165/">
          <i class="fab fa-linkedin-in" title="Lars Richter's LinkedIn profile"></i>
        </a>
      </p>
    </div>
    <div class="box topic is-hidden-mobile">
      <figure class="image profile-image">
        <img src="../assets/images/lars.jpg" alt="Profile image Lars Richter">
      </figure>
      <div class="content">
        <h4 class="title is-4">Hi, I'm Lars Richter</h4>
        <h5 class="subtitle is-6 has-text-grey">.NET Developer, Father & Husband</h5>

        <p>
          I'm a team lead and iOS developer located in Hamburg, Germany.
          I love working with code. It doesn't matter if it's a greenfield project or a
          legacy codebase.
          I'm passionate about clean code, software craftsmanship, unit testing and a lot of
          other stuff.
        </p>
        <p>
          My current focus is on <strong>code quality</strong>. Static code analysis,
          unit and integration testing,
          as well as automated UI tests are some of my daily tools and practices.
          After all, code quality is a key factor
          in the development of maintainable software systems.
        </p>
        <p>
          You can reach me on one of my social media accounts, which you can find below.
        </p>
        <p>
          <a class="title is-3 social-account twitter" href="https://twitter.com/n_develop"
             rel="noreferrer" target="_blank">
            <i class="fab fa-twitter" title="Lars Richter's Twitter Profile"></i>
          </a>
          <a class="title is-3 social-account devto" href="https://dev.to/n_develop" rel="noreferrer"
             target="_blank">
            <i class="fab fa-dev" title="Lars Richter's DEV Profile"></i>
          </a>
          <a class="title is-3 social-account github" href="https://github.com/n-develop/"
             rel="noreferrer" target="_blank">
            <i class="fab fa-github" title="Lars Richter's GitHub profile"></i>
          </a>
          <a class="title is-3 social-account xing" href="https://www.xing.com/profile/Lars_Richter111"
             rel="noreferrer" target="_blank">
            <i class="fab fa-xing" title="Lars Richter's Xing Profile"></i>
          </a>
          <a class="title is-3 social-account linkedin" rel="noreferrer" target="_blank"
             href="https://www.linkedin.com/in/lars-richter-667857165/">
            <i class="fab fa-linkedin-in" title="Lars Richter's LinkedIn profile"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
  <!-- / About me  -->
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style scoped>
.profile-image {
  margin-bottom: 20px;
}

.image.mobile-profile-image {
  float: left;
  margin-right: 20px;
}

.linkedin:visited, .xing:visited, .devto:visited, .twitter:visited {
  color: black;
}

.twitter:hover {
  color: #1DA1F2;
}

.devto:hover {
  color: darkgrey;
}

.linkedin:hover {
  color: blue;
}

.xing:hover {
  color: green;
}

.github:hover {
  color: #6f42c1;
}

.social-account {
  margin-right: 5px;
  padding: 0 5px;
}
</style>
