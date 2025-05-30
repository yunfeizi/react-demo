import { useState, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './components/Layout'
import LoadingSpinner from './components/common/LoadingSpinner'
import './App.css'

// 懒加载路由组件
const VirtualListDemo = lazy(() => import('./pages/VirtualListDemo'))
const ComponentLibrary = lazy(() => import('./pages/ComponentLibrary'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const FlyMePage = lazy(() => import('./pages/FlyMePage'))
const OutboundPage = lazy(() => import('./pages/OutboundPage'))
const ReviewPage = lazy(() => import('./pages/ReviewPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const BookingListPage = lazy(() => import('./pages/BookingListPage'))
const BookingDetailPage = lazy(() => import('./pages/BookingDetailPage'))

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  // 模拟页面路由
  const renderPage = () => {
    console.log('renderPage------------', currentPage)
    switch (currentPage) {
      case 'virtual-list':
        return <VirtualListDemo />
      case 'component-library':
        return <ComponentLibrary />
      case 'flyme':
        return <FlyMePage />
      case 'outbound':
        return <OutboundPage />
      case 'review':
        return <ReviewPage />
      case 'login':
        return <LoginPage />
      case 'register':
        return <RegisterPage />
      case 'bookinglist':
        return <BookingListPage />
      case 'bookingdetail':
        return <BookingDetailPage />
      case 'dashboard':
      default:
        return <Dashboard />
    }
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Layout onNavigate={setCurrentPage} currentPage={currentPage}>
          <Suspense fallback={<LoadingSpinner />}>
            {renderPage()}
          </Suspense>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
