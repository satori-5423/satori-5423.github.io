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
              趣味：プログラミング、数学（コンピュータ関連）
            </p>
          </li>
          <li>
            <p>
              プレイしてるゲーム：原神（UID：802384849）
            </p>
          </li>
          <li>
            <p>
              受け入れ可能な言語（自然）：中国語（簡体字/繁体字）、日本語、英語
            </p>
          </li>
          <li>
            <p>
              受け入れ可能な言語（プログラミング）：C/C++、Java、JavaScript、GDScript
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
            <p>&nbsp;&nbsp;個人用MSVC C++補助ライブラリ<span style="color: red;">（中止、更新停止）</span></p>
            <span><a href="https://github.com/satori-5423/suxue2746841150.github.io"
                target="_blank">GitHubプロジェクトへ
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'（中国語、日本語、英語）'" />
            </h3>
            <p>&nbsp;&nbsp;個人のゲーム制作練習作品①<span style="color: red;">（製作中）</span></p>
            <span><a href="#">GitHubプロジェクトへ =>></a></span>
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
