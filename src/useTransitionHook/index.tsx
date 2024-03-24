/*
useTransition is a React hook that is used in conjunction with the Suspense component to manage the transition of asynchronous or slow-loading components. It allows you to handle loading states and improve the user experience when loading data or performing expensive calculations before rendering the final result.

When using useTransition, you can specify a timeout duration for suspending the data loading or calculation before displaying a fallback UI. This can help prevent loading states from flickering and provide a smoother transition for the user.
*/

import { useState, useTransition } from 'react'

import AboutTab from './AboutTab'
import ContactTab from './ContactTab'
import PostsTab from './PostsTab'
import TabButton from './TabButton'

type Tab = 'about' | 'posts' | 'contact'

const DemoUseTransition = () => {
  const [tab, setTab] = useState<Tab>('about')

  const selectTab = (tab: Tab) => {
    setTab(tab)
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: '10px',
          marginBottom: '40px'
        }}
      >
        <TabButton
          title='About'
          onClick={() => selectTab('about')}
          variant={tab === 'about' ? 'blue' : 'gray'}
        />
        <TabButton
          title='Posts'
          onClick={() => selectTab('posts')}
          variant={tab === 'posts' ? 'blue' : 'grey'}
        />
        <TabButton
          title='Contact'
          onClick={() => selectTab('contact')}
          variant={tab === 'contact' ? 'blue' : 'grey'}
        />
      </div>

      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </div>
  )
}

export default DemoUseTransition
