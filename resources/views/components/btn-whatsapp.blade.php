@props(['link'])

<a href="{{ $link }}" target="_blank" class="btn btn-whatsapp md:text-base mt-5">
    {{ $slot }}
    <i class="fa-brands fa-whatsapp text-xl ml-2"></i>
</a>
