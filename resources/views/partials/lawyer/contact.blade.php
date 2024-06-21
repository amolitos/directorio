<div class="card p-5">
    <h3 class="font-semibold text-xl">
        CONTACTO
    </h3>
    <ul class="flex flex-col gap-y-5 mt-5">
        <li>
            <i class="fa-solid fa-envelope text-lg text-primary mr-1"></i>
            {{ $lawyer->email }}
        </li>
        @if ($lawyer->profile->website)
            <li>
                <a href="{{ $lawyer->profile->website }}" target="_BLANK">
                    <i class="fa-solid fa-link text-lg text-primary mr-1"></i>
                    Página web
                </a>
            </li>
        @endif
    </ul>
    <div class="flex items-center gap-3 mt-3">
        @if ($lawyer->profile->linkedin)
            <a href="{{ $lawyer->profile->linkedin }}" target="_BLANK" class="icon-btn">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        @endif
        @if ($lawyer->profile->facebook)
            <a href="{{ $lawyer->profile->facebook }}" target="_BLANK" class="icon-btn">
                <i class="fa-brands fa-facebook"></i>
            </a>
        @endif
        @if ($lawyer->profile->instagram)
            <a href="{{ $lawyer->profile->instagram }}" target="_BLANK" class="icon-btn">
                <i class="fa-brands fa-instagram"></i>
            </a>
        @endif
        @if ($lawyer->profile->twitter)
            <a href="{{ $lawyer->profile->twitter }}" target="_BLANK" class="icon-btn">
                <i class="fa-brands fa-twitter"></i>
            </a>
        @endif
    </div>
    <div class="flex flex-col gap-4 mt-5">
        @if ($lawyer->profile->whatsapp)
            <a href="https://api.whatsapp.com/send?phone={{ $lawyer->profile->whatsapp }}" target="_BLANK"
                class="btn btn-primary grid">
                ENVIAR MENSAJE
            </a>
        @endif
        <div react-shared-button data-link="{{ url()->current() }}" class="grid"></div>
    </div>
</div>
