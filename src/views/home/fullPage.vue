<template>
  <div class="homePage">
    <!-- <el-menu
      :default-active="activeIndex"
      class="navBar"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0C0F16"
      text-color="#999999"
      active-text-color="#ddd"
      style="border: none;"
    >
      <router-link to="/">
        <img class="logo" src="@/assets/img/logo1.png" />
      </router-link>
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">产品与服务</template>
        <el-menu-item index="2-1">门诊号源管理系统</el-menu-item>
        <el-menu-item index="2-2">医技预约管理系统</el-menu-item>
        <el-menu-item index="2-3">床位预约管理系统</el-menu-item>
        <el-menu-item index="2-3">治疗预约管理系统</el-menu-item>
        <el-menu-item index="2-3">手术预约管理系统</el-menu-item>
        <el-menu-item index="2-3">互联网医院建设方案</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">案例中心</template>
        <el-menu-item index="3-1">全院资源统一预约管理</el-menu-item>
        <el-menu-item index="3-2">互联网+医疗服务</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">新闻中心</template>
        <el-menu-item index="4-1">百慧动态</el-menu-item>
        <el-menu-item index="4-2">会议资讯</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">关于百慧</template>
        <el-menu-item index="5-1">企业概述</el-menu-item>
        <el-menu-item index="5-2">人才招聘</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">联系我们</el-menu-item>
      <el-input class="search" placeholder="广东百慧：新医改" size="mini">
        |
        <el-button type="text" slot="append" icon="el-icon-search" size="mini"></el-button>
      </el-input>
    </el-menu>-->
    <full-page ref="fullpage" id="fullpage" :options="options">
      <div class="section section-one">
        <el-menu
          :default-active="activeIndex"
          class="navBar"
          mode="horizontal"
          @select="handleSelect"
          background-color="#0C0F16"
          text-color="#999999"
          active-text-color="#ddd"
          style="border: none;"
        >
          <router-link to="/">
            <img class="logo" src="@/assets/img/logo1.png" />
          </router-link>
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">产品与服务</template>
            <el-submenu index="2-1">
              <template slot="title">统一资源预约平台</template>
              <el-menu-item index="2-2-1">门诊号源管理系统</el-menu-item>
              <el-menu-item index="2-2-2">医技预约管理系统</el-menu-item>
              <el-menu-item index="2-2-3">床位预约管理系统</el-menu-item>
              <el-menu-item index="2-2-4">治疗预约管理系统</el-menu-item>
              <el-menu-item index="2-2-5">手术预约管理系统</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-2">互联网医院</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">案例中心</el-menu-item>
          <el-submenu index="4">
            <template slot="title">新闻中心</template>
            <el-menu-item index="4-1">百慧动态</el-menu-item>
            <el-menu-item index="4-2">会议资讯</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">关于百慧</template>
            <el-menu-item index="5-1">企业概述</el-menu-item>
            <el-menu-item index="5-2">人才招聘</el-menu-item>
          </el-submenu>
          <el-menu-item index="6">联系我们</el-menu-item>
          <el-input class="search" placeholder="搜索" size="mini">
            <el-button type="text" slot="append" icon="el-icon-search" size="mini"></el-button>
          </el-input>
        </el-menu>
        <el-carousel class="home-carousel" :interval="4000" height="660px">
          <el-carousel-item>
            <img src="@/assets/img/byway1.png" class="bannerImg" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="section section-two">
        <div class="hosImg">
          <img src="@/assets/img/hospital.png" />
        </div>
        <div class="hosCont">
          <p class="title">互联网医院</p>
          <p class="subtitle">Internet Hosptial Construction Plan</p>
          <p
            class="contain"
          >百慧科技互联网医院建设平台基于先进的互联网、物联网、人工智能技术，并与医院全方位结合，实现了健康咨询服务、智能导诊、智能问诊、AI病历、体查、视频问诊、在线复诊、智能审方、在线结算、处方流转、用药指导、报告解读、线上线下转诊、医技住院预约、健康宣教等服务</p>
          <el-link :underline="false">
            了解更多
            <i class="el-icon-arrow-right" />
          </el-link>
        </div>
      </div>
      <div class="section section-three">
        <ul
          class="resourseList"
          @mouseover="toggleShow(-1, true)"
          @mouseout="toggleShow(-1, false)"
        >
          <li
            @mouseenter="toggleShow(index, true)"
            @mouseout="toggleShow(index, false)"
            v-for="(item, index) in resourseList"
          >
            {{item.label}}
            <span v-if="item.show">{{item.translation}}</span>
            <!-- <el-link :underline="false">了解更多</el-link> -->
          </li>
        </ul>
        <div class="resourseCont" v-show="!detail">
          <p class="title">统一资源预约服务平台</p>
          <p class="subtitle">Integrated Hosptial Reservation Service System</p>
          <p class="contain">统一整合医院的医护人员、设备、床位等资源，为患者提供智能高效的服务</p>
          <el-link :underline="false">
            了解更多
            <i class="el-icon-arrow-right" />
          </el-link>
        </div>
        <div class="resourseImg" v-show="detail">
          <transition name="el-fade-in">
            <img :src="require('@/assets/img/resource' + index + '.png')" />
          </transition>
        </div>
      </div>
      <div class="section section-four">
        <div class="newsCont">
          <p class="title">新闻中心</p>
          <p class="subtitle">News Center</p>
          <div class="contain">
            <div class="oneNews">
              <img class="logo" src="@/assets/img/logo2.png" />
              <div class="backImg">
                <img src="@/assets/img/news1.png" />
              </div>
              <div class="message">
                <p class="msgTitle">重磅！医疗信息化权威杂志刊登百慧科技智慧医疗服务方案</p>
                <p class="msgCont">近日，《中国数字医学》刊登了我司的“以患者为中心”的智慧医疗服务...</p>
                <p class="msgTime">2020.04.21</p>
              </div>
            </div>
            <div class="oneNews">
              <img class="logo" src="@/assets/img/logo2.png" />
              <div class="backImg">
                <img src="@/assets/img/news2.png" />
              </div>
              <div class="message">
                <p class="msgTitle">百慧倾力打造的广妇儿互联网医院又上新闻啦！</p>
                <p class="msgCont">日前，针对新冠疫情期间互联网线上问诊的就医新模式，百慧与广妇儿共同运营...</p>
                <p class="msgTime">2020.03.27</p>
              </div>
            </div>
            <div class="oneNews">
              <img class="logo" src="@/assets/img/logo2.png" />
              <div class="backImg">
                <img src="@/assets/img/news3.png" />
              </div>
              <div class="message">
                <p class="msgTitle">百慧科技互联网医战“疫”火力全开！</p>
                <p class="msgCont">面对突发疫情，我司迅速成立疫情支援工作小组，迅速响应并实现疫情期间医院...</p>
                <p class="msgTime">2020.02.26</p>
              </div>
            </div>
            <div class="oneNews">
              <img class="logo" src="@/assets/img/logo2.png" />
              <div class="backImg">
                <img src="@/assets/img/news4.png" />
              </div>
              <div class="message">
                <p class="msgTitle">携手扬帆再启航｜我司荣获联通（广东）优秀合作伙伴！</p>
                <p class="msgCont">作为联通（广东）的深度合作伙伴，一直以来保持医疗健康+互联网领域的紧密...</p>
                <p class="msgTime">2020.01.17</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-five fp-auto-height" ref="content">
        <div class="message">
          <img src="@/assets/img/logo1.png" />
          <p class="title">广东百慧科技有限公司</p>
          <p class="list">电话：020-89443202</p>
          <p class="list">邮箱：bywaytech@gdbyway.com</p>
          <p class="list">地址：广东省广州市海珠区新港东路996号保利世贸中心G座301</p>
        </div>
        <div class="menuList">
          <div class="menuItem">
            <p class="title">产品与服务</p>
            <p class="list">门诊号源管理系统</p>
            <p class="list">医技预约管理系统</p>
            <p class="list">床位预约管理系统</p>
            <p class="list">治疗预约管理系统</p>
            <p class="list">手术预约管理系统</p>
            <p class="list">互联网医院建设方案</p>
          </div>
          <div class="menuItem">
            <p class="title">案例中心</p>
            <p class="list">全院资源统一预约管理</p>
            <p class="list">互联网+医疗服务</p>
          </div>
          <div class="menuItem">
            <p class="title">新闻中心</p>
            <p class="list">百慧动态</p>
            <p class="list">会议资讯</p>
          </div>
          <div class="menuItem">
            <p class="title">关于百慧</p>
            <p class="list">企业概述</p>
            <p class="list">人才招聘</p>
          </div>
        </div>
        <div class="code">
          <img src="@/assets/img/code.jpg" />
          <p class="codeWord">百慧科技官方微信</p>
        </div>
        <div class="copyright">Copyright © www.gdbyway.com, All Rights Reserved.</div>
      </div>
    </full-page>
  </div>
