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
              Hobbies: Programming, Mathematics (Computer-related)
            </p>
          </li>
          <li>
            <p>
              Currently Playing: Genshin Impact (UID: 802384849)
            </p>
          </li>
          <li>
            <p>
              Acceptable Languages (Natural): Chinese (Simplified/Traditional), Japanese, English
            </p>
          </li>
          <li>
            <p>
              Acceptable Languages (Programming): C/C++, Java, JavaScript, GDScript
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
            <p>&nbsp;&nbsp;Personal MSVC C++ auxiliary library <span style="color: red;">(Discontinued, no
                longer updated)</span></p>
            <span><a href="https://github.com/satori-5423/suxue2746841150.github.io" target="_blank">Go to
                Github Project
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'(Chinese, Japanese, English)'" />
            </h3>
            <p>&nbsp;&nbsp;Personal game development practice work①<span style="color: red;">(is
                making)</span></p>
            <span><a href="#">Go to Github Project =>></a></span>
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
