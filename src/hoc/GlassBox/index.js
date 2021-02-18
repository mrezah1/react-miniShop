import './style.css'

const GlassBox = ({ children, cls = '' }) => (
  <section className={`glass-box ${cls} px-3 py-2 mt-4 text-center`}>
    {children}
  </section>
)

export default GlassBox
