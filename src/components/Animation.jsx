import ScrollAnimation from "react-animate-on-scroll"
export function Animation({ children, animation = "fadeIn" }) {
  return (
    <>
      <ScrollAnimation
        animateIn={animation}
        offset={150}
        animateOnce={true}
        animatePreScroll={false}
      >
        {children}
      </ScrollAnimation>
    </>
  )
}
