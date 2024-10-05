<script setup>
import Instruction from '../views/project-instruction.vue'
import ContactCom from '../views/contact-com.vue'
</script>

<template>
  <div class="container">
    <!-- Personal Introduction -->
    <div id="skills">
      <h2>Personal Introduction</h2>
      <div>
        <ul style="list-style-type: square;">
          <li>
            <p>
              Hobbies: Programming, Mathematics (Computer)
            </p>
          </li>
          <li>
            <p>
              Currently Playing:
                <p>&nbsp;&nbsp;Genshin Impact (UID: 802384849)</p>
                <p>&nbsp;&nbsp;Wuthering Waves (User ID: 700117442)</p>
            </p>
          </li>
          <li>
            <p>
              Programming Languages: C/C++, Java, JavaScript, Rust
            </p>
          </li>
          <!-- More -->
        </ul>
      </div>
    </div>

    <!-- Project Showcase -->
    <div id="projects">
      <h2>Personal Projects</h2>
      <div>
        <ul style="list-style-type: disc;">
          <li>
            <h3>Clib Library
              <instruction :msg="'(Chinese)'" />
            </h3>
            <p>&nbsp;&nbsp;Personal MSVC C++ auxiliary library <span style="color: red;"> (Discontinued)</span></p>
            <span><a href="https://github.com/satori-5423/clib" target="_blank">Go to
                Github Project
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'(Chinese, Japanese, English)'" />
            </h3>
            <p>&nbsp;&nbsp;Personal game development practice work①<span style="color: red;"> (Is
                making)</span></p>
            <span><a href="https://github.com/satori-5423/godot-practise" target="_blank">Go to Github Project =>></a></span>
          </li>
          <li>
            <h3>Format module
              <instruction :msg="'（English）'" />
            </h3>
            <p>&nbsp;&nbsp;Personal C++ auxiliary module<span style="color: red;"> (In progress)</span></p>
            <span><a href="https://github.com/satori-5423/module-for-cpp-std-containers"
                target="_blank">Go to Github Project
                =>></a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Contact Information -->
    <div id="contact">
      <h2>Contact Information</h2>
      <div>
        <contact-com />
      </div>
    </div>
  </div>
</template>

<style scoped src="../csses/page.css">
.smaller {
  font-size: smaller;
}

.medium {
  font-size: medium;
}
</style>
