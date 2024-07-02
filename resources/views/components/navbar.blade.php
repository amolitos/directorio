<div class="navbar sticky top-0 z-20">
    <div class="flex items-center">
        <button id="navbar-toggle"
            class="btn border border-gray-300 rounded text-orange-100 mr-3 px-2.5 md:hidden focus:ring-primary/30">
            <i class="fa-solid fa-bars mr-1"></i>
            Menú
        </button>
        <a href="{{ route('home') }}" class="flex items-center gap-x-3 mobile:ml-auto">
            <img src="{{ asset('images/logo-alt.svg') }}" alt="Logo" class="h-16 md:h-20">
        </a>
    </div>
    <ul class="navbar-menu hidden md:flex">
        <li>
            <a href="{{ route('search') }}" class="navbar-link">
                <i class="fa-solid fa-magnifying-glass mr-1"></i>
                Buscar
            </a>
        </li>
        @auth
            <li>
                <a href="{{ route('school.index') }}" class="btn btn-secondary block">
                    <i class="fa-solid fa-chalkboard-user mr-1"></i>
                    Aula virtual
                </a>
            </li>
            <li>
                <button class="dropdown">
                    <div class="btn btn-primary">
                        MI CUENTA
                    </div>
                    <ul class="dropdown-body">
                        <li>
                            <a href="{{ route('profile.show') }}" class="dropdown-item">
                                Ver mi perfil
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('profile.edit') }}" class="dropdown-item">
                                Editar perfil
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('logout') }}" class="dropdown-item">
                                Salir
                            </a>
                        </li>
                    </ul>
                </button>
            </li>
        @else
            <li>
                <a href="{{ route('login') }}" class="btn btn-secondary block">
                    Ya estoy registrado
                </a>
            </li>
            <li>
                <a href="{{ route('register') }}" class="btn btn-primary block">
                    Registrarme
                </a>
            </li>
        @endauth
    </ul>
</div>
