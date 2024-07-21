<template>
  <div class="wpo-blog-item">
    <div class="wpo-blog-img">
      <img :src="require('@/assets/images/blog/' + imgSrc)" alt="" />
    </div>
    <div class="wpo-blog-content">
      <div class="wpo-blog-content-top">
        <div class="b-top">
          <div class="b-top-inner">
            <h2>
              <a :href="blogLink">{{ blogTitle }} </a>
            </h2>
            <p style="line-height: 1.2rem;">
              {{ blogDescription.substring(0, 70) + "..." }}
            </p>
          </div>
        </div>
        <a class="b-btn" :href="blogLink">Read More..</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["imgSrc", "blogTitle", "blogDescription", "blogLink"],
};
</script>
