import AboutSection from '../../components/AboutSection'
import CurriculumSection from '../../components/CurriculumSection'
import EnrollmentSection from '../../components/EnrollmentSection'
import HeroSection from '../../components/HeroSection'
export default function page() {
  return (
    <>
      <HeroSection
        title="About Us"
        currentPage="about"
      />
      <AboutSection animateOnScroll={false} />
      <CurriculumSection />
      <EnrollmentSection />
    </>
  )
}
