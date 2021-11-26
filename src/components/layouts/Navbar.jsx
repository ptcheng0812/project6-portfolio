import { useState } from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import useUser from '@/_hooks/user'
import CompsModalsAuthSignUp from '@/components/modals/auth/signup'
import CompsModalsAuthLogin from '@/components/modals/auth/login'

export default function CompsLayoutsNavbar() {
  const [openAuthSignUp, setAuthSignUp] = useState(false)
  const [openAuthLogin, setAuthLogin] = useState(false)

  const { currentUser, authSignUp, authLogin, authLogout } = useUser()

  return (
    <>
      <Navbar id="comps-layouts-navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} href="/"><a className="navbar-brand">Home</a></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!currentUser
                && (
                <>
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    onClick={() => setAuthSignUp(true)}
                  >SignUp</button>
                  <button
                    className="btn btn-success btn-sm"
                    type="button"
                    onClick={() => setAuthLogin(true)}
                  >LogIn</button>
                </>
                )}
              {currentUser
                && (
                  <>
                    <button
                      className="btn btn-danger btn-sm"
                      type="button"
                      onClick={() => authLogout()}
                    >Logout</button>
                    <a href="/my/profile">Profile</a>
                    <a href="/my/notifications">My Notificaations</a>
                  </>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CompsModalsAuthSignUp
        show={openAuthSignUp}
        handleClose={() => setAuthSignUp(false)}
        handleSubmit={(values) => {
          authSignUp(values).then(() => {
            setAuthSignUp(false)
          })
        }}
      />

      <CompsModalsAuthLogin
        show={openAuthLogin}
        handleClose={() => setAuthLogin(false)}
        handleSubmit={(values) => {
          authLogin(values).then(() => {
            setAuthLogin(false)
          })
        }}
      />

    </>
  )
}
