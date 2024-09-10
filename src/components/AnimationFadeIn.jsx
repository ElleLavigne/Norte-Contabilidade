import ScrollAnimation from "react-animate-on-scroll"
export function AnimationFadeIn({ children, animation = 'fadeIn' }) {
  return (
    <>
      <ScrollAnimation
        animateIn={animation}
        offset={190}
        animateOnce={true}
        animatePreScroll={false}
      >
        {children}
      </ScrollAnimation>
    </>
  )
}
