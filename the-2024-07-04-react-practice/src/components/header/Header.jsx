import './Header.css';

export default function Header() {

  return (
    <header>
        <h1 className="site-heading text-center text-faded d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3">
                HaHaHomeschooling
            </span>
            <span className="site-heading-lower">
                Let Kids <span id="whatKidsDo">Study</span> Here
            </span>
        </h1>
    </header>
  )
}
