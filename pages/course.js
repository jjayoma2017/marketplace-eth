import { CourseHero, KeyPoints, Curriculum } from '@components/course'
import { Modal } from '@components/common'
import { BaseLayout } from '@components/layout'
export default function Course() {
  return (
    <BaseLayout>
      <div className="py-4">
        <CourseHero />
      </div>
      <KeyPoints />
      <div className="py-4">
        <Curriculum />
      </div>

      <Modal />
    </BaseLayout>
  )
}
