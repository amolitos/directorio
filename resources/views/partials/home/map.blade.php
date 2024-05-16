<div class="container bg-stone-50 dark:bg-transparent py-5 md:py-10 px-5">
    <h2 class="font-extrabold text-2xl sm:text-4xl text-gray-900 dark:super-title text-center">
        Directorio Nacional de Abogados
    </h2>
    <div class="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-2 mt-5">
        <a href="{{ route('busqueda') }}" class="btn btn-secondary py-3 px-5">
            BUSCO ABOGADO
        </a>
        <a href="{{ route('profile.edit') }}" class="btn btn-primary py-3 px-5">
            OFRECER MIS SERVICIOS
        </a>
    </div>
    <p class="font-semibold md:text-lg text-center mt-5">
        Con presencia en toda la república mexicana.
    </p>
    <div class="mt-2">
        <div react-map-mexico></div>
    </div>
</div>
