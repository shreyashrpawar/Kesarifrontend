<template>
  <div class="page-wrapper">
    <!-- Start header -->
    <app-header></app-header>

    <section class="wpo-blog-single-section wpo-blog-single-left-sidebar-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col col-lg-10 col-12 offset-lg-1">
            <div class="wpo-blog-content">
              <div class="post format-standard-image">
                <div class="entry-media">
                  <img :src="require(`assets/images/blog/${article.img}`)" alt="" />
                </div>
                <div class="entry-meta" style="display: flex">
                  <ul>
                    <li>
                      <i class="fi flaticon-user"></i>
                      By Awayddings
                    </li>
                    <li>
                      <i class="fi flaticon-calendar"></i>
                      {{ article.date }}
                    </li>
                  </ul>
                </div>
                <div class="mt-3">
                  <h1>{{ article.title }}</h1>
                </div>
                <nuxt-content :document="article" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "../../components/layout/AppHeader.vue";
export default {
  name: "about",
  components: {
    AppHeader,
  },
  head: {
    title: "Awayddings - Destination Wedding Planner in India with Top Destinations",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Awayddings is the best destination wedding planner in Goa offers luxurious destination weddings venues in Goa to experience the magic of nature." },
      { hid: "keywords", name: "keywords", content: "Awaydding, destination, destination wedding, wedding planner, luxurious destination weddings, Goa, udaipur, venues, wedding dresses, photography, wedding invitations, engagement, bridesmaids, wedding cakes, grooming, weddings rings, weddings" },
    ],
  },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return { article };
  },
};
</script>

<style>
article {
  display: block;
  margin: 0 auto;
  padding: 0px 30px;
  max-width: 800px;
}

h1 {
  font-size: 34px;
  font-weight: 900;
  margin-bottom: 20px;
}
</style>
