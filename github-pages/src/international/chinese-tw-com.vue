<script setup>
import Instruction from '../views/project-instruction.vue'
import ContactCom from '../views/contact-com.vue'
</script>

<template>
  <div class="container">
    <!-- 個人介紹 -->
    <div id="skills">
      <h2>個人介紹</h2>
      <div>
        <ul style="list-style-type: square;">
          <li>
            <p>
              興趣：編程、數學（計算機相關）
            </p>
          </li>
          <li>
            <p>
              在玩遊戲：原神（UID：802384849）、鳴潮（特徵碼：700117442）
            </p>
          </li>
          <li>
            <p>
              可接受語言（自然）：中文（簡/繁）、日文、英文
            </p>
          </li>
          <li>
            <p>
              可接受語言（編程）：C/C++、Java、JavaScript、GDScript
            </p>
          </li>
          <!-- 更多 -->
        </ul>
      </div>
    </div>

    <!-- 項目展示 -->
    <div id="projects">
      <h2>個人專案</h2>
      <div>
        <ul style="list-style-type: disc;">
          <li>
            <h3>Clib Library
              <instruction :msg="'（中文）'" />
            </h3>
            <p>&nbsp;&nbsp;個人MSVC C++輔助庫<span style="color: red;">（廢案，暫停更新）</span></p>
            <span><a href="https://github.com/satori-5423/suxue2746841150.github.io"
                target="_blank">前往Github專案
                =>></a></span>
          </li>
          <li>
            <h3>Godot practise
              <instruction :msg="'（中文、日文、英文）'" />
            </h3>
            <p>&nbsp;&nbsp;個人遊戲製作練習作品①<span style="color: red;">（製作中）</span></p>
            <span><a href="https://github.com/satori-5423/godot-practise" target="_blank">前往Github專案 =>></a></span>
          </li>
          <li>
            <h3>Format module
              <instruction :msg="'（英文）'" />
            </h3>
            <p>&nbsp;&nbsp;個人C++輔助模組<span style="color: red;">（實行中）</span></p>
            <span><a href="https://github.com/satori-5423/module-for-cpp-std-containers"
                target="_blank">前往Github專案
                =>></a></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 聯繫方式 -->
    <div id="contact">
      <h2>聯繫方式</h2>
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
