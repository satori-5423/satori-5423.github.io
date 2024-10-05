<script setup>
import Instruction from '../views/project-instruction.vue'
import ContactCom from '../views/contact-com.vue'
</script>

<template>
  <div class="container">
    <!-- 个人介绍 -->
    <div id="skills">
      <h2>个人介绍</h2>
      <div>
        <ul style="list-style-type: square;">
          <li>
            爱好：编程、数学（计算机）
          </li>
          <li>
            在玩游戏：
              <p>&nbsp;&nbsp;原神（UID：802384849）</p>
              <p>&nbsp;&nbsp;鸣潮（特征码：700117442）</p>
          </li>
          <li>
            编程语言：C/C++、Java、JavaScript、Rust
          </li>
          <!-- 更多 -->
        </ul>
      </div>
    </div>

    <!-- 项目展示 -->
    <div id="projects">
      <h2>个人项目</h2>
      <div>
        <ul style="list-style-type: disc;">
          <li>
            <h3>Clib Library
              <instruction :msg="'（中文）'" />
            </h3>
            <p>&nbsp;&nbsp;个人MSVC C++辅助库<span style="color: red;">（废弃）</span></p>
            <span><a href="https://github.com/satori-5423/clib"
                target="_blank">前往Github项目
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'（中文、日文、英文）'" />
            </h3>
            <p>&nbsp;&nbsp;个人游戏制作练习作品①<span style="color: red;">（制作中）</span></p>
            <span><a href="https://github.com/satori-5423/godot-practise" target="_blank">前往Github项目 =>></a></span>
          </li>
          <li>
            <h3>Format module
              <instruction :msg="'（英文）'" />
            </h3>
            <p>&nbsp;&nbsp;个人C++辅助模块<span style="color: red;">（实行中）</span></p>
            <span><a href="https://github.com/satori-5423/module-for-cpp-std-containers"
                target="_blank">前往Github项目
                =>></a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 联系方式 -->
    <div id="contact">
      <h2>联系方式</h2>
      <div>
        <contact-com />
      </div>
    </div>
  </div>
</template>

<style scoped src="../csses/page.css"></style>
