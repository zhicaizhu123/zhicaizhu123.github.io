<style lang="scss" scoped>
@import "../public/styles/reset.scss";
.index-container {
  padding: 20px;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  .blog-list {
    font-size: 0;
    width: 100%;
    .blog-item {
      display: inline-block;
      font-size: 14px;
      width: 280px;
      max-width: calc(50% - 20px);
      border-radius: 4px;
      border: 1px solid #ddd;
      vertical-align: top;
      margin: 10px;
      overflow: hidden;
      transition: all .15s;
      &:hover {
        transform: translateY(-10px) scale(1.02);
        box-shadow: 0 5px 16px rgba(0,0,0,.2); 
      }
      a {
        color: #333;
      }
      &-cover {
        width: 100%;
        height: 160px;
        background-color: #ccc;
        @media screen and (max-width: 640px) {
          height: 100px;
        }
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      &-content {
        padding: 10px;
        &__title {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          font-size: 16px;
          font-weight: 500;
        }
        &__desc {
          color: #666;
          height: 45px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
}
</style>

<template>
  <div class="index-container">
    <ul class="blog-list">
      <li
        class="blog-item"
        v-for="blog in blogList"
        :key="blog.url">
        <a :href="blog.url">
          <div class="blog-item-cover">
            <img :src="blog.cover" alt="">
          </div>
          <div class="blog-item-content">
            <p class="blog-item-content__title">{{ blog.title }}</p>
            <div class="blog-item-content__desc">{{ blog.desc }}</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [
        {
          cover: '/images/miniprogram/cover-miniprogram.jpg',
          title: '破壳学堂小程序开发分享',
          desc: '小程序中遇到的问题和解决方法及技术分享',
          url: '/detail/miniprogram/'
        },
        {
          cover: '/images/git/cover-git.jpg',
          title: 'Git 使用规范',
          desc: '团队开发中，遵循一个合理、清晰的Git使用流程，是非常重要的。',
          url: '/detail/git/',
        },
        {
          cover: '/images/sourcetree/cover-sourcetree.jpg',
          title: 'SourceTree 使用教程',
          desc: 'SourceTree 是 Windows 和Mac OS X 下免费的 Git 和 Hg 客户端，拥有可视化界面，容易上手操作。',
          url: '/detail/sourcetree/'
        }
      ]
    }
  }
}
</script>
