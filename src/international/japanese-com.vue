<script setup>
import Instruction from '../views/project-instruction.vue'
import ContactCom from '../views/contact-com.vue'
</script>

<template>
  <div class="container">
    <!-- 自己紹介 -->
    <div id="skills">
      <h2>自己紹介</h2>
      <div>
        <ul style="list-style-type: square;">
          <li>
            <p>
              趣味：プログラミング、数学（コンピュータ）
            </p>
          </li>
          <li>
            <p>
              プレイしてるゲーム：
                <p>&nbsp;&nbsp;原神（UID：802384849）</p>
                <p>&nbsp;&nbsp;鳴潮（ユーザーID：700117442）</p>
            </p>
          </li>
          <li>
            <p>
              プログラミング言語：C/C++、Java、JavaScript、Rust
            </p>
          </li>
          <!-- もっと -->
        </ul>
      </div>
    </div>

    <!-- プロジェクト紹介 -->
    <div id="projects">
      <h2>プロジェクト</h2>
      <div>
        <ul style="list-style-type: disc;">
          <li>
            <h3>Clib Library
              <instruction :msg="'（中国語）'" />
            </h3>
            <p>&nbsp;&nbsp;個人用MSVC C++補助ライブラリ<span style="color: red;">（中止）</span></p>
            <span><a href="https://github.com/satori-5423/clib"
                target="_blank">GitHubプロジェクトへ
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'（中国語、日本語、英語）'" />
            </h3>
            <p>&nbsp;&nbsp;個人のゲーム制作練習作品①<span style="color: red;">（製作中）</span></p>
            <span><a href="https://github.com/satori-5423/godot-practise" target="_blank">GitHubプロジェクトへ =>></a></span>
          </li>
          <li>
            <h3>Format module
              <instruction :msg="'（英語）'" />
            </h3>
            <p>&nbsp;&nbsp;個人用C++補助モジュール<span style="color: red;">（実行中）</span></p>
            <span><a href="https://github.com/satori-5423/module-for-cpp-std-containers"
                target="_blank">GitHubプロジェクトへ
                =>></a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 連絡先 -->
    <div id="contact">
      <h2>連絡先</h2>
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
