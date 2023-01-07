import styles from '../.././styles/Home.module.css'

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <main className={styles.main}>
        <a href="/events/London">
          <img />
          <h1>Events In London</h1>
        </a>

        <a href="/events/India">
          <h1>Events In India</h1>
        </a>

        <a href="/events/USA">
          <h1>Events In USA</h1>
        </a>
      </main>
    </>
  )
}
export default EventsPage;

// export function getServerSideProps() {
//   return  {
//     props: {
//       title: "Hello"
//     }
//   }
// }