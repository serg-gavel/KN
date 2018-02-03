import Vue from 'vue'
import Router from 'vue-router'
import MainSection from '@/components/MainSection'
import BlogSection from '@/components/BlogSection'
import ServicesSection from '@/components/ServicesSection'
import CooperationSection from '@/components/CooperationSection'
import AboutSection from '@/components/AboutSection'
import PostInner from '@/components/PostInner'
import AddPost from '@/components/AddPost'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',
      name: 'MainSection',
      component: MainSection
    },
    {path: '/blog',
      name: 'BlogSection',
      component: BlogSection
    },
    {path: '/services',
      name: 'ServicesSection',
      component: ServicesSection
    },
    {path: '/cooperation',
      name: 'CooperationSection',
      component: CooperationSection
    },
    {path: '/about',
      name: 'AboutSection',
      component: AboutSection
    },
    {path: '/post',
      name: 'PostInner',
      component: PostInner
    },
    {path: '/add_post',
      name: 'AddPost',
      component: AddPost
    }
  ]
})
