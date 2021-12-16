import { Hero, BreadCrumbs } from '@components/common'
import { EthRates, WalletBar } from '@components/web3'
import { OrderCard } from '@components/order'
import { CourseList } from '@components/course'
import { BaseLayout } from '@components/layout'

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <BreadCrumbs />
        <WalletBar />
        <EthRates />
        <OrderCard />
        <CourseList />
      </BaseLayout>
    </>
  )
}
