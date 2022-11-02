<template>
  <div class="flex flex-column">
    <div class="target-title mb-24px">代码库概况</div>
    <div class="code-library-overview flex-1 flex padding-24px border-radius-8px">
      <ul class="flex-1 grid grid-gap-12px grid-template-columns-30-percent font-size-12px" style="color: #8a8a8a">
        <li v-for="item in list">
          <div class="flex align-center">
            <span></span>
            {{ item.label }}
          </div>
          <div class="font-size-20px font-weight mt-10px" style="color: #10173f">{{ item.value }}</div>
        </li>
      </ul>
      <div style="width: 33.3%; border-left: 2px solid var(--gray-1)" class="flex flex-column align-end justify-center">
        <div class="font-size-16px" style="color: #666666">代码行数</div>
        <div class="font-size-32px mt-24px font-weight" style="color: #333333">123442</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'code-library-overview',
    data() {
      return {
        list: [
          {
            label: 'Jave',
            value: '22%',
          },
          {
            label: 'go',
            value: '17%',
          },
          {
            label: 'python',
            value: '18%',
          },
          {
            label: 'c++',
            value: '18%',
          },
          {
            label: 'c',
            value: '25%',
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .target-title {
    color: #292e43;
    font-size: 16px;
    font-weight: 500;
    &::before {
      content: '';
      display: inline-block;
      height: 12px;
      width: 5px;
      background: #226ee7;
      margin-right: 1em;
    }
  }
  .code-library-overview {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 2px 20px 0 #d3d6e3;
    opacity: 0.83;
  }
  li > div > span {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-right: 1em;
    border-radius: 50%;
  }
  li:nth-child(5n + 1) > div > span {
    background: #3c7afa;
  }
  li:nth-child(5n + 2) > div > span {
    background: #5acba8;
  }
  li:nth-child(5n + 3) > div > span {
    background: #62c9ff;
  }
  li:nth-child(5n + 4) > div > span {
    background: #f97171;
  }
  li:nth-child(5n + 5) > div > span {
    background: #faad14;
  }
</style>
