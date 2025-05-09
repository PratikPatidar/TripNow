import React from 'react'

const nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">

                        <a class="navbar-brand"><h1 class="logo">TripNow</h1></a>

                        <ul class="navbar-nav justify-content-center nav-ul">
                            <li class="nav-item nav-list">
                                <a class="nav-link active " href="/"><i class="fas fa-plane-departure"></i><br>Flights</a>
                            </li>
                            <li class="nav-item nav-list">
                                <a class="nav-link active" href="/bookings"><i class="fas fa-list-ul"></i><br>My Bookings</a>
                            </li>
                            <li class="nav-item nav-list">
                                <a class="nav-link active " href="/contact"><i class="fas fa-tty"></i><br>Contact Us</a>
                            </li>
                            <li class="nav-item nav-list">
                                <a class="nav-link active " href="/about"><i class="fas fa-tty"></i><br>{About} Us</a>
                            </li>
                        </ul>

                    </div>

                    <div class="d-flex">
                        {/* <% if(!currentUser) {%>
        <a href="/login" class="btn btn-dark auth-btn" type="button">Sign in</a>
        <a href="/register" class="btn btn-outline-light auth-btn" type="button">Sign up</a>
        <% }
                        else {%>
          <a href="/logout" class="btn btn-outline-light auth-btn" type="button">Log Out</a>
        <% } %> */}
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default nav