</template>
<script>
// import 'https://unpkg.com/fullpage.js/dist/fullpage.min.css'
import $ from "jquery";
export default {
  data() {
    return {
      activeIndex: "1",
      detail: false,
      index: 1,
      resourseList: [
        {
          label: "门诊号源管理系统",
          translation: " —— Outpatient Register Management System",
          show: false
        },
        {
          label: "医技预约管理系统",
          translation: " —— Medical Examination Reservation Management System",
          show: false
        },
        {
          label: "治疗预约管理系统",
          translation: " —— Treatment Reservation Management System",
          show: false
        },
        {
          label: "床位预约管理系统",
          translation: " —— Bed Reservation Management System",
          show: false
        },
        {
          label: "日间手术预约管理系统",
          translation: " —— Ambulatory Surgery Reservation Management",
          show: false
        }
      ],
      options: {
        licenseKey: null,
        menu: "#menu",
        anchors: ["page1", "page2", "page3", "page4", "footer"]
        // sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    scroll() {
      console.log(this.$refs["fullpage"].fullpage.current);
      if (this.$refs["fullpage"].fullpage.current === 1) {
        this.$refs.fullpage.api.setAllowScrolling(false);
        let start = document.documentElement.scrollTop;
        let last = 0;
        document.body.scroll(function() {
          // 获得页面实时滚动的位置
          let end = document.documentElement.scrollTop;
          // 如滚动的位置小于0，则代表页面在倒数第二屏向上滚，这个时候再改变页面的滚动方式
          if (end - start < 0) {
            this.$refs.fullpage.api.setAllowScrolling(true);
          }
        });
      }
    },
    toggleShow(index, type) {
      if (index === -1) {
        this.detail = type;
      } else {
        // this.detail = !this.detail
        this.index = index + 1;
        this.resourseList[index].show = type;
      }
    },
    colToggle() {
      let self = this;
      // 实现普通下滑动画
      // $(this.$refs.content).slideDown(function () {
      //   // self.isContentShow = !self.isContentShow
      // })
      $(this.$refs.content).fadeToggle();
    }
  }
};
</script>

<style lang='scss'>
.homePage {
  height: 100%;
}
.el-menu-item:hover,
.el-submenu__title:hover,
.el-menu--horizontal .el-menu .el-menu-item:hover {
  color: #fff !important;
}
.el-menu--horizontal.el-menu .el-menu--popup .el-menu--popup-bottom-start {
  min-width: 100px;
  max-width: 140px;
  background: rgba(12, 15, 22, 0.5) !important;
  opacity: 0.5 !important;
}
.section-one {
  .el-menu {
    z-index: 999;
    position: fixed;
    width: 100%;
    // text-align: center;
    // padding: 0 10%;
    .is-active,
    .el-submenu__title {
      border: none !important;
    }
    .el-menu-item {
      width: 100px;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
    }
    .logo {
      width: 130px;
      margin: 16px 4% 0px 10%;
      float: left;
      display: block;
    }
    .search {
      width: 200px;
      margin: 16px 10% 0px 2%;
      .el-input__inner {
        background-color: #10141e;
        border-radius: 4px;
        border: none;
      }
      .el-input-group__append {
        background-color: #10141e;
        border: none;
        font-size: 16px;
        .el-button {
          border-left: 1px solid #999999;
          border-radius: 0;
          height: 4px;
          padding-left: 10px;
          position: relative;
          top: 8px;
        }
        .el-icon-search {
          position: relative;
          top: -8px;
        }
      }
    }
  }
  .bannerImg {
    width: 100%;
    background-size: 100% 100%;
  }
}
.section-two {
  background-image: url("../../assets/img/background1.png");
  background-repeat: repeat-x;
  padding: 0 15%;
  // fullpage自带类名
  .fp-tableCell {
    display: flex;
    justify-content: space-between;
  }
  .hosImg {
    width: 40%;
    // height: 84%;
    margin: auto 0;
    margin-left: 0;
    img {
      width: 100%;
    }
  }
  .hosCont {
    width: 50%;
    margin: auto 0;
    margin-right: 0;
    color: #fff;
    .title {
      font-size: 32px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 60px;
    }
    .subtitle,
    .contain {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 200;
      line-height: 24px;
    }
    .contain {
      margin: 65px 0;
    }
    .el-link {
      width: 118px;
      height: 34px;
      border: 1px solid rgba(78, 209, 215, 1);
      opacity: 1;
      border-radius: 22px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 20px;
      color: rgba(78, 209, 215, 1);
    }
  }
}
.section-three {
  background-image: url("../../assets/img/background2.png");
  background-size: 100% 100%;
  padding: 0 15%;
  // fullpage自带类名
  .fp-tableCell {
    display: flex;
    justify-content: space-around;
  }
  .resourseCont {
    width: 40%;
    margin: auto 0px;
    color: #fff;
    .title {
      font-size: 32px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 60px;
    }
    .subtitle,
    .contain {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 200;
      line-height: 24px;
    }
    .contain {
      margin: 65px 0;
    }
    .el-link {
      width: 118px;
      height: 34px;
      border: 1px solid rgba(78, 209, 215, 1);
      opacity: 1;
      border-radius: 22px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 20px;
      color: rgba(78, 209, 215, 1);
    }
  }
  .resourseImg {
    width: 40%;
    margin: auto 0px;
    // transition: all .4s;
    // opacity: 0.6;
    img {
      width: 130%;
    }
  }
  .resourseList {
    display: block;
    list-style: none;
    margin: auto 0;
    // text-align: right;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 24px;
    color: #fff;
    li {
      width: 450px;
      height: 24px;
      margin: 6px 0;
      padding: 6px 14px;
    }
    li span {
      font-size: 8px;
    }
    li .el-link {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 20px;
      color: rgba(78, 209, 215, 1);
      opacity: 1;
    }
    li .el-link:hover {
      background: none;
    }
    li:hover {
      width: fit-content;
      // position: absolute;
      // right: 0;
      cursor: pointer;
      background: linear-gradient(
        180deg,
        rgba(1, 218, 185, 1) 0%,
        rgba(1, 159, 232, 1) 100%
      );
      border-radius: 4px;
    }
  }
}
.section-four {
  padding: 2% 15%;
  // fullpage自带类名
  .fp-tableCell {
    display: flex;
    justify-content: space-between;
  }
  // .auto-height {
  background-image: url("../../assets/img/background3.png");
  background-size: 100% 100%;
  // }
  .newsCont {
    // width: 74%;
    margin: auto 0;
    color: #fff;
    .title {
      font-size: 32px;
      font-family: PingFang SC;
      font-weight: 500;
      line-height: 60px;
    }
    .subtitle {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 200;
      line-height: 24px;
    }
    .contain {
      margin: 62px 0;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      .oneNews {
        width: 23%;
        display: flex;
        flex-direction: column;
        .logo {
          width: 5%;
          position: absolute;
          // top: 20px;
          padding-top: 18px;
          padding-left: 12px;
          // float: left;
          z-index: 999;
        }
        .backImg {
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.57) 69%,
            rgba(0, 0, 0, 1) 100%
          );
          opacity: 0.5;
          img {
            vertical-align: bottom;
            width: 100%;
          }
        }
        .message {
          // height: 150px;
          background-color: #fff;
          padding: 10px 16px 16px 16px;
          .msgTitle {
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: bold;
            line-height: 24px;
            color: rgba(51, 51, 51, 1);
          }
          .msgCont {
            margin: 6px 0;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            line-height: 20px;
            color: rgba(51, 51, 51, 1);
          }
          .msgTime {
            // margin: 10px 0;
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 500;
            line-height: 20px;
            color: rgba(153, 153, 153, 1);
          }
        }
      }
    }
  }
}
.section-five {
  padding: 2% 15%;
  // fullpage自带类名
  .fp-tableCell {
    display: flex;
    justify-content: space-between;
  }
  background-image: url("../../assets/img/background4.png");
  // background-size: 100% 100%;
  color: #fff;
  // animation: message 5s infinite;
  // transition: all 4s ease-in;
  .message {
    width: 20%;
    margin-right: 6%;
    img {
      width: 80%;
    }
    .title {
      margin: 10px 0;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: bold;
      line-height: 24px;
    }
    .list {
      color: #999999;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .menuList {
    width: 46%;
    display: flex;
    justify-content: space-between;
    .menuItem {
      .title {
        margin-bottom: 20px;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: bold;
        line-height: 24px;
      }
      .list {
        color: #999999;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 20px;
      }
      .list:hover {
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .code {
    width: 12%;
    margin-left: 2%;
    img {
      width: 100%;
    }
    .codeWord {
      margin: 0 auto;
      width: fit-content;
      color: #999999;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .copyright {
    margin-top: 10%;
    position: absolute;
    bottom: 20px;
    left: 38%;
    color: #ddd;
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 20px;
  }
}
.fp-auto-height {
  height: 240px !important;
}
</style>
