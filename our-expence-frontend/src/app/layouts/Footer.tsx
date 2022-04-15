import React from 'react'

export default function Footer() {
  return (
      <footer className="footer text-white m-0 nav-bg">
        <div className="links mb-2">
          <a className="bounce" target= "_blanck" href = "https://github.com/AEMatamoros"><i className="mx-2 fa-4x fa-brands fa-linkedin"></i></a>
          <a className="bounce" target= "_blanck" href = "https://www.linkedin.com/in/alexis-eduardo-matamoros-mayorquin-3a87411b5"><i className="mx-2 fa-4x fa-brands fa-github-square"></i></a>
        </div >
        <div className="main-footer-text mb-1 text-center">
          <strong>
            "No matter how high is a  mountain, there is always a way to the top."
          </strong>
        </div>
        <div className="cop mb-1 text-center">
          <span>Alexis Eduardo Matamoros Mayorquin @2022</span>
        </div>
      </footer>
  )
}
